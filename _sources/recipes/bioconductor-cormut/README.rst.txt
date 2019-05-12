:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cormut'
.. highlight: bash

bioconductor-cormut
===================

.. conda:recipe:: bioconductor-cormut
   :replaces_section_title:

   CorMut provides functions for computing kaks for individual sites or specific amino acids and detecting correlated mutations among them. Three methods are provided for detecting correlated mutations \,including conditional selection pressure\, mutual information and Jaccard index. The computation consists of two steps\: First\, the positive selection sites are detected\; Second\, the mutation correlations are computed among the positive selection sites. Note that the first step is optional. Meanwhile\, CorMut facilitates the comparison of the correlated mutations between two conditions by the means of correlated mutation network. The reference sequence should be the first sequence of the sequence file\, and does not allow the presence of gap.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CorMut.html
   :license: GPL-2
   :recipe: /`bioconductor-cormut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cormut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cormut/meta.yaml>`_

   


.. conda:package:: bioconductor-cormut

   |downloads_bioconductor-cormut| |docker_bioconductor-cormut|

   :versions: 1.26.0-0, 1.24.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cormut

   and update with::

      conda update bioconductor-cormut

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cormut:<tag>

   (see `bioconductor-cormut/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cormut| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cormut.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cormut| image:: https://quay.io/repository/biocontainers/bioconductor-cormut/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cormut
.. _`bioconductor-cormut/tags`: https://quay.io/repository/biocontainers/bioconductor-cormut?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cormut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cormut/README.html