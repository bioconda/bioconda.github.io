:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcanr'
.. highlight: bash

bioconductor-dcanr
==================

.. conda:recipe:: bioconductor-dcanr
   :replaces_section_title:
   :noindex:

   Differential co\-expression\/association network analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/dcanr.html
   :license: GPL-3
   :recipe: /`bioconductor-dcanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcanr/meta.yaml>`_

   Methods and an evaluation framework for the inference of differential co\-expression\/association networks.


.. conda:package:: bioconductor-dcanr

   |downloads_bioconductor-dcanr| |docker_bioconductor-dcanr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dcanr

   and update with::

      conda update bioconductor-dcanr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dcanr:<tag>

   (see `bioconductor-dcanr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dcanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcanr
   :alt:   (downloads)
.. |docker_bioconductor-dcanr| image:: https://quay.io/repository/biocontainers/bioconductor-dcanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcanr
.. _`bioconductor-dcanr/tags`: https://quay.io/repository/biocontainers/bioconductor-dcanr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcanr/README.html