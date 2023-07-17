:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oder'
.. highlight: bash

bioconductor-oder
=================

.. conda:recipe:: bioconductor-oder
   :replaces_section_title:
   :noindex:

   Optimising the Definition of Expressed Regions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ODER.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-oder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oder/meta.yaml>`_

   The aim of ODER is to identify previously unannotated expressed regions \(ERs\) using RNA\-sequencing data. For this purpose\, ODER defines and optimises the definition of ERs\, then connected these ERs to genes using junction data. In this way\, ODER improves gene annotation. Gene annotation is a staple input of many bioinformatic pipelines and a more complete gene annotation can enable more accurate interpretation of disease associated variants.


.. conda:package:: bioconductor-oder

   |downloads_bioconductor-oder| |docker_bioconductor-oder|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-dasper: ``>=1.9.0,<1.10.0``
   :depends bioconductor-derfinder: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-megadepth: ``>=1.10.0,<1.11.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oder

   and update with::

      conda update bioconductor-oder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oder:<tag>

   (see `bioconductor-oder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oder
   :alt:   (downloads)
.. |docker_bioconductor-oder| image:: https://quay.io/repository/biocontainers/bioconductor-oder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oder
.. _`bioconductor-oder/tags`: https://quay.io/repository/biocontainers/bioconductor-oder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oder";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oder/README.html