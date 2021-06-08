:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-megadepth'
.. highlight: bash

bioconductor-megadepth
======================

.. conda:recipe:: bioconductor-megadepth
   :replaces_section_title:
   :noindex:

   megadepth\: BigWig and BAM related utilities

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/megadepth.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-megadepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth/meta.yaml>`_

   This package provides an R interface to Megadepth by Christopher Wilks available at https\:\/\/github.com\/ChristopherWilks\/megadepth. It is particularly useful for computing the coverage of a set of genomic regions across bigWig or BAM files. With this package\, you can build base\-pair coverage matrices for regions or annotations of your choice from BigWig files. Megadepth was used to create the raw files provided by https\:\/\/bioconductor.org\/packages\/recount3.


.. conda:package:: bioconductor-megadepth

   |downloads_bioconductor-megadepth| |docker_bioconductor-megadepth|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cmdfun: 
   :depends r-dplyr: 
   :depends r-fs: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-xfun: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-megadepth

   and update with::

      conda update bioconductor-megadepth

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-megadepth:<tag>

   (see `bioconductor-megadepth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-megadepth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-megadepth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-megadepth
   :alt:   (downloads)
.. |docker_bioconductor-megadepth| image:: https://quay.io/repository/biocontainers/bioconductor-megadepth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-megadepth
.. _`bioconductor-megadepth/tags`: https://quay.io/repository/biocontainers/bioconductor-megadepth?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-megadepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-megadepth/README.html