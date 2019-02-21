:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-famagg'
.. highlight: bash

bioconductor-famagg
===================

.. conda:recipe:: bioconductor-famagg
   :replaces_section_title:

   Framework providing basic pedigree analysis and plotting utilities as well as a variety of methods to evaluate familial aggregation of traits in large pedigrees.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FamAgg.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-famagg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famagg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famagg/meta.yaml>`_

   


.. conda:package:: bioconductor-famagg

   |downloads_bioconductor-famagg| |docker_bioconductor-famagg|

   :versions: 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-gap: >=1.1-17
   
   :depends r-igraph: 
   
   :depends r-kinship2: 
   
   :depends r-matrix: 
   
   :depends r-survey: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-famagg

   and update with::

      conda update bioconductor-famagg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-famagg:<tag>

   (see `bioconductor-famagg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-famagg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-famagg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-famagg| image:: https://quay.io/repository/biocontainers/bioconductor-famagg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-famagg
.. _`bioconductor-famagg/tags`: https://quay.io/repository/biocontainers/bioconductor-famagg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-famagg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-famagg/README.html