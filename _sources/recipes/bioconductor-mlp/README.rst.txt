:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlp'
.. highlight: bash

bioconductor-mlp
================

.. conda:recipe:: bioconductor-mlp
   :replaces_section_title:
   :noindex:

   Mean Log P Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MLP.html
   :license: GPL-3
   :recipe: /`bioconductor-mlp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp/meta.yaml>`_
   :links: biotools: :biotools:`mlp`, doi: :doi:`10.1007/978-3-642-24007-2_12`

   Pathway analysis based on p\-values associated to genes from a genes expression analysis of interest. Utility functions enable to extract pathways from the Gene Ontology Biological Process \(GOBP\)\, Molecular Function \(GOMF\) and Cellular Component \(GOCC\)\, Kyoto Encyclopedia of Genes of Genomes \(KEGG\) and Reactome databases. Methodology\, and helper functions to display the results as a table\, barplot of pathway significance\, Gene Ontology graph and pathway significance are available.


.. conda:package:: bioconductor-mlp

   |downloads_bioconductor-mlp| |docker_bioconductor-mlp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 

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

    pixi global install bioconductor-mlp

to add into an existing workspace instead, run::

    pixi add bioconductor-mlp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mlp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mlp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mlp:<tag>

(see `bioconductor-mlp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mlp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlp
   :alt:   (downloads)
.. |docker_bioconductor-mlp| image:: https://quay.io/repository/biocontainers/bioconductor-mlp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlp
.. _`bioconductor-mlp/tags`: https://quay.io/repository/biocontainers/bioconductor-mlp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mlp";
        var versions = ["1.58.0","1.54.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlp/README.html