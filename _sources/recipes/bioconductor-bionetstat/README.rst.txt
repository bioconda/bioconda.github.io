:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionetstat'
.. highlight: bash

bioconductor-bionetstat
=======================

.. conda:recipe:: bioconductor-bionetstat
   :replaces_section_title:
   :noindex:

   Biological Network Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BioNetStat.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bionetstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionetstat/meta.yaml>`_

   A package to perform differential network analysis\, differential node analysis \(differential coexpression analysis\)\, network and metabolic pathways view.


.. conda:package:: bioconductor-bionetstat

   |downloads_bioconductor-bionetstat| |docker_bioconductor-bionetstat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-pathview: ``>=1.42.0,<1.43.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-hmisc: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-pheatmap: 
   :depends on r-plyr: 
   :depends on r-psych: 
   :depends on r-rcolorbrewer: 
   :depends on r-rjsonio: 
   :depends on r-rmarkdown: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-whisker: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-bionetstat

to add into an existing workspace instead, run::

    pixi add bioconductor-bionetstat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bionetstat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bionetstat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bionetstat:<tag>

(see `bioconductor-bionetstat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bionetstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionetstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionetstat
   :alt:   (downloads)
.. |docker_bioconductor-bionetstat| image:: https://quay.io/repository/biocontainers/bioconductor-bionetstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionetstat
.. _`bioconductor-bionetstat/tags`: https://quay.io/repository/biocontainers/bioconductor-bionetstat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionetstat";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionetstat/README.html