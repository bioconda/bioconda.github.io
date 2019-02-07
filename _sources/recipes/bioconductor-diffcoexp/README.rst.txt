.. title:: Package Recipe 'bioconductor-diffcoexp'
.. highlight: bash


bioconductor-diffcoexp
======================

.. conda:recipe:: bioconductor-diffcoexp
   :replaces_section_title:

   A tool for the identification of differentially coexpressed links \(DCLs\) and differentially coexpressed genes \(DCGs\). DCLs are gene pairs with significantly different correlation coefficients under two conditions. DCGs are genes with significantly more DCLs than by chance.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/diffcoexp.html
   :license: GPL (>2)
   :recipe: /`bioconductor-diffcoexp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp/meta.yaml>`_

   


.. conda:package:: bioconductor-diffcoexp

   |downloads_bioconductor-diffcoexp| |docker_bioconductor-diffcoexp|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-diffcorr`  :conda:package:`r-igraph`  :conda:package:`r-psych`  :conda:package:`r-wgcna`  

   :required~by: |required_by_bioconductor-diffcoexp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffcoexp

   and update with::

      conda update bioconductor-diffcoexp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diffcoexp


.. |required_by_bioconductor-diffcoexp| conda:required_by:: bioconductor-diffcoexp
.. |downloads_bioconductor-diffcoexp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffcoexp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffcoexp| image:: https://quay.io/repository/biocontainers/bioconductor-diffcoexp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffcoexp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html

