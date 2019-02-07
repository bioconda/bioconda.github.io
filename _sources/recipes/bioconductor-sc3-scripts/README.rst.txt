.. title:: Package Recipe 'bioconductor-sc3-scripts'
.. highlight: bash


bioconductor-sc3-scripts
========================

.. conda:recipe:: bioconductor-sc3-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the SC3 package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-sc3-scripts
   :license: GPL / GPL-3
   :recipe: /`bioconductor-sc3-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3-scripts/meta.yaml>`_

   


.. conda:package:: bioconductor-sc3-scripts

   |downloads_bioconductor-sc3-scripts| |docker_bioconductor-sc3-scripts|

   :versions: 0.0.2, 0.0.1

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-sc3` 1.8.0.* :conda:package:`bioconductor-scater` 1.8.4.* :conda:package:`bioconductor-scater-scripts`  :conda:package:`bioconductor-singlecellexperiment-scripts`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-optparse`  :conda:package:`r-workflowscriptscommon`  

   :required~by: |required_by_bioconductor-sc3-scripts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sc3-scripts

   and update with::

      conda update bioconductor-sc3-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sc3-scripts


.. |required_by_bioconductor-sc3-scripts| conda:required_by:: bioconductor-sc3-scripts
.. |downloads_bioconductor-sc3-scripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sc3-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sc3-scripts| image:: https://quay.io/repository/biocontainers/bioconductor-sc3-scripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sc3-scripts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sc3-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sc3-scripts/README.html

