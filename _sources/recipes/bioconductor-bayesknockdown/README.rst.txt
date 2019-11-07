:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesknockdown'
.. highlight: bash

bioconductor-bayesknockdown
===========================

.. conda:recipe:: bioconductor-bayesknockdown
   :replaces_section_title:

   BayesKnockdown\: Posterior Probabilities for Edges from Knockdown Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/BayesKnockdown.html
   :license: GPL-3
   :recipe: /`bioconductor-bayesknockdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown/meta.yaml>`_

   A simple\, fast Bayesian method for computing posterior probabilities for relationships between a single predictor variable and multiple potential outcome variables\, incorporating prior probabilities of relationships. In the context of knockdown experiments\, the predictor variable is the knocked\-down gene\, while the other genes are potential targets. Can also be used for differential expression\/2\-class data.


.. conda:package:: bioconductor-bayesknockdown

   |downloads_bioconductor-bayesknockdown| |docker_bioconductor-bayesknockdown|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayesknockdown

   and update with::

      conda update bioconductor-bayesknockdown

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayesknockdown:<tag>

   (see `bioconductor-bayesknockdown/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesknockdown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesknockdown.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesknockdown
   :alt:   (downloads)
.. |docker_bioconductor-bayesknockdown| image:: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown
.. _`bioconductor-bayesknockdown/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html