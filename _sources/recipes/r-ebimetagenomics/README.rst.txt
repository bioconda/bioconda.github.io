.. title:: Package Recipe 'r-ebimetagenomics'
.. highlight: bash


r-ebimetagenomics
=================

.. conda:recipe:: r-ebimetagenomics
   :replaces_section_title:

   Functions for querying the EBI Metagenomics Portal \<https\:\/\/www.ebi.ac.uk\/metagenomics\/\>. The current main focus is on taxa abundance data\, but the intention is that this package should evolve into a general purpose package for working with EBI Metagenomics data using R. 

   :homepage: https://CRAN.R-project.org/package=ebimetagenomics
   :license: LGPL / LGPL-3
   :recipe: /`r-ebimetagenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ebimetagenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ebimetagenomics/meta.yaml>`_

   


.. conda:package:: r-ebimetagenomics

   |downloads_r-ebimetagenomics| |docker_r-ebimetagenomics|

   :versions: 0.6

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-breakaway`  :conda:package:`r-sads`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-ebimetagenomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ebimetagenomics

   and update with::

      conda update r-ebimetagenomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ebimetagenomics


.. |required_by_r-ebimetagenomics| conda:required_by:: r-ebimetagenomics
.. |downloads_r-ebimetagenomics| image:: https://img.shields.io/conda/dn/bioconda/r-ebimetagenomics.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ebimetagenomics| image:: https://quay.io/repository/biocontainers/r-ebimetagenomics/status
   :target: https://quay.io/repository/biocontainers/r-ebimetagenomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ebimetagenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ebimetagenomics/README.html

