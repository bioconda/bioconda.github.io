:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'desman'
.. highlight: bash

desman
======

.. conda:recipe:: desman
   :replaces_section_title:
   :noindex:

   De novo Extraction of Strains from MetAgeNomes

   :homepage: https://github.com/chrisquince/DESMAN
   :license: BSD / BSD
   :recipe: /`desman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1309-9`

   


.. conda:package:: desman

   |downloads_desman| |docker_desman|

   :versions:
      
      

      ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends cython: ``>=0.19.1``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=0.11.0``
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-getopt: 
   :depends r-ggplot2: ``>=2.2.2``
   :depends r-labeling: 
   :depends r-reshape: ``>=0.8.7``
   :depends scikit-learn: 
   :depends scipy: ``>=0.12.0``
   :depends setuptools: 
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

      mamba install desman

   and update with::

      mamba update desman

  To create a new environment, run::

      mamba create --name myenvname desman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/desman:<tag>

   (see `desman/tags`_ for valid values for ``<tag>``)


.. |downloads_desman| image:: https://img.shields.io/conda/dn/bioconda/desman.svg?style=flat
   :target: https://anaconda.org/bioconda/desman
   :alt:   (downloads)
.. |docker_desman| image:: https://quay.io/repository/biocontainers/desman/status
   :target: https://quay.io/repository/biocontainers/desman
.. _`desman/tags`: https://quay.io/repository/biocontainers/desman?tab=tags


.. raw:: html

    <script>
        var package = "desman";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desman/README.html