:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousethymusageing'
.. highlight: bash

bioconductor-mousethymusageing
==============================

.. conda:recipe:: bioconductor-mousethymusageing
   :replaces_section_title:
   :noindex:

   Single\-cell Transcriptomics Data of the Ageing Mouse Thymus

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MouseThymusAgeing.html
   :license: GPL-3
   :recipe: /`bioconductor-mousethymusageing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousethymusageing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousethymusageing/meta.yaml>`_

   This package provides data access to counts matrices and meta\-data for single\-cell RNA sequencing data of thymic epithlial cells across mouse ageing using SMARTseq2 and 10X Genommics chemistries. Access is provided as a data package via ExperimentHub. It is designed to facilitate the re\-use of data from Baran\-Gale \_et al.\_ in a consistent format that includes relevant and informative meta\-data.


.. conda:package:: bioconductor-mousethymusageing

   |downloads_bioconductor-mousethymusageing| |docker_bioconductor-mousethymusageing|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mousethymusageing

   and update with::

      conda update bioconductor-mousethymusageing

   or use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.2.0","1.2.0","1.0.0"];
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