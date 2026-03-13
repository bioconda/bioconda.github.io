:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squirrel'
.. highlight: bash

squirrel
========

.. conda:recipe:: squirrel
   :replaces_section_title:
   :noindex:

   Some QUIck Reconstruction to Resolve Evolutionary Links.

   :homepage: https://github.com/aineniamh/squirrel
   :documentation: https://github.com/aineniamh/squirrel/blob/1.3.2/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`squirrel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squirrel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squirrel/meta.yaml>`_
   :links: biotools: :biotools:`squirrel`, usegalaxy-eu: :usegalaxy-eu:`squirrel_phylo`, usegalaxy-eu: :usegalaxy-eu:`squirrel_qc`

   


.. conda:package:: squirrel

   |downloads_squirrel| |docker_squirrel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.2-0``,  ``1.2-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on baltic: 
   :depends on biopython: ``>=1.70``
   :depends on gofasta: 
   :depends on iqtree: 
   :depends on jclusterfunk: ``>=0.0.25``
   :depends on mako: 
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pulp: 
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``1.7.1``
   :depends on seaborn-base: 
   :depends on snakemake-minimal: ``>=9.9.0``
   :depends on tabulate: 

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

    pixi global install squirrel

to add into an existing workspace instead, run::

    pixi add squirrel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install squirrel

Alternatively, to install into a new environment, run::

    conda create -n envname squirrel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/squirrel:<tag>

(see `squirrel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_squirrel| image:: https://img.shields.io/conda/dn/bioconda/squirrel.svg?style=flat
   :target: https://anaconda.org/bioconda/squirrel
   :alt:   (downloads)
.. |docker_squirrel| image:: https://quay.io/repository/biocontainers/squirrel/status
   :target: https://quay.io/repository/biocontainers/squirrel
.. _`squirrel/tags`: https://quay.io/repository/biocontainers/squirrel?tab=tags


.. raw:: html

    <script>
        var package = "squirrel";
        var versions = ["1.3.2","1.3.1","1.3","1.2.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squirrel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squirrel/README.html