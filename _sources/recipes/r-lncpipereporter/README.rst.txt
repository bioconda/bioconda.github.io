:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lncpipereporter'
.. highlight: bash

r-lncpipereporter
=================

.. conda:recipe:: r-lncpipereporter
   :replaces_section_title:
   :noindex:

   Automatically Aggregating and Summarizing lncRNA Analysis Results for Interactive Report

   :homepage: https://github.com/bioinformatist/LncPipeReporter
   :license: GPL-2
   :recipe: /`r-lncpipereporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter/meta.yaml>`_

   


.. conda:package:: r-lncpipereporter

   |downloads_r-lncpipereporter| |docker_r-lncpipereporter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-10</code>,  <code>0.1.1-9</code>,  <code>0.1.1-8</code>,  <code>0.1.1-7</code>,  <code>0.1.1-6</code>,  <code>0.1.1-5</code>,  <code>0.1.1-4</code>,  <code>0.1.1-2</code>,  <code>0.1.1-1</code>,  </span></summary>
      

      ``0.1.1-10``,  ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends on bioconductor-noiseq: ``>=2.50.0,<2.51.0a0``
   :depends on libgcc: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-devtools: 
   :depends on r-dt: 
   :depends on r-flexdashboard: 
   :depends on r-ggbiplot: ``>=0.55,<0.56.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggsci: 
   :depends on r-heatmaply: 
   :depends on r-htmlwidgets: 
   :depends on r-knitr: 
   :depends on r-plotly: 
   :depends on r-rmarkdown: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install r-lncpipereporter

to add into an existing workspace instead, run::

    pixi add r-lncpipereporter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-lncpipereporter

Alternatively, to install into a new environment, run::

    conda create -n envname r-lncpipereporter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-lncpipereporter:<tag>

(see `r-lncpipereporter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-lncpipereporter| image:: https://img.shields.io/conda/dn/bioconda/r-lncpipereporter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lncpipereporter
   :alt:   (downloads)
.. |docker_r-lncpipereporter| image:: https://quay.io/repository/biocontainers/r-lncpipereporter/status
   :target: https://quay.io/repository/biocontainers/r-lncpipereporter
.. _`r-lncpipereporter/tags`: https://quay.io/repository/biocontainers/r-lncpipereporter?tab=tags


.. raw:: html

    <script>
        var package = "r-lncpipereporter";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lncpipereporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lncpipereporter/README.html