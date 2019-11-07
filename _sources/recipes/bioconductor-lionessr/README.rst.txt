:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lionessr'
.. highlight: bash

bioconductor-lionessr
=====================

.. conda:recipe:: bioconductor-lionessr
   :replaces_section_title:

   Modeling networks for individual samples using LIONESS

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/lionessR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lionessr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr/meta.yaml>`_

   LIONESS\, or Linear Interpolation to Obtain Network Estimates for Single Samples\, can be used to reconstruct single\-sample networks \(https\:\/\/arxiv.org\/abs\/1505.06440\). This code implements the LIONESS equation in the lioness function in R to reconstruct single\-sample networks. The default network reconstruction method we use is based on Pearson correlation. However\, lionessR can run on any network reconstruction algorithms that returns a complete\, weighted adjacency matrix. lionessR works for both unipartite and bipartite networks.


.. conda:package:: bioconductor-lionessr

   |downloads_bioconductor-lionessr| |docker_bioconductor-lionessr|

   :versions: 1.0.0-0
   
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lionessr

   and update with::

      conda update bioconductor-lionessr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lionessr:<tag>

   (see `bioconductor-lionessr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lionessr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lionessr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lionessr
   :alt:   (downloads)
.. |docker_bioconductor-lionessr| image:: https://quay.io/repository/biocontainers/bioconductor-lionessr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lionessr
.. _`bioconductor-lionessr/tags`: https://quay.io/repository/biocontainers/bioconductor-lionessr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lionessr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lionessr/README.html