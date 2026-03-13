:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dnet'
.. highlight: bash

r-dnet
======

.. conda:recipe:: r-dnet
   :replaces_section_title:
   :noindex:

   The focus of the dnet by Fang and Gough \(2014\) \<doi\:10.1186\/s13073\-014\-0064\-8\> is to make sense of omics data \(such as gene expression and mutations\) from different angles including\: integration with molecular networks\, enrichments using ontologies\, and relevance to gene evolutionary ages. Integration is achieved to identify a gene subnetwork from the whole gene network whose nodes\/genes are labelled with informative data \(such as the significant levels of differential expression or survival risks\). To help make sense of identified gene networks\, enrichment analysis is also supported using a wide variety of pre\-compiled ontologies and phylostratific gene age information in major organisms including\: human\, mouse\, rat\, chicken\, C.elegans\, fruit fly\, zebrafish and arabidopsis. Add\-on functionalities are supports for calculating semantic similarity between ontology terms \(and between genes\) and for calculating network affinity based on random walk\; both can be done via high\-performance parallel computing.

   :homepage: http://dnet.r-forge.r-project.org, https://github.com/hfang-bristol/dnet
   :license: GPL2 / GPL-2
   :recipe: /`r-dnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dnet/meta.yaml>`_

   


.. conda:package:: r-dnet

   |downloads_r-dnet| |docker_r-dnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-5</code>,  <code>1.1.7-4</code>,  <code>1.1.7-3</code>,  <code>1.1.7-2</code>,  <code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  </span></summary>
      

      ``1.1.7-5``,  ``1.1.7-4``,  ``1.1.7-3``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: 
   :depends on bioconductor-rgraphviz: 
   :depends on bioconductor-suprahex: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-igraph: 
   :depends on r-matrix: 

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

    pixi global install r-dnet

to add into an existing workspace instead, run::

    pixi add r-dnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dnet

Alternatively, to install into a new environment, run::

    conda create -n envname r-dnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dnet:<tag>

(see `r-dnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dnet| image:: https://img.shields.io/conda/dn/bioconda/r-dnet.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dnet
   :alt:   (downloads)
.. |docker_r-dnet| image:: https://quay.io/repository/biocontainers/r-dnet/status
   :target: https://quay.io/repository/biocontainers/r-dnet
.. _`r-dnet/tags`: https://quay.io/repository/biocontainers/r-dnet?tab=tags


.. raw:: html

    <script>
        var package = "r-dnet";
        var versions = ["1.1.7","1.1.7","1.1.7","1.1.7","1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dnet/README.html