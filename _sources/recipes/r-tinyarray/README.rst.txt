:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tinyarray'
.. highlight: bash

r-tinyarray
===========

.. conda:recipe:: r-tinyarray
   :replaces_section_title:
   :noindex:

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas\(TCGA\) are common bioinformatics public databases. We integrate the regular analysis and charts for expression data\, to analyze and display the data concisely and intuitively.

   :homepage: https://github.com/xjsun1221/tinyarray
   :license: MIT / MIT
   :recipe: /`r-tinyarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray/meta.yaml>`_

   


.. conda:package:: r-tinyarray

   |downloads_r-tinyarray| |docker_r-tinyarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.3-0</code>,  <code>2.4.2-0</code>,  <code>2.4.1-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-1``,  ``2.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-clusterprofiler: 
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-biocmanager: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hmisc: 
   :depends on r-patchwork: 
   :depends on r-pheatmap: 
   :depends on r-stringr: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-tibble: 

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

    pixi global install r-tinyarray

to add into an existing workspace instead, run::

    pixi add r-tinyarray

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tinyarray

Alternatively, to install into a new environment, run::

    conda create -n envname r-tinyarray

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tinyarray:<tag>

(see `r-tinyarray/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tinyarray| image:: https://img.shields.io/conda/dn/bioconda/r-tinyarray.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tinyarray
   :alt:   (downloads)
.. |docker_r-tinyarray| image:: https://quay.io/repository/biocontainers/r-tinyarray/status
   :target: https://quay.io/repository/biocontainers/r-tinyarray
.. _`r-tinyarray/tags`: https://quay.io/repository/biocontainers/r-tinyarray?tab=tags


.. raw:: html

    <script>
        var package = "r-tinyarray";
        var versions = ["2.4.3","2.4.2","2.4.1","2.3.3","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tinyarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tinyarray/README.html