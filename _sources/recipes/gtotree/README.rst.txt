:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtotree'
.. highlight: bash

gtotree
=======

.. conda:recipe:: gtotree
   :replaces_section_title:
   :noindex:

   GToTree is a user\-friendly workflow for phylogenomics.

   :homepage: https://github.com/AstrobioMike/GToTree
   :documentation: https://github.com/AstrobioMike/GToTree/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gtotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtotree/meta.yaml>`_

   
   \# GToTree \- a user\-friendly workflow for phylogenomics

   GToTree is a user\-friendly workflow for phylogenomics intended to give more researchers the capability to create phylogenomic trees. The open\-access Bioinformatics Journal publication is available here \(https\:\/\/doi.org\/10.1093\/bioinformatics\/btz188\)\, and documentation and examples can be found at the wiki here \(https\:\/\/github.com\/AstrobioMike\/GToTree\/wiki\).

   Installation should be performed as\:

   \`\`\`
   conda create \-n gtotree \-c astrobiomike \-c conda\-forge \-c bioconda gtotree
   \`\`\`



.. conda:package:: gtotree

   |downloads_gtotree| |docker_gtotree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.16-2</code>,  <code>1.8.16-1</code>,  <code>1.8.16-0</code>,  <code>1.8.15-0</code>,  <code>1.8.14-0</code>,  <code>1.8.13-0</code>,  <code>1.8.12-0</code>,  <code>1.8.11-0</code>,  <code>1.8.10-0</code>,  </span></summary>
      

      ``1.8.16-2``,  ``1.8.16-1``,  ``1.8.16-0``,  ``1.8.15-0``,  ``1.8.14-0``,  ``1.8.13-0``,  ``1.8.12-0``,  ``1.8.11-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.8-1``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.7.10-0``,  ``1.7.08-0``,  ``1.7.07-0``,  ``1.7.06-0``,  ``1.7.05-1``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends biopython: 
   :depends coreutils: ``9.1.*``
   :depends curl: 
   :depends dos2unix: 
   :depends entrez-direct: 
   :depends fasttree: ``2.1.11.*``
   :depends file: 
   :depends gzip: 
   :depends hmmer: 
   :depends iqtree: ``>=2.2.2``
   :depends kofamscan: ``1.3.0.*``
   :depends muscle: ``5.1.*``
   :depends pandas: 
   :depends parallel: 
   :depends prodigal: 
   :depends pyarrow: 
   :depends python: ``3.12.7.*``
   :depends sed: 
   :depends tar: 
   :depends taxonkit: 
   :depends trimal: 
   :depends veryfasttree: 
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

      mamba install gtotree

   and update with::

      mamba update gtotree

  To create a new environment, run::

      mamba create --name myenvname gtotree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtotree:<tag>

   (see `gtotree/tags`_ for valid values for ``<tag>``)


.. |downloads_gtotree| image:: https://img.shields.io/conda/dn/bioconda/gtotree.svg?style=flat
   :target: https://anaconda.org/bioconda/gtotree
   :alt:   (downloads)
.. |docker_gtotree| image:: https://quay.io/repository/biocontainers/gtotree/status
   :target: https://quay.io/repository/biocontainers/gtotree
.. _`gtotree/tags`: https://quay.io/repository/biocontainers/gtotree?tab=tags


.. raw:: html

    <script>
        var package = "gtotree";
        var versions = ["1.8.16","1.8.16","1.8.16","1.8.15","1.8.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtotree/README.html