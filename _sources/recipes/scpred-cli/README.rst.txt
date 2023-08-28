:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scpred-cli'
.. highlight: bash

scpred-cli
==========

.. conda:recipe:: scpred-cli
   :replaces_section_title:
   :noindex:

   A set of command\-line wrappers for the core functions in the scPred package.

   :homepage: https://github.com/ebi-gene-expression-group/scPred-cli
   :license: Apache-2.0
   :recipe: /`scpred-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli/meta.yaml>`_

   


.. conda:package:: scpred-cli

   |downloads_scpred-cli| |docker_scpred-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-doparallel: 
   :depends r-optparse: 
   :depends r-scpred: ``v1.9.0.*``
   :depends r-seurat: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install scpred-cli

   and update with::

      mamba update scpred-cli

  To create a new environment, run::

      mamba create --name myenvname scpred-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scpred-cli:<tag>

   (see `scpred-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scpred-cli| image:: https://img.shields.io/conda/dn/bioconda/scpred-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scpred-cli
   :alt:   (downloads)
.. |docker_scpred-cli| image:: https://quay.io/repository/biocontainers/scpred-cli/status
   :target: https://quay.io/repository/biocontainers/scpred-cli
.. _`scpred-cli/tags`: https://quay.io/repository/biocontainers/scpred-cli?tab=tags


.. raw:: html

    <script>
        var package = "scpred-cli";
        var versions = ["0.1.0","0.1.0","0.1.0","0.0.9","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scpred-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scpred-cli/README.html