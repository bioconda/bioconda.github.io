:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-workflowscriptscommon'
.. highlight: bash

r-workflowscriptscommon
=======================

.. conda:recipe:: r-workflowscriptscommon
   :replaces_section_title:

   Common functions for making R function wapper scripts. Functions in R packages are hard to call when building workflows outside of R\, so this package is used by other packages \(e.g. r\-seurat\-scripts\) to add sets of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/workflowscriptscommon
   :license: GPL / GPL-3
   :recipe: /`r-workflowscriptscommon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-workflowscriptscommon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-workflowscriptscommon/meta.yaml>`_

   


.. conda:package:: r-workflowscriptscommon

   |downloads_r-workflowscriptscommon| |docker_r-workflowscriptscommon|

   :versions: 0.0.6-0, 0.0.5-0, 0.0.4-1, 0.0.4-0, 0.0.2-0, 0.0.1-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-optparse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-workflowscriptscommon

   and update with::

      conda update r-workflowscriptscommon

   or use the docker container::

      docker pull quay.io/biocontainers/r-workflowscriptscommon:<tag>

   (see `r-workflowscriptscommon/tags`_ for valid values for ``<tag>``)


.. |downloads_r-workflowscriptscommon| image:: https://img.shields.io/conda/dn/bioconda/r-workflowscriptscommon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-workflowscriptscommon
   :alt:   (downloads)
.. |docker_r-workflowscriptscommon| image:: https://quay.io/repository/biocontainers/r-workflowscriptscommon/status
   :target: https://quay.io/repository/biocontainers/r-workflowscriptscommon
.. _`r-workflowscriptscommon/tags`: https://quay.io/repository/biocontainers/r-workflowscriptscommon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-workflowscriptscommon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-workflowscriptscommon/README.html