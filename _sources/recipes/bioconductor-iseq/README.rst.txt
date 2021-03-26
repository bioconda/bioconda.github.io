:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseq'
.. highlight: bash

bioconductor-iseq
=================

.. conda:recipe:: bioconductor-iseq
   :replaces_section_title:
   :noindex:

   Bayesian Hierarchical Modeling of ChIP\-seq Data Through Hidden Ising Models

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/iSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq/meta.yaml>`_
   :links: biotools: :biotools:`iseq`, doi: :doi:`10.1111/j.1541-0420.2009.01379.x`

   Bayesian hidden Ising models are implemented to identify IP\-enriched genomic regions from ChIP\-seq data. They can be used to analyze ChIP\-seq data with and without controls and replicates.


.. conda:package:: bioconductor-iseq

   |downloads_bioconductor-iseq| |docker_bioconductor-iseq|

   :versions:
      
      

      ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iseq

   and update with::

      conda update bioconductor-iseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseq:<tag>

   (see `bioconductor-iseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseq
   :alt:   (downloads)
.. |docker_bioconductor-iseq| image:: https://quay.io/repository/biocontainers/bioconductor-iseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseq
.. _`bioconductor-iseq/tags`: https://quay.io/repository/biocontainers/bioconductor-iseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseq/README.html