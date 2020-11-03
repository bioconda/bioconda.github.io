:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.data'
.. highlight: bash

bioconductor-rnamodr.data
=========================

.. conda:recipe:: bioconductor-rnamodr.data
   :replaces_section_title:
   :noindex:

   Example data for the RNAmodR package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/RNAmodR.Data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.data/meta.yaml>`_

   RNAmodR.Data contains example data\, which is used for vignettes and example workflows in the RNAmodR and dependent packages.


.. conda:package:: bioconductor-rnamodr.data

   |downloads_bioconductor-rnamodr.data| |docker_bioconductor-rnamodr.data|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-experimenthubdata: ``>=1.16.0,<1.17.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnamodr.data

   and update with::

      conda update bioconductor-rnamodr.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.data:<tag>

   (see `bioconductor-rnamodr.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.data
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.data| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data
.. _`bioconductor-rnamodr.data/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.data/README.html