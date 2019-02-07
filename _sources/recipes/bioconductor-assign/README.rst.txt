.. title:: Package Recipe 'bioconductor-assign'
.. highlight: bash


bioconductor-assign
===================

.. conda:recipe:: bioconductor-assign
   :replaces_section_title:

   ASSIGN is a computational tool to evaluate the pathway deregulation\/activation status in individual patient samples. ASSIGN employs a flexible Bayesian factor analysis approach that adapts predetermined pathway signatures derived either from knowledge\-based literature or from perturbation experiments to the cell\-\/tissue\-specific pathway signatures. The deregulation\/activation level of each context\-specific pathway is quantified to a score\, which represents the extent to which a patient sample encompasses the pathway deregulation\/activation signature.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ASSIGN.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-assign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign/meta.yaml>`_

   


.. conda:package:: bioconductor-assign

   |downloads_bioconductor-assign| |docker_bioconductor-assign|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-msm`  :conda:package:`r-rlab`  :conda:package:`r-yaml`  

   :required~by: |required_by_bioconductor-assign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-assign

   and update with::

      conda update bioconductor-assign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-assign


.. |required_by_bioconductor-assign| conda:required_by:: bioconductor-assign
.. |downloads_bioconductor-assign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assign.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-assign| image:: https://quay.io/repository/biocontainers/bioconductor-assign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assign/README.html

