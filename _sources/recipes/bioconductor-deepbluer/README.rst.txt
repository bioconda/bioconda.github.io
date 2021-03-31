:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deepbluer'
.. highlight: bash

bioconductor-deepbluer
======================

.. conda:recipe:: bioconductor-deepbluer
   :replaces_section_title:
   :noindex:

   DeepBlueR

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DeepBlueR.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-deepbluer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepbluer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepbluer/meta.yaml>`_
   :links: biotools: :biotools:`deepbluer`

   Accessing the DeepBlue Epigenetics Data Server through R.


.. conda:package:: bioconductor-deepbluer

   |downloads_bioconductor-deepbluer| |docker_bioconductor-deepbluer|

   :versions:
      
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-diffr: 
   :depends r-dplyr: 
   :depends r-filehash: 
   :depends r-foreach: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-settings: 
   :depends r-stringr: 
   :depends r-withr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deepbluer

   and update with::

      conda update bioconductor-deepbluer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deepbluer:<tag>

   (see `bioconductor-deepbluer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deepbluer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deepbluer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deepbluer
   :alt:   (downloads)
.. |docker_bioconductor-deepbluer| image:: https://quay.io/repository/biocontainers/bioconductor-deepbluer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deepbluer
.. _`bioconductor-deepbluer/tags`: https://quay.io/repository/biocontainers/bioconductor-deepbluer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deepbluer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deepbluer/README.html