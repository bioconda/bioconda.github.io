:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffcoexp'
.. highlight: bash

bioconductor-diffcoexp
======================

.. conda:recipe:: bioconductor-diffcoexp
   :replaces_section_title:

   Differential Co\-expression Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/diffcoexp.html
   :license: GPL (>2)
   :recipe: /`bioconductor-diffcoexp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffcoexp/meta.yaml>`_

   A tool for the identification of differentially coexpressed links \(DCLs\) and differentially coexpressed genes \(DCGs\). DCLs are gene pairs with significantly different correlation coefficients under two conditions. DCGs are genes with significantly more DCLs than by chance.


.. conda:package:: bioconductor-diffcoexp

   |downloads_bioconductor-diffcoexp| |docker_bioconductor-diffcoexp|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-diffcorr: 
   :depends r-igraph: 
   :depends r-psych: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffcoexp

   and update with::

      conda update bioconductor-diffcoexp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffcoexp:<tag>

   (see `bioconductor-diffcoexp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffcoexp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffcoexp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffcoexp
   :alt:   (downloads)
.. |docker_bioconductor-diffcoexp| image:: https://quay.io/repository/biocontainers/bioconductor-diffcoexp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffcoexp
.. _`bioconductor-diffcoexp/tags`: https://quay.io/repository/biocontainers/bioconductor-diffcoexp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffcoexp/README.html