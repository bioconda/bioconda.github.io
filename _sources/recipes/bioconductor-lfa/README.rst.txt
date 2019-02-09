.. title:: Package Recipe 'bioconductor-lfa'
.. highlight: bash


bioconductor-lfa
================

.. conda:recipe:: bioconductor-lfa
   :replaces_section_title:

   LFA is a method for a PCA analogue on Binomial data via estimation of latent structure in the natural parameter.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lfa.html
   :license: GPL-3
   :recipe: /`bioconductor-lfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa/meta.yaml>`_
   :links: biotools: :biotools:`lfa`, doi: :doi:`10.1093/bioinformatics/btv641`

   


.. conda:package:: bioconductor-lfa

   |downloads_bioconductor-lfa| |docker_bioconductor-lfa|

   :versions: 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  

   :required~by: |required_by_bioconductor-lfa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lfa

   and update with::

      conda update bioconductor-lfa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lfa


.. |required_by_bioconductor-lfa| conda:required_by:: bioconductor-lfa
.. |downloads_bioconductor-lfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lfa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lfa| image:: https://quay.io/repository/biocontainers/bioconductor-lfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lfa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lfa/README.html

