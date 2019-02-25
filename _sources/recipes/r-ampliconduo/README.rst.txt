:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ampliconduo'
.. highlight: bash

r-ampliconduo
=============

.. conda:recipe:: r-ampliconduo
   :replaces_section_title:

   Increasingly powerful techniques for high\-throughput sequencing open the possibility to comprehensively characterize microbial communities\, including rare species. However\, a still unresolved issue are the substantial error rates in the experimental process generating these sequences. To overcome these limitations we propose an approach\, where each sample is split and the same amplification and sequencing protocol is applied to both halves. This procedure should allow to detect likely PCR and sequencing artifacts\, and true rare species by comparison of the results of both parts. The AmpliconDuo package\, whereas amplicon duo from here on refers to the two amplicon data sets of a split sample\, is intended to help interpret the obtained read frequency distribution across split samples\, and to filter the false positive reads.

   :homepage: https://CRAN.R-project.org/package=AmpliconDuo
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-ampliconduo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampliconduo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampliconduo/meta.yaml>`_

   


.. conda:package:: r-ampliconduo

   |downloads_r-ampliconduo| |docker_r-ampliconduo|

   :versions: 1.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ampliconduo

   and update with::

      conda update r-ampliconduo

   or use the docker container::

      docker pull quay.io/biocontainers/r-ampliconduo:<tag>

   (see `r-ampliconduo/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ampliconduo| image:: https://img.shields.io/conda/dn/bioconda/r-ampliconduo.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ampliconduo| image:: https://quay.io/repository/biocontainers/r-ampliconduo/status
   :target: https://quay.io/repository/biocontainers/r-ampliconduo
.. _`r-ampliconduo/tags`: https://quay.io/repository/biocontainers/r-ampliconduo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampliconduo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampliconduo/README.html