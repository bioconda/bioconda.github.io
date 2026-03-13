:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singscore'
.. highlight: bash

bioconductor-singscore
======================

.. conda:recipe:: bioconductor-singscore
   :replaces_section_title:
   :noindex:

   Rank\-based single\-sample gene set scoring method

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/singscore.html
   :license: GPL-3
   :recipe: /`bioconductor-singscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singscore/meta.yaml>`_

   A simple single\-sample gene signature scoring method that uses rank\-based statistics to analyze the sample\'s gene expression profile. It scores the expression activities of gene sets at a single\-sample level.


.. conda:package:: bioconductor-singscore

   |downloads_bioconductor-singscore| |docker_bioconductor-singscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape: 
   :depends on r-reshape2: 
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

    pixi global install bioconductor-singscore

to add into an existing workspace instead, run::

    pixi add bioconductor-singscore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-singscore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-singscore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-singscore:<tag>

(see `bioconductor-singscore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-singscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singscore
   :alt:   (downloads)
.. |docker_bioconductor-singscore| image:: https://quay.io/repository/biocontainers/bioconductor-singscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singscore
.. _`bioconductor-singscore/tags`: https://quay.io/repository/biocontainers/bioconductor-singscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singscore";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singscore/README.html