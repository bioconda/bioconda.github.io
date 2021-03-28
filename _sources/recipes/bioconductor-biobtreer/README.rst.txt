:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobtreer'
.. highlight: bash

bioconductor-biobtreer
======================

.. conda:recipe:: bioconductor-biobtreer
   :replaces_section_title:
   :noindex:

   Using biobtree tool from R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/biobtreeR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biobtreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobtreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobtreer/meta.yaml>`_

   The biobtreeR package provides an interface to \[biobtree\]\(https\:\/\/github.com\/tamerh\/biobtree\) tool which covers large set of bioinformatics datasets and allows search and chain mappings functionalities.


.. conda:package:: bioconductor-biobtreer

   |downloads_bioconductor-biobtreer| |docker_bioconductor-biobtreer|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-httpuv: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biobtreer

   and update with::

      conda update bioconductor-biobtreer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobtreer:<tag>

   (see `bioconductor-biobtreer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobtreer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobtreer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobtreer
   :alt:   (downloads)
.. |docker_bioconductor-biobtreer| image:: https://quay.io/repository/biocontainers/bioconductor-biobtreer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobtreer
.. _`bioconductor-biobtreer/tags`: https://quay.io/repository/biocontainers/bioconductor-biobtreer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobtreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobtreer/README.html