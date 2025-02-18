:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousethymusageing'
.. highlight: bash

bioconductor-mousethymusageing
==============================

.. conda:recipe:: bioconductor-mousethymusageing
   :replaces_section_title:
   :noindex:

   Single\-cell Transcriptomics Data of the Ageing Mouse Thymus

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/MouseThymusAgeing.html
   :license: GPL-3
   :recipe: /`bioconductor-mousethymusageing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousethymusageing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousethymusageing/meta.yaml>`_

   This package provides data access to counts matrices and meta\-data for single\-cell RNA sequencing data of thymic epithlial cells across mouse ageing using SMARTseq2 and 10X Genommics chemistries. Access is provided as a data package via ExperimentHub. It is designed to facilitate the re\-use of data from Baran\-Gale \_et al.\_ in a consistent format that includes relevant and informative meta\-data.


.. conda:package:: bioconductor-mousethymusageing

   |downloads_bioconductor-mousethymusageing| |docker_bioconductor-mousethymusageing|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mousethymusageing

   and update with::

      mamba update bioconductor-mousethymusageing

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mousethymusageing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousethymusageing:<tag>

   (see `bioconductor-mousethymusageing/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousethymusageing| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousethymusageing.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousethymusageing
   :alt:   (downloads)
.. |docker_bioconductor-mousethymusageing| image:: https://quay.io/repository/biocontainers/bioconductor-mousethymusageing/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousethymusageing
.. _`bioconductor-mousethymusageing/tags`: https://quay.io/repository/biocontainers/bioconductor-mousethymusageing?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mousethymusageing";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousethymusageing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousethymusageing/README.html