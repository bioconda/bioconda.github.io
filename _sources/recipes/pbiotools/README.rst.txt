:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbiotools'
.. highlight: bash

pbiotools
=========

.. conda:recipe:: pbiotools
   :replaces_section_title:
   :noindex:

   Miscellaneous bioinformatics and other supporting utilities for Python 3

   :homepage: https://github.com/dieterich-lab/pbiotools
   :license: MIT / MIT
   :recipe: /`pbiotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbiotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbiotools/meta.yaml>`_

   


.. conda:package:: pbiotools

   |downloads_pbiotools| |docker_pbiotools|

   :versions:
      
      

      ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.0.0-0``,  ``2.0.0-0``

      

   
   :depends biopython: 
   :depends dask: 
   :depends fastparquet: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends more-itertools: 
   :depends mygene: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pyensembl: 
   :depends pysam: ``>0.9.1``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pbiotools

   and update with::

      mamba update pbiotools

  To create a new environment, run::

      mamba create --name myenvname pbiotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbiotools:<tag>

   (see `pbiotools/tags`_ for valid values for ``<tag>``)


.. |downloads_pbiotools| image:: https://img.shields.io/conda/dn/bioconda/pbiotools.svg?style=flat
   :target: https://anaconda.org/bioconda/pbiotools
   :alt:   (downloads)
.. |docker_pbiotools| image:: https://quay.io/repository/biocontainers/pbiotools/status
   :target: https://quay.io/repository/biocontainers/pbiotools
.. _`pbiotools/tags`: https://quay.io/repository/biocontainers/pbiotools?tab=tags


.. raw:: html

    <script>
        var package = "pbiotools";
        var versions = ["4.0.1","4.0.1","4.0.0","3.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbiotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbiotools/README.html