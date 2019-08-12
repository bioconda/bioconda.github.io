:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mira'
.. highlight: bash

bioconductor-mira
=================

.. conda:recipe:: bioconductor-mira
   :replaces_section_title:

   MIRA measures the degree of \"dip\" in methylation level surrounding a regulatory site of interest\, such as a transcription factor binding site\, for instances of that type of site across the genome which can then be used to infer regulatory activity.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MIRA.html
   :license: GPL-3
   :recipe: /`bioconductor-mira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira/meta.yaml>`_

   


.. conda:package:: bioconductor-mira

   |downloads_bioconductor-mira| |docker_bioconductor-mira|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-bsseq: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends r-base: >=3.6,<3.7.0a0
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