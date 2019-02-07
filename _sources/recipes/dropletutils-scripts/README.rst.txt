.. title:: Package Recipe 'dropletutils-scripts'
.. highlight: bash


dropletutils-scripts
====================

.. conda:recipe:: dropletutils-scripts
   :replaces_section_title:

   A set of wrappers for operations associated with Aaron Lun\'s DropletUtils  package. Functions in R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/dropletutils-scripts
   :license: GPL / GPL-3
   :recipe: /`dropletutils-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropletutils-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropletutils-scripts/meta.yaml>`_

   


.. conda:package:: dropletutils-scripts

   |downloads_dropletutils-scripts| |docker_dropletutils-scripts|

   :versions: 0.0.1

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-dropletutils` 1.0.3.* :conda:package:`bioconductor-singlecellexperiment`  :conda:package:`r-base` 3.5.1.* :conda:package:`r-optparse`  :conda:package:`r-workflowscriptscommon`  

   :required~by: |required_by_dropletutils-scripts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dropletutils-scripts

   and update with::

      conda update dropletutils-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dropletutils-scripts


.. |required_by_dropletutils-scripts| conda:required_by:: dropletutils-scripts
.. |downloads_dropletutils-scripts| image:: https://img.shields.io/conda/dn/bioconda/dropletutils-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_dropletutils-scripts| image:: https://quay.io/repository/biocontainers/dropletutils-scripts/status
   :target: https://quay.io/repository/biocontainers/dropletutils-scripts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropletutils-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropletutils-scripts/README.html

