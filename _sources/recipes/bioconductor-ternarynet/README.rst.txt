:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ternarynet'
.. highlight: bash

bioconductor-ternarynet
=======================

.. conda:recipe:: bioconductor-ternarynet
   :replaces_section_title:

   A computational Bayesian approach to ternary gene regulatory network estimation from gene perturbation experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ternarynet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ternarynet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ternarynet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ternarynet/meta.yaml>`_
   :links: biotools: :biotools:`ternarynet`

   


.. conda:package:: bioconductor-ternarynet

   |downloads_bioconductor-ternarynet| |docker_bioconductor-ternarynet|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-igraph: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ternarynet

   and update with::

      conda update bioconductor-ternarynet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ternarynet:<tag>

   (see `bioconductor-ternarynet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ternarynet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ternarynet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ternarynet| image:: https://quay.io/repository/biocontainers/bioconductor-ternarynet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ternarynet
.. _`bioconductor-ternarynet/tags`: https://quay.io/repository/biocontainers/bioconductor-ternarynet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ternarynet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ternarynet/README.html