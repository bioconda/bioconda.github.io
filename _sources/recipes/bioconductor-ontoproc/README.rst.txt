:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ontoproc'
.. highlight: bash

bioconductor-ontoproc
=====================

.. conda:recipe:: bioconductor-ontoproc
   :replaces_section_title:
   :noindex:

   processing of ontologies of anatomy\, cell lines\, and so on

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ontoProc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ontoproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc/meta.yaml>`_

   Support harvesting of diverse bioinformatic ontologies\, making particular use of the ontologyIndex package on CRAN. We provide snapshots of key ontologies for terms about cells\, cell lines\, chemical compounds\, and anatomy\, to help analyze genome\-scale experiments\, particularly cell x compound screens. Another purpose is to strengthen development of compelling use cases for richer interfaces to emerging ontologies.


.. conda:package:: bioconductor-ontoproc

   |downloads_bioconductor-ontoproc| |docker_bioconductor-ontoproc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ellmer: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-magrittr: 
   :depends on r-ontologyindex: 
   :depends on r-ontologyplot: 
   :depends on r-r.utils: 
   :depends on r-reticulate: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-ontoproc

to add into an existing workspace instead, run::

    pixi add bioconductor-ontoproc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ontoproc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ontoproc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ontoproc:<tag>

(see `bioconductor-ontoproc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ontoproc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ontoproc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ontoproc
   :alt:   (downloads)
.. |docker_bioconductor-ontoproc| image:: https://quay.io/repository/biocontainers/bioconductor-ontoproc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ontoproc
.. _`bioconductor-ontoproc/tags`: https://quay.io/repository/biocontainers/bioconductor-ontoproc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ontoproc";
        var versions = ["2.4.0","2.0.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html