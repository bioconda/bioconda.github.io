:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sc3-scripts'
.. highlight: bash

sc3-scripts
===========

.. conda:recipe:: sc3-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the SC3 package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-sc3-scripts
   :license: GPL / GPL-3
   :recipe: /`sc3-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc3-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc3-scripts/meta.yaml>`_

   


.. conda:package:: sc3-scripts

   |downloads_sc3-scripts| |docker_sc3-scripts|

   :versions: 0.0.5-0, 0.0.4-0
   
   :depends bioconductor-biobase: 
   
   :depends bioconductor-genomeinfodbdata: 1.1.*
   
   :depends bioconductor-sc3: 1.8.0.*
   
   :depends bioconductor-scater: 1.8.4.*
   
   :depends bioconductor-scater-scripts: 
   
   :depends bioconductor-singlecellexperiment-scripts: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-optparse: 
   
   :depends r-workflowscriptscommon: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sc3-scripts

   and update with::

      conda update sc3-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/sc3-scripts:<tag>

   (see `sc3-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_sc3-scripts| image:: https://img.shields.io/conda/dn/bioconda/sc3-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_sc3-scripts| image:: https://quay.io/repository/biocontainers/sc3-scripts/status
   :target: https://quay.io/repository/biocontainers/sc3-scripts
.. _`sc3-scripts/tags`: https://quay.io/repository/biocontainers/sc3-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sc3-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sc3-scripts/README.html