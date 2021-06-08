:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-props'
.. highlight: bash

bioconductor-props
==================

.. conda:recipe:: bioconductor-props
   :replaces_section_title:
   :noindex:

   PRObabilistic Pathway Score \(PROPS\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PROPS.html
   :license: GPL-2
   :recipe: /`bioconductor-props <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-props/meta.yaml>`_

   This package calculates probabilistic pathway scores using gene expression data. Gene expression values are aggregated into pathway\-based scores using Bayesian network representations of biological pathways.


.. conda:package:: bioconductor-props

   |downloads_bioconductor-props| |docker_bioconductor-props|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-sva: ``>=3.40.0,<3.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bnlearn: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-props

   and update with::

      conda update bioconductor-props

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-props:<tag>

   (see `bioconductor-props/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-props| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-props.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-props
   :alt:   (downloads)
.. |docker_bioconductor-props| image:: https://quay.io/repository/biocontainers/bioconductor-props/status
   :target: https://quay.io/repository/biocontainers/bioconductor-props
.. _`bioconductor-props/tags`: https://quay.io/repository/biocontainers/bioconductor-props?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-props/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-props/README.html