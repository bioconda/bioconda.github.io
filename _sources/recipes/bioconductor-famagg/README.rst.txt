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

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gap` >=1.1-17 :conda:package:`r-igraph`  :conda:package:`r-kinship2`  :conda:package:`r-matrix`  :conda:package:`r-survey`  

   :required~by: |required_by_bioconductor-famagg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-famagg

   and update with::

      conda update bioconductor-famagg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-famagg


.. |required_by_bioconductor-famagg| conda:required_by:: bioconductor-famagg
.. |downloads_bioconductor-famagg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-famagg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-famagg| image:: https://quay.io/repository/biocontainers/bioconductor-famagg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-famagg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-famagg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-famagg/README.html

