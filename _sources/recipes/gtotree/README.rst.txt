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
      

   
   :depends on bc: 
   :depends on biopython: 
   :depends on coreutils: ``9.1.*``
   :depends on curl: 
   :depends on dos2unix: 
   :depends on entrez-direct: 
   :depends on fasttree: ``2.1.11.*``
   :depends on file: 
   :depends on gzip: 
   :depends on hmmer: 
   :depends on iqtree: ``>=2.2.2``
   :depends on kofamscan: ``1.3.0.*``
   :depends on muscle: ``5.1.*``
   :depends on pandas: 
   :depends on parallel: 
   :depends on prodigal: 
   :depends on pyarrow: 
   :depends on python: ``3.12.7.*``
   :depends on sed: 
   :depends on tar: 
   :depends on taxonkit: 
   :depends on trimal: 
   :depends on veryfasttree: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gtotree

to add into an existing workspace instead, run::

    pixi add gtotree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gtotree

Alternatively, to install into a new environment, run::

    conda create -n envname gtotree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gtotree:<tag>

(see `gtotree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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