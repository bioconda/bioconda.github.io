:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-condcomp'
.. highlight: bash

bioconductor-condcomp
=====================

.. conda:recipe:: bioconductor-condcomp
   :replaces_section_title:

   For a given clustered data\, which can also be split into two conditions\, this package provides a way to perform a condition comparison on said clustered data. The comparison is performed on each cluster. Several statistics are used and\, when analysed in conjunction\, they might give some insight regarding the heterogeneity of some of the clusters.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/condcomp.html
   :license: GPL (>=2) | file LICENSE
   :recipe: /`bioconductor-condcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condcomp/meta.yaml>`_

   


.. conda:package:: bioconductor-condcomp

   |downloads_bioconductor-condcomp| |docker_bioconductor-condcomp|

   :versions: 1.1.1-0, 1.0.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-outliers: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-condcomp

   and update with::

      conda update bioconductor-condcomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-condcomp:<tag>

   (see `bioconductor-condcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-condcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-condcomp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-condcomp| image:: https://quay.io/repository/biocontainers/bioconductor-condcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-condcomp
.. _`bioconductor-condcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-condcomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-condcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-condcomp/README.html