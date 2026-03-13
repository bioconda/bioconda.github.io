:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degraph'
.. highlight: bash

bioconductor-degraph
====================

.. conda:recipe:: bioconductor-degraph
   :replaces_section_title:
   :noindex:

   Two\-sample tests on a graph

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEGraph.html
   :license: GPL-3
   :recipe: /`bioconductor-degraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph/meta.yaml>`_
   :links: biotools: :biotools:`degraph`, doi: :doi:`10.1214/11-AOAS528`

   DEGraph implements recent hypothesis testing methods which directly assess whether a particular gene network is differentially expressed between two conditions. This is to be contrasted with the more classical two\-step approaches which first test individual genes\, then test gene sets for enrichment in differentially expressed genes. These recent methods take into account the topology of the network to yield more powerful detection procedures. DEGraph provides methods to easily test all KEGG pathways for differential expression on any gene expression data set and tools to visualize the results.


.. conda:package:: bioconductor-degraph

   |downloads_bioconductor-degraph| |docker_bioconductor-degraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-kegggraph: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-ncigraph: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lattice: 
   :depends on r-mvtnorm: 
   :depends on r-r.methodss3: 
   :depends on r-r.utils: 
   :depends on r-rrcov: 

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

    pixi global install bioconductor-degraph

to add into an existing workspace instead, run::

    pixi add bioconductor-degraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-degraph

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-degraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-degraph:<tag>

(see `bioconductor-degraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-degraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degraph
   :alt:   (downloads)
.. |docker_bioconductor-degraph| image:: https://quay.io/repository/biocontainers/bioconductor-degraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degraph
.. _`bioconductor-degraph/tags`: https://quay.io/repository/biocontainers/bioconductor-degraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degraph";
        var versions = ["1.62.0","1.58.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degraph/README.html