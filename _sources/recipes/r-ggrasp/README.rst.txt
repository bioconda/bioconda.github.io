:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggrasp'
.. highlight: bash

r-ggrasp
========

.. conda:recipe:: r-ggrasp
   :replaces_section_title:

   Given a group of genomes and their relationship with each other\, the package clusters the genomes and selects the most representative members of each cluster. Additional data can be provided to the prioritize certain genomes. The results can be printed out as a list or a new phylogeny with graphs of the trees and distance distributions also available. For detailed introduction see\: Thomas H Clarke\, Lauren M Brinkac\, Granger Sutton\, and Derrick E Fouts \(2018\)\, GGRaSP\: a R\-package for selecting representative genomes using Gaussian mixture models\, Bioinformatics\, bty300\, \<doi\:10.1093\/bioinformatics\/bty300\>.

   :homepage: https://CRAN.R-project.org/package=ggrasp
   :license: GPL2 / GPL-2
   :recipe: /`r-ggrasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggrasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggrasp/meta.yaml>`_

   


.. conda:package:: r-ggrasp

   |downloads_r-ggrasp| |docker_r-ggrasp|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bgmm: 
   
   :depends r-colorspace: 
   
   :depends r-ggplot2: 
   
   :depends r-mixtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ggrasp

   and update with::

      conda update r-ggrasp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ggrasp:<tag>

   (see `r-ggrasp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ggrasp| image:: https://img.shields.io/conda/dn/bioconda/r-ggrasp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ggrasp| image:: https://quay.io/repository/biocontainers/r-ggrasp/status
   :target: https://quay.io/repository/biocontainers/r-ggrasp
.. _`r-ggrasp/tags`: https://quay.io/repository/biocontainers/r-ggrasp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggrasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggrasp/README.html