:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesknockdown'
.. highlight: bash

bioconductor-bayesknockdown
===========================

.. conda:recipe:: bioconductor-bayesknockdown
   :replaces_section_title:

   A simple\, fast Bayesian method for computing posterior probabilities for relationships between a single predictor variable and multiple potential outcome variables\, incorporating prior probabilities of relationships. In the context of knockdown experiments\, the predictor variable is the knocked\-down gene\, while the other genes are potential targets. Can also be used for differential expression\/2\-class data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BayesKnockdown.html
   :license: GPL-3
   :recipe: /`bioconductor-bayesknockdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown/meta.yaml>`_

   


.. conda:package:: bioconductor-bayesknockdown

   |downloads_bioconductor-bayesknockdown| |docker_bioconductor-bayesknockdown|

   :versions: 1.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayesknockdown

   and update with::

      conda update bioconductor-bayesknockdown

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bayesknockdown:<tag>

   (see `bioconductor-bayesknockdown/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesknockdown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesknockdown.svg?style=flat
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