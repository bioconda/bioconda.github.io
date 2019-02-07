.. title:: Package Recipe 'bioconductor-birta'
.. highlight: bash


bioconductor-birta
==================

.. conda:recipe:: bioconductor-birta
   :replaces_section_title:

   Expression levels of mRNA molecules are regulated by different processes\, comprising inhibition or activation by transcription factors and post\-transcriptional degradation by microRNAs. birta \(Bayesian Inference of Regulation of Transcriptional Activity\) uses the regulatory networks of TFs and miRNAs together with mRNA and miRNA expression data to predict switches in regulatory activity between two conditions. A Bayesian network is used to model the regulatory structure and Markov\-Chain\-Monte\-Carlo is applied to sample the activity states.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/birta.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-birta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birta/meta.yaml>`_
   :links: biotools: :biotools:`birta`, doi: :doi:`10.1093/bioinformatics/bts257`

   


.. conda:package:: bioconductor-birta

   |downloads_bioconductor-birta| |docker_bioconductor-birta|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-birta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-birta

   and update with::

      conda update bioconductor-birta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-birta


.. |required_by_bioconductor-birta| conda:required_by:: bioconductor-birta
.. |downloads_bioconductor-birta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-birta.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-birta| image:: https://quay.io/repository/biocontainers/bioconductor-birta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-birta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-birta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-birta/README.html

