:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mseadbi'
.. highlight: bash

bioconductor-mseadbi
====================

.. conda:recipe:: bioconductor-mseadbi
   :replaces_section_title:
   :noindex:

   DBI to construct MSEA\-related package

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MSEADbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mseadbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mseadbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mseadbi/meta.yaml>`_

   Interface to construct annotation package for MSEA \(MSEA.XXX.pb.db\). The program design is same as Bioconductor LRBaseDbi or MeSHDbi pacakge\, and the usage is also the same as these packages.


.. conda:package:: bioconductor-mseadbi

   |downloads_bioconductor-mseadbi| |docker_bioconductor-mseadbi|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mseadbi

   and update with::

      conda update bioconductor-mseadbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mseadbi:<tag>

   (see `bioconductor-mseadbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mseadbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mseadbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mseadbi
   :alt:   (downloads)
.. |docker_bioconductor-mseadbi| image:: https://quay.io/repository/biocontainers/bioconductor-mseadbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mseadbi
.. _`bioconductor-mseadbi/tags`: https://quay.io/repository/biocontainers/bioconductor-mseadbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mseadbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mseadbi/README.html