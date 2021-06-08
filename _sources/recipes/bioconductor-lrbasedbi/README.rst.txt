:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrbasedbi'
.. highlight: bash

bioconductor-lrbasedbi
======================

.. conda:recipe:: bioconductor-lrbasedbi
   :replaces_section_title:
   :noindex:

   DBI to construct LRBase\-related package

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/LRBaseDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbasedbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbasedbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbasedbi/meta.yaml>`_

   Interface to construct LRBase package \(LRBase.XXX.eg.db\).


.. conda:package:: bioconductor-lrbasedbi

   |downloads_bioconductor-lrbasedbi| |docker_bioconductor-lrbasedbi|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbasedbi

   and update with::

      conda update bioconductor-lrbasedbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrbasedbi:<tag>

   (see `bioconductor-lrbasedbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrbasedbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbasedbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrbasedbi
   :alt:   (downloads)
.. |docker_bioconductor-lrbasedbi| image:: https://quay.io/repository/biocontainers/bioconductor-lrbasedbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbasedbi
.. _`bioconductor-lrbasedbi/tags`: https://quay.io/repository/biocontainers/bioconductor-lrbasedbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbasedbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbasedbi/README.html