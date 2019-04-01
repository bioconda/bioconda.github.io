:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibbig'
.. highlight: bash

bioconductor-ibbig
==================

.. conda:recipe:: bioconductor-ibbig
   :replaces_section_title:

   iBBiG is a bi\-clustering algorithm which is optimizes for binary data analysis. We apply it to meta\-gene set analysis of large numbers of gene expression datasets. The iterative algorithm extracts groups of phenotypes from multiple studies that are associated with similar gene sets. iBBiG does not require prior knowledge of the number or scale of clusters and allows discovery of clusters with diverse sizes

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iBBiG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ibbig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibbig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibbig/meta.yaml>`_

   


.. conda:package:: bioconductor-ibbig

   |downloads_bioconductor-ibbig| |docker_bioconductor-ibbig|

   :versions: 1.26.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-ade4: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biclust: 
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ibbig

   and update with::

      conda update bioconductor-ibbig

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ibbig:<tag>

   (see `bioconductor-ibbig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ibbig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibbig.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ibbig| image:: https://quay.io/repository/biocontainers/bioconductor-ibbig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibbig
.. _`bioconductor-ibbig/tags`: https://quay.io/repository/biocontainers/bioconductor-ibbig?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibbig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibbig/README.html