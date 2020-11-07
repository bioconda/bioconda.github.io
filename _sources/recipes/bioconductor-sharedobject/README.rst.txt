:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sharedobject'
.. highlight: bash

bioconductor-sharedobject
=========================

.. conda:recipe:: bioconductor-sharedobject
   :replaces_section_title:
   :noindex:

   Sharing R objects across multiple R processes without memory duplication

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SharedObject.html
   :license: GPL-3
   :recipe: /`bioconductor-sharedobject <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sharedobject>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sharedobject/meta.yaml>`_

   This package is developed for facilitating parallel computing in R. It is capable to create an R object in the shared memory space and share the data across multiple R processes. It avoids the overhead of memory dulplication and data transfer\, which make sharing big data object across many clusters possible.


.. conda:package:: bioconductor-sharedobject

   |downloads_bioconductor-sharedobject| |docker_bioconductor-sharedobject|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bh: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sharedobject

   and update with::

      conda update bioconductor-sharedobject

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sharedobject:<tag>

   (see `bioconductor-sharedobject/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sharedobject| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sharedobject.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sharedobject
   :alt:   (downloads)
.. |docker_bioconductor-sharedobject| image:: https://quay.io/repository/biocontainers/bioconductor-sharedobject/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sharedobject
.. _`bioconductor-sharedobject/tags`: https://quay.io/repository/biocontainers/bioconductor-sharedobject?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sharedobject/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sharedobject/README.html