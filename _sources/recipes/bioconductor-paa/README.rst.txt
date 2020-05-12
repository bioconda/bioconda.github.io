:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paa'
.. highlight: bash

bioconductor-paa
================

.. conda:recipe:: bioconductor-paa
   :replaces_section_title:

   PAA \(Protein Array Analyzer\)

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/PAA.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-paa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paa/meta.yaml>`_

   PAA imports single color \(protein\) microarray data that has been saved in gpr file format \- esp. ProtoArray data. After preprocessing \(background correction\, batch filtering\, normalization\) univariate feature preselection is performed \(e.g.\, using the \"minimum M statistic\" approach \- hereinafter referred to as \"mMs\"\). Subsequently\, a multivariate feature selection is conducted to discover biomarker candidates. Therefore\, either a frequency\-based backwards elimination aproach or ensemble feature selection can be used. PAA provides a complete toolbox of analysis tools including several different plots for results examination and evaluation.


.. conda:package:: bioconductor-paa

   |downloads_bioconductor-paa| |docker_bioconductor-paa|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-0
   
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-sva: >=3.36.0,<3.37.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-e1071: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-mass: 
   :depends r-mrmre: 
   :depends r-randomforest: 
   :depends r-rcpp: >=0.11.6
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-paa

   and update with::

      conda update bioconductor-paa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paa:<tag>

   (see `bioconductor-paa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paa
   :alt:   (downloads)
.. |docker_bioconductor-paa| image:: https://quay.io/repository/biocontainers/bioconductor-paa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paa
.. _`bioconductor-paa/tags`: https://quay.io/repository/biocontainers/bioconductor-paa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paa/README.html