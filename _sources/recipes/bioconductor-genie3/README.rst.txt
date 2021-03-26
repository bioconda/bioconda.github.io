:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genie3'
.. highlight: bash

bioconductor-genie3
===================

.. conda:recipe:: bioconductor-genie3
   :replaces_section_title:
   :noindex:

   GEne Network Inference with Ensemble of trees

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GENIE3.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genie3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genie3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genie3/meta.yaml>`_

   This package implements the GENIE3 algorithm for inferring gene regulatory networks from expression data.


.. conda:package:: bioconductor-genie3

   |downloads_bioconductor-genie3| |docker_bioconductor-genie3|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genie3

   and update with::

      conda update bioconductor-genie3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genie3:<tag>

   (see `bioconductor-genie3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genie3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genie3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genie3
   :alt:   (downloads)
.. |docker_bioconductor-genie3| image:: https://quay.io/repository/biocontainers/bioconductor-genie3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genie3
.. _`bioconductor-genie3/tags`: https://quay.io/repository/biocontainers/bioconductor-genie3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genie3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genie3/README.html