:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnviz'
.. highlight: bash

bioconductor-cnviz
==================

.. conda:recipe:: bioconductor-cnviz
   :replaces_section_title:
   :noindex:

   Copy Number Visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CNViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnviz/meta.yaml>`_

   CNViz takes probe\, gene\, and segment\-level log2 copy number ratios and launches a Shiny app to visualize your sample\'s copy number profile. You can also integrate loss of heterozygosity \(LOH\) and single nucleotide variant \(SNV\) data.


.. conda:package:: bioconductor-cnviz

   |downloads_bioconductor-cnviz| |docker_bioconductor-cnviz|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-copynumberplots: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-karyoploter: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-scales: 
   :depends on r-shiny: ``>=1.5.0``

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

    pixi global install bioconductor-cnviz

to add into an existing workspace instead, run::

    pixi add bioconductor-cnviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cnviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cnviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cnviz:<tag>

(see `bioconductor-cnviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cnviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnviz
   :alt:   (downloads)
.. |docker_bioconductor-cnviz| image:: https://quay.io/repository/biocontainers/bioconductor-cnviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnviz
.. _`bioconductor-cnviz/tags`: https://quay.io/repository/biocontainers/bioconductor-cnviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnviz";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnviz/README.html