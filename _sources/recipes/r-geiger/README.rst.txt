:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-geiger'
.. highlight: bash

r-geiger
========

.. conda:recipe:: r-geiger
   :replaces_section_title:

   Methods for fitting macroevolutionary models to phylogenetic trees.

   :homepage: http://www.webpages.uidaho.edu/~lukeh/software.html
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-geiger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geiger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geiger/meta.yaml>`_

   


.. conda:package:: r-geiger

   |downloads_r-geiger| |docker_r-geiger|

   :versions: 2.0.6.2-0, 2.0.6.1-1, 2.0.6.1-0, 2.0.6-3, 2.0.6-2, 2.0.6-1, 2.0.6-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: >=3.0_6
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-coda: 
   :depends r-colorspace: 
   :depends r-desolve: >=1.7
   :depends r-digest: 
   :depends r-mass: 
   :depends r-mvtnorm: 
   :depends r-ncbit: 
   :depends r-rcpp: >=0.9.0
   :depends r-subplex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-geiger

   and update with::

      conda update r-geiger

   or use the docker container::

      docker pull quay.io/biocontainers/r-geiger:<tag>

   (see `r-geiger/tags`_ for valid values for ``<tag>``)


.. |downloads_r-geiger| image:: https://img.shields.io/conda/dn/bioconda/r-geiger.svg?style=flat
   :target: https://anaconda.org/bioconda/r-geiger
   :alt:   (downloads)
.. |docker_r-geiger| image:: https://quay.io/repository/biocontainers/r-geiger/status
   :target: https://quay.io/repository/biocontainers/r-geiger
.. _`r-geiger/tags`: https://quay.io/repository/biocontainers/r-geiger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-geiger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-geiger/README.html