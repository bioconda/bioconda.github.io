.. title:: Package Recipe 'bioconductor-ccrepe'
.. highlight: bash


bioconductor-ccrepe
===================

.. conda:recipe:: bioconductor-ccrepe
   :replaces_section_title:

   The CCREPE \(Compositionality Corrected by REnormalizaion and PErmutation\) package is designed to assess the significance of general similarity measures in compositional datasets.  In microbial abundance data\, for example\, the total abundances of all microbes sum to one\; CCREPE is designed to take this constraint into account when assigning p\-values to similarity measures between the microbes.  The package has two functions\: ccrepe\: Calculates similarity measures\, p\-values and q\-values for relative abundances of bugs in one or two body sites using bootstrap and permutation matrices of the data. nc.score\: Calculates species\-level co\-variation and co\-exclusion patterns based on an extension of the checkerboard score to ordinal data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ccrepe.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccrepe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccrepe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccrepe/meta.yaml>`_

   


.. conda:package:: bioconductor-ccrepe

   |downloads_bioconductor-ccrepe| |docker_bioconductor-ccrepe|

   :versions: 1.18.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-infotheo` >=1.1 

   :required~by: |required_by_bioconductor-ccrepe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccrepe

   and update with::

      conda update bioconductor-ccrepe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ccrepe


.. |required_by_bioconductor-ccrepe| conda:required_by:: bioconductor-ccrepe
.. |downloads_bioconductor-ccrepe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccrepe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ccrepe| image:: https://quay.io/repository/biocontainers/bioconductor-ccrepe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccrepe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccrepe/README.html

