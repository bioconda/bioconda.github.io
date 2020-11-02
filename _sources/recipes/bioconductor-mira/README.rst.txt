:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mira'
.. highlight: bash

bioconductor-mira
=================

.. conda:recipe:: bioconductor-mira
   :replaces_section_title:
   :noindex:

   Methylation\-Based Inference of Regulatory Activity

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MIRA.html
   :license: GPL-3
   :recipe: /`bioconductor-mira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira/meta.yaml>`_

   DNA methylation contains information about the regulatory state of the cell. MIRA aggregates genome\-scale DNA methylation data into a DNA methylation profile for a given region set with shared biological annotation. Using this profile\, MIRA infers and scores the collective regulatory activity for the region set. MIRA facilitates regulatory analysis in situations where classical regulatory assays would be difficult and allows public sources of region sets to be leveraged for novel insight into the regulatory state of DNA methylation datasets.


.. conda:package:: bioconductor-mira

   |downloads_bioconductor-mira| |docker_bioconductor-mira|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mira

   and update with::

      conda update bioconductor-mira

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mira:<tag>

   (see `bioconductor-mira/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mira| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mira.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mira
   :alt:   (downloads)
.. |docker_bioconductor-mira| image:: https://quay.io/repository/biocontainers/bioconductor-mira/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mira
.. _`bioconductor-mira/tags`: https://quay.io/repository/biocontainers/bioconductor-mira?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mira/README.html