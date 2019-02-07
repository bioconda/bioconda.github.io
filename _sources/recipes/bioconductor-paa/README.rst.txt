.. title:: Package Recipe 'bioconductor-paa'
.. highlight: bash


bioconductor-paa
================

.. conda:recipe:: bioconductor-paa
   :replaces_section_title:

   PAA imports single color \(protein\) microarray data that has been saved in gpr file format \- esp. ProtoArray data. After preprocessing \(background correction\, batch filtering\, normalization\) univariate feature preselection is performed \(e.g.\, using the \"minimum M statistic\" approach \- hereinafter referred to as \"mMs\"\). Subsequently\, a multivariate feature selection is conducted to discover biomarker candidates. Therefore\, either a frequency\-based backwards elimination aproach or ensemble feature selection can be used. PAA provides a complete toolbox of analysis tools including several different plots for results examination and evaluation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PAA.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-paa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paa/meta.yaml>`_

   


.. conda:package:: bioconductor-paa

   |downloads_bioconductor-paa| |docker_bioconductor-paa|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-mass`  :conda:package:`r-mrmre`  :conda:package:`r-randomforest`  :conda:package:`r-rcpp` >=0.11.6 :conda:package:`r-rocr`  

   :required~by: |required_by_bioconductor-paa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-paa

   and update with::

      conda update bioconductor-paa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-paa


.. |required_by_bioconductor-paa| conda:required_by:: bioconductor-paa
.. |downloads_bioconductor-paa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-paa| image:: https://quay.io/repository/biocontainers/bioconductor-paa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paa/README.html

