:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-adephylo'
.. highlight: bash

r-adephylo
==========

.. conda:recipe:: r-adephylo
   :replaces_section_title:

   Multivariate tools to analyze comparative data\, i.e. a phylogeny and some traits measured for each taxa.

   :homepage: https://CRAN.R-project.org/package=adephylo
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-adephylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-adephylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-adephylo/meta.yaml>`_

   


.. conda:package:: r-adephylo

   |downloads_r-adephylo| |docker_r-adephylo|

   :versions: 1.1_11-3, 1.1_11-2, 1.1_11-0
   
   :depends r-ade4: >=1.7_10
   :depends r-adegenet: 
   :depends r-ape: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-phylobase: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-adephylo

   and update with::

      conda update r-adephylo

   or use the docker container::

      docker pull quay.io/biocontainers/r-adephylo:<tag>

   (see `r-adephylo/tags`_ for valid values for ``<tag>``)


.. |downloads_r-adephylo| image:: https://img.shields.io/conda/dn/bioconda/r-adephylo.svg?style=flat
   :alt:   (downloads)
.. |docker_r-adephylo| image:: https://quay.io/repository/biocontainers/r-adephylo/status
   :target: https://quay.io/repository/biocontainers/r-adephylo
.. _`r-adephylo/tags`: https://quay.io/repository/biocontainers/r-adephylo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-adephylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-adephylo/README.html