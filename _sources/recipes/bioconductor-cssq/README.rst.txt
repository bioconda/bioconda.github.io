:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cssq'
.. highlight: bash

bioconductor-cssq
=================

.. conda:recipe:: bioconductor-cssq
   :replaces_section_title:
   :noindex:

   Chip\-seq Signal Quantifier Pipeline

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CSSQ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cssq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cssq/meta.yaml>`_

   This package is desgined to perform statistical analysis to identify statistically significant differentially bound regions between multiple groups of ChIP\-seq dataset.


.. conda:package:: bioconductor-cssq

   |downloads_bioconductor-cssq| |docker_bioconductor-cssq|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicalignments: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicfeatures: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cssq

   and update with::

      conda update bioconductor-cssq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cssq:<tag>

   (see `bioconductor-cssq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cssq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cssq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cssq
   :alt:   (downloads)
.. |docker_bioconductor-cssq| image:: https://quay.io/repository/biocontainers/bioconductor-cssq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cssq
.. _`bioconductor-cssq/tags`: https://quay.io/repository/biocontainers/bioconductor-cssq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cssq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cssq/README.html