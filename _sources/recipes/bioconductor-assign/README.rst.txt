:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-assign'
.. highlight: bash

bioconductor-assign
===================

.. conda:recipe:: bioconductor-assign
   :replaces_section_title:

   ASSIGN is a computational tool to evaluate the pathway deregulation\/activation status in individual patient samples. ASSIGN employs a flexible Bayesian factor analysis approach that adapts predetermined pathway signatures derived either from knowledge\-based literature or from perturbation experiments to the cell\-\/tissue\-specific pathway signatures. The deregulation\/activation level of each context\-specific pathway is quantified to a score\, which represents the extent to which a patient sample encompasses the pathway deregulation\/activation signature.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ASSIGN.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-assign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign/meta.yaml>`_

   


.. conda:package:: bioconductor-assign

   |downloads_bioconductor-assign| |docker_bioconductor-assign|

   :versions: 1.20.1-1, 1.18.0-0
   
   :depends bioconductor-sva: >=3.32.0,<3.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-msm: 
   :depends r-rlab: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-assign

   and update with::

      conda update bioconductor-assign

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-assign:<tag>

   (see `bioconductor-assign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-assign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-assign
   :alt:   (downloads)
.. |docker_bioconductor-assign| image:: https://quay.io/repository/biocontainers/bioconductor-assign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assign
.. _`bioconductor-assign/tags`: https://quay.io/repository/biocontainers/bioconductor-assign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assign/README.html