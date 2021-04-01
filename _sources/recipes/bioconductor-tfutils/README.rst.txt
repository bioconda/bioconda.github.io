:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfutils'
.. highlight: bash

bioconductor-tfutils
====================

.. conda:recipe:: bioconductor-tfutils
   :replaces_section_title:
   :noindex:

   TFutils

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TFutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils/meta.yaml>`_

   Package to work with TF metadata from various sources.


.. conda:package:: bioconductor-tfutils

   |downloads_bioconductor-tfutils| |docker_bioconductor-tfutils|

   :versions:
      
      

      ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-gseabase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-httr: 
   :depends r-magrittr: 
   :depends r-miniui: 
   :depends r-readxl: 
   :depends r-rjson: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfutils

   and update with::

      conda update bioconductor-tfutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfutils:<tag>

   (see `bioconductor-tfutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfutils
   :alt:   (downloads)
.. |docker_bioconductor-tfutils| image:: https://quay.io/repository/biocontainers/bioconductor-tfutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfutils
.. _`bioconductor-tfutils/tags`: https://quay.io/repository/biocontainers/bioconductor-tfutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfutils/README.html