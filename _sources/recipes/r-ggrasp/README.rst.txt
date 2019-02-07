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

   :versions: 1.0

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-bgmm`  :conda:package:`r-colorspace`  :conda:package:`r-ggplot2`  :conda:package:`r-mixtools`  

   :required~by: |required_by_r-ggrasp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ggrasp

   and update with::

      conda update r-ggrasp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ggrasp


.. |required_by_r-ggrasp| conda:required_by:: r-ggrasp
.. |downloads_r-ggrasp| image:: https://img.shields.io/conda/dn/bioconda/r-ggrasp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ggrasp| image:: https://quay.io/repository/biocontainers/r-ggrasp/status
   :target: https://quay.io/repository/biocontainers/r-ggrasp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggrasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggrasp/README.html

