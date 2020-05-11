:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-birta'
.. highlight: bash

bioconductor-birta
==================

.. conda:recipe:: bioconductor-birta
   :replaces_section_title:

   Bayesian Inference of Regulation of Transcriptional Activity

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/birta.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-birta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birta/meta.yaml>`_
   :links: biotools: :biotools:`birta`, doi: :doi:`10.1093/bioinformatics/bts257`

   Expression levels of mRNA molecules are regulated by different processes\, comprising inhibition or activation by transcription factors and post\-transcriptional degradation by microRNAs. birta \(Bayesian Inference of Regulation of Transcriptional Activity\) uses the regulatory networks of TFs and miRNAs together with mRNA and miRNA expression data to predict switches in regulatory activity between two conditions. A Bayesian network is used to model the regulatory structure and Markov\-Chain\-Monte\-Carlo is applied to sample the activity states.


.. conda:package:: bioconductor-birta

   |downloads_bioconductor-birta| |docker_bioconductor-birta|

   :versions: 1.31.0-0, 1.30.0-0, 1.28.0-1, 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-birta

   and update with::

      conda update bioconductor-birta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-birta:<tag>

   (see `bioconductor-birta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-birta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-birta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-birta
   :alt:   (downloads)
.. |docker_bioconductor-birta| image:: https://quay.io/repository/biocontainers/bioconductor-birta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-birta
.. _`bioconductor-birta/tags`: https://quay.io/repository/biocontainers/bioconductor-birta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-birta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-birta/README.html