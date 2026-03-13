:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lineagepulse'
.. highlight: bash

bioconductor-lineagepulse
=========================

.. conda:recipe:: bioconductor-lineagepulse
   :replaces_section_title:
   :noindex:

   Differential expression analysis and model fitting for single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/LineagePulse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lineagepulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse/meta.yaml>`_

   LineagePulse is a differential expression and expression model fitting package tailored to single\-cell RNA\-seq data \(scRNA\-seq\). LineagePulse accounts for batch effects\, drop\-out and variable sequencing depth. One can use LineagePulse to perform longitudinal differential expression analysis across pseudotime as a continuous coordinate or between discrete groups of cells \(e.g. pre\-defined clusters or experimental conditions\). Expression model fits can be directly extracted from LineagePulse.


.. conda:package:: bioconductor-lineagepulse

   |downloads_bioconductor-lineagepulse| |docker_bioconductor-lineagepulse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-circlize: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-knitr: 
   :depends on r-matrix: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-lineagepulse

to add into an existing workspace instead, run::

    pixi add bioconductor-lineagepulse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lineagepulse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lineagepulse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lineagepulse:<tag>

(see `bioconductor-lineagepulse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lineagepulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagepulse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lineagepulse
   :alt:   (downloads)
.. |docker_bioconductor-lineagepulse| image:: https://quay.io/repository/biocontainers/bioconductor-lineagepulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagepulse
.. _`bioconductor-lineagepulse/tags`: https://quay.io/repository/biocontainers/bioconductor-lineagepulse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lineagepulse";
        var versions = ["1.21.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html