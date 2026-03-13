:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-enchantr'
.. highlight: bash

r-enchantr
==========

.. conda:recipe:: r-enchantr
   :replaces_section_title:
   :noindex:

   Analysis of immune repertoires. QC and reports for the analysis of AIRR\-seq data with Immcantation

   :homepage: https://bitbucket.org/kleinstein/enchantr
   :license: AGPL / AGPL-3
   :recipe: /`r-enchantr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enchantr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-enchantr/meta.yaml>`_

   


.. conda:package:: r-enchantr

   |downloads_r-enchantr| |docker_r-enchantr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  <code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.14.0``
   :depends on igphyml: ``1.1.5.*``
   :depends on r-airr: ``>=1.4.1``
   :depends on r-alakazam: ``>=1.2.1``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-bookdown: ``>=0.29``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dowser: ``>=1.1.0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-optparse: 
   :depends on r-plotly: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-scoper: ``>=1.2.1``
   :depends on r-shazam: ``>1.1.0``
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-testthat: 
   :depends on r-tidyr: 

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

    pixi global install r-enchantr

to add into an existing workspace instead, run::

    pixi add r-enchantr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-enchantr

Alternatively, to install into a new environment, run::

    conda create -n envname r-enchantr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-enchantr:<tag>

(see `r-enchantr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-enchantr| image:: https://img.shields.io/conda/dn/bioconda/r-enchantr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-enchantr
   :alt:   (downloads)
.. |docker_r-enchantr| image:: https://quay.io/repository/biocontainers/r-enchantr/status
   :target: https://quay.io/repository/biocontainers/r-enchantr
.. _`r-enchantr/tags`: https://quay.io/repository/biocontainers/r-enchantr?tab=tags


.. raw:: html

    <script>
        var package = "r-enchantr";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-enchantr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-enchantr/README.html