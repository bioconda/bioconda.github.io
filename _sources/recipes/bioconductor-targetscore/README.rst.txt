.. title:: Package Recipe 'bioconductor-targetscore'
.. highlight: bash


bioconductor-targetscore
========================

.. conda:recipe:: bioconductor-targetscore
   :replaces_section_title:

   Infer the posterior distributions of microRNA targets by probabilistically modelling the likelihood microRNA\-overexpression fold\-changes and sequence\-based scores. Variaitonal Bayesian Gaussian mixture model \(VB\-GMM\) is applied to log fold\-changes and sequence scores to obtain the posteriors of latent variable being the miRNA targets. The final targetScore is computed as the sigmoid\-transformed fold\-change weighted by the averaged posteriors of target components over all of the features.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TargetScore.html
   :license: GPL-2
   :recipe: /`bioconductor-targetscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscore/meta.yaml>`_
   :links: biotools: :biotools:`targetscore`, doi: :doi:`10.1093/bioinformatics/btt599`

   


.. conda:package:: bioconductor-targetscore

   |downloads_bioconductor-targetscore| |docker_bioconductor-targetscore|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-pracma`  

   :required~by: |required_by_bioconductor-targetscore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetscore

   and update with::

      conda update bioconductor-targetscore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-targetscore


.. |required_by_bioconductor-targetscore| conda:required_by:: bioconductor-targetscore
.. |downloads_bioconductor-targetscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-targetscore| image:: https://quay.io/repository/biocontainers/bioconductor-targetscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscore/README.html

