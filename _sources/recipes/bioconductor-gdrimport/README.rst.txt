:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrimport'
.. highlight: bash

bioconductor-gdrimport
======================

.. conda:recipe:: bioconductor-gdrimport
   :replaces_section_title:
   :noindex:

   Package for handling the import of dose\-response data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gDRimport.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrimport/meta.yaml>`_

   The package is a part of the gDR suite. It helps to prepare raw drug response data for downstream processing. It mainly contains helper functions for importing\/loading\/validating dose\-response data provided in different file formats.


.. conda:package:: bioconductor-gdrimport

   |downloads_bioconductor-gdrimport| |docker_bioconductor-gdrimport|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-bumpymatrix: ``>=1.10.0,<1.11.0``
   :depends bioconductor-coregx: ``>=2.6.0,<2.7.0``
   :depends bioconductor-gdrutils: ``>=1.0.0,<1.1.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-pharmacogx: ``>=3.6.0,<3.7.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-magrittr: 
   :depends r-openxlsx: 
   :depends r-readxl: 
   :depends r-rio: 
   :depends r-stringi: 
   :depends r-tibble: 
   :depends r-xml: 
   :depends r-yaml: 
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

      mamba install bioconductor-gdrimport

   and update with::

      mamba update bioconductor-gdrimport

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdrimport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdrimport:<tag>

   (see `bioconductor-gdrimport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdrimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrimport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrimport
   :alt:   (downloads)
.. |docker_bioconductor-gdrimport| image:: https://quay.io/repository/biocontainers/bioconductor-gdrimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrimport
.. _`bioconductor-gdrimport/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrimport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrimport";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrimport/README.html