:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterseq'
.. highlight: bash

bioconductor-clusterseq
=======================

.. conda:recipe:: bioconductor-clusterseq
   :replaces_section_title:

   Identification of clusters of co\-expressed genes based on their expression across multiple \(replicated\) biological samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/clusterSeq.html
   :license: GPL-3
   :recipe: /`bioconductor-clusterseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterseq/meta.yaml>`_

   


.. conda:package:: bioconductor-clusterseq

   |downloads_bioconductor-clusterseq| |docker_bioconductor-clusterseq|

   :versions: 1.6.0-0
   
   :depends bioconductor-bayseq: >=2.16.0,<2.17.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterseq

   and update with::

      conda update bioconductor-clusterseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterseq:<tag>

   (see `bioconductor-clusterseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterseq
   :alt:   (downloads)
.. |docker_bioconductor-clusterseq| image:: https://quay.io/repository/biocontainers/bioconductor-clusterseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterseq
.. _`bioconductor-clusterseq/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterseq/README.html