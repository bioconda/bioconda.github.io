:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-workflowscriptscommon'
.. highlight: bash

r-workflowscriptscommon
=======================

.. conda:recipe:: r-workflowscriptscommon
   :replaces_section_title:
   :noindex:

   Common functions for making R function wapper scripts. Functions in R packages are hard to call when building workflows outside of R\, so this package is used by other packages \(e.g. r\-seurat\-scripts\) to add sets of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/workflowscriptscommon
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-workflowscriptscommon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-workflowscriptscommon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-workflowscriptscommon/meta.yaml>`_

   


.. conda:package:: r-workflowscriptscommon

   |downloads_r-workflowscriptscommon| |docker_r-workflowscriptscommon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.8-5</code>,  <code>0.0.8-4</code>,  <code>0.0.8-3</code>,  <code>0.0.8-2</code>,  <code>0.0.8-1</code>,  <code>0.0.8-0</code>,  <code>0.0.7-3</code>,  <code>0.0.7-2</code>,  <code>0.0.7-1</code>,  </span></summary>
      

      ``0.0.8-5``,  ``0.0.8-4``,  ``0.0.8-3``,  ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-3``,  ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-optparse: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-workflowscriptscommon

   and update with::

      mamba update r-workflowscriptscommon

  To create a new environment, run::

      mamba create --name myenvname r-workflowscriptscommon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-workflowscriptscommon:<tag>

   (see `r-workflowscriptscommon/tags`_ for valid values for ``<tag>``)


.. |downloads_r-workflowscriptscommon| image:: https://img.shields.io/conda/dn/bioconda/r-workflowscriptscommon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-workflowscriptscommon
   :alt:   (downloads)
.. |docker_r-workflowscriptscommon| image:: https://quay.io/repository/biocontainers/r-workflowscriptscommon/status
   :target: https://quay.io/repository/biocontainers/r-workflowscriptscommon
.. _`r-workflowscriptscommon/tags`: https://quay.io/repository/biocontainers/r-workflowscriptscommon?tab=tags


.. raw:: html

    <script>
        var package = "r-workflowscriptscommon";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.8","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-workflowscriptscommon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-workflowscriptscommon/README.html