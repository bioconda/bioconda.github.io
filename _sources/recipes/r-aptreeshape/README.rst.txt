:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aptreeshape'
.. highlight: bash

r-aptreeshape
=============

.. conda:recipe:: r-aptreeshape
   :replaces_section_title:

   Simulation and analysis of phylogenetic tree topologies using statistical indices. It is a companion library of the \'ape\' package. It provides additional functions for reading\, plotting\, manipulating phylogenetic trees. It also offers convenient web\-access to public databases\, and enables testing null models of macroevolution using corrected test statistics.  Trees of class \"phylo\" \(from \'ape\' package\) can be converted easily. Implements methods described in Bortolussi et al. \(2005\) \<doi\:10.1093\/bioinformatics\/bti798\> and Maliet et al. \(2017\)  \<doi\:10.1101\/224295\>.

   :homepage: https://CRAN.R-project.org/package=apTreeshape
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-aptreeshape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aptreeshape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aptreeshape/meta.yaml>`_

   


.. conda:package:: r-aptreeshape

   |downloads_r-aptreeshape| |docker_r-aptreeshape|

   :versions: 1.5_0-3, 1.5_0-2, 1.5_0-1, 1.5_0-0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-coda: 
   
   :depends r-cubature: 
   
   :depends r-pbapply: 
   
   :depends r-quantreg: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-aptreeshape

   and update with::

      conda update r-aptreeshape

   or use the docker container::

      docker pull quay.io/biocontainers/r-aptreeshape:<tag>

   (see `r-aptreeshape/tags`_ for valid values for ``<tag>``)


.. |downloads_r-aptreeshape| image:: https://img.shields.io/conda/dn/bioconda/r-aptreeshape.svg?style=flat
   :alt:   (downloads)
.. |docker_r-aptreeshape| image:: https://quay.io/repository/biocontainers/r-aptreeshape/status
   :target: https://quay.io/repository/biocontainers/r-aptreeshape
.. _`r-aptreeshape/tags`: https://quay.io/repository/biocontainers/r-aptreeshape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aptreeshape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aptreeshape/README.html