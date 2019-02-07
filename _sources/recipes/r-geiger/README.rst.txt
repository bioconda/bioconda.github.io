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

   :versions: 2.0.6

   :depends: :conda:package:`r-ape` >=3.0_6 :conda:package:`r-base` 3.4.1* :conda:package:`r-coda`  :conda:package:`r-colorspace`  :conda:package:`r-desolve` >=1.7 :conda:package:`r-digest`  :conda:package:`r-mass`  :conda:package:`r-mvtnorm`  :conda:package:`r-ncbit`  :conda:package:`r-rcpp` >=0.9.0 :conda:package:`r-subplex`  

   :required~by: |required_by_r-geiger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-geiger

   and update with::

      conda update r-geiger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-geiger


.. |required_by_r-geiger| conda:required_by:: r-geiger
.. |downloads_r-geiger| image:: https://img.shields.io/conda/dn/bioconda/r-geiger.svg?style=flat
   :alt:   (downloads)
.. |docker_r-geiger| image:: https://quay.io/repository/biocontainers/r-geiger/status
   :target: https://quay.io/repository/biocontainers/r-geiger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-geiger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-geiger/README.html

