:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seurat-scripts'
.. highlight: bash

seurat-scripts
==============

.. conda:recipe:: seurat-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the Seurat package.

   :homepage: https://github.com/ebi-gene-expression-group/r-seurat-scripts
   :license: Apache / Apache-2.0
   :recipe: /`seurat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts/meta.yaml>`_

   


.. conda:package:: seurat-scripts

   |downloads_seurat-scripts| |docker_seurat-scripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.4.0-0</code>,  <code>4.0.0-0</code>,  <code>0.3.0-0</code>,  <code>0.0.9-2</code>,  <code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``4.4.0-0``,  ``4.0.0-0``,  ``0.3.0-0``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: 
   :depends bioconductor-multtest: 
   :depends bioconductor-scater: 
   :depends libpng: 
   :depends mscorefonts: 
   :depends pandoc: 
   :depends r-cairo: 
   :depends r-loom: 
   :depends r-metap: 
   :depends r-optparse: 
   :depends r-remotes: 
   :depends r-seurat: ``<=4.4``
   :depends r-seuratdisk: 
   :depends r-svglite: 
   :depends r-workflowscriptscommon: ``>=0.0.8``
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

      mamba install seurat-scripts

   and update with::

      mamba update seurat-scripts

  To create a new environment, run::

      mamba create --name myenvname seurat-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seurat-scripts:<tag>

   (see `seurat-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_seurat-scripts| image:: https://img.shields.io/conda/dn/bioconda/seurat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/seurat-scripts
   :alt:   (downloads)
.. |docker_seurat-scripts| image:: https://quay.io/repository/biocontainers/seurat-scripts/status
   :target: https://quay.io/repository/biocontainers/seurat-scripts
.. _`seurat-scripts/tags`: https://quay.io/repository/biocontainers/seurat-scripts?tab=tags


.. raw:: html

    <script>
        var package = "seurat-scripts";
        var versions = ["4.4.0","4.0.0","0.3.0","0.0.9","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seurat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seurat-scripts/README.html