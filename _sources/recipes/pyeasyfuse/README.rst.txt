:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyeasyfuse'
.. highlight: bash

pyeasyfuse
==========

.. conda:recipe:: pyeasyfuse
   :replaces_section_title:
   :noindex:

   EasyFuse is a pipeline to detect fusion transcripts from RNA\-seq data with high accuracy. The current version of EasyFuse uses two fusion gene detection tools\, STAR\-Fusion and Fusioncatcher along with a powerful read filtering strategy\, stringent re\-quantification of supporting reads and machine learning for highly accurate predictions.

   :homepage: https://github.com/TRON-bioinformatics/easyfuse-src
   :documentation: https://github.com/TRON-Bioinformatics/EasyFuse
   
   :developer docs: https://pypi.org/project/pyeasyfuse/
   :license: GPL / GPL-3.0-only
   :recipe: /`pyeasyfuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeasyfuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeasyfuse/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01247-9`

   


.. conda:package:: pyeasyfuse

   |downloads_pyeasyfuse| |docker_pyeasyfuse|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends biopython: ``1.73.*``
   :depends bx-python: ``0.8.*``
   :depends gffutils: ``0.10.*``
   :depends importlib-metadata: 
   :depends logzero: ``1.7.*``
   :depends numpy: ``1.21.*``
   :depends pandas: ``>=1.0.0``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.7,<3.8``
   :depends python-xxhash: ``1.4.*``
   :depends pytz: ``2022.7.*``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-optparse: 
   :depends r-randomforest: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pyeasyfuse

   and update with::

      mamba update pyeasyfuse

  To create a new environment, run::

      mamba create --name myenvname pyeasyfuse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyeasyfuse:<tag>

   (see `pyeasyfuse/tags`_ for valid values for ``<tag>``)


.. |downloads_pyeasyfuse| image:: https://img.shields.io/conda/dn/bioconda/pyeasyfuse.svg?style=flat
   :target: https://anaconda.org/bioconda/pyeasyfuse
   :alt:   (downloads)
.. |docker_pyeasyfuse| image:: https://quay.io/repository/biocontainers/pyeasyfuse/status
   :target: https://quay.io/repository/biocontainers/pyeasyfuse
.. _`pyeasyfuse/tags`: https://quay.io/repository/biocontainers/pyeasyfuse?tab=tags


.. raw:: html

    <script>
        var package = "pyeasyfuse";
        var versions = ["2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyeasyfuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyeasyfuse/README.html