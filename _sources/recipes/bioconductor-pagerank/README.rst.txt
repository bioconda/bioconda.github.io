:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pagerank'
.. highlight: bash

bioconductor-pagerank
=====================

.. conda:recipe:: bioconductor-pagerank
   :replaces_section_title:
   :noindex:

   Temporal and Multiplex PageRank for Gene Regulatory Network Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pageRank.html
   :license: GPL-2
   :recipe: /`bioconductor-pagerank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pagerank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pagerank/meta.yaml>`_

   Implemented temporal PageRank analysis as defined by Rozenshtein and Gionis. Implemented multiplex PageRank as defined by Halu et al. Applied temporal and multiplex PageRank in gene regulatory network analysis.


.. conda:package:: bioconductor-pagerank

   |downloads_bioconductor-pagerank| |docker_bioconductor-pagerank|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 

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

    pixi global install bioconductor-pagerank

to add into an existing workspace instead, run::

    pixi add bioconductor-pagerank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pagerank

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pagerank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pagerank:<tag>

(see `bioconductor-pagerank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pagerank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pagerank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pagerank
   :alt:   (downloads)
.. |docker_bioconductor-pagerank| image:: https://quay.io/repository/biocontainers/bioconductor-pagerank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pagerank
.. _`bioconductor-pagerank/tags`: https://quay.io/repository/biocontainers/bioconductor-pagerank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pagerank";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pagerank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pagerank/README.html