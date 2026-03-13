:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylaid'
.. highlight: bash

bioconductor-methylaid
======================

.. conda:recipe:: bioconductor-methylaid
   :replaces_section_title:
   :noindex:

   Visual and interactive quality control of large Illumina DNA Methylation array data sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MethylAid.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methylaid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaid/meta.yaml>`_

   A visual and interactive web application using RStudio\'s shiny package. Bad quality samples are detected using sample\-dependent and sample\-independent controls present on the array and user adjustable thresholds. In depth exploration of bad quality samples can be performed using several interactive diagnostic plots of the quality control probes present on the array. Furthermore\, the impact of any batch effect provided by the user can be explored.


.. conda:package:: bioconductor-methylaid

   |downloads_bioconductor-methylaid| |docker_bioconductor-methylaid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-gridbase: 
   :depends on r-hexbin: 
   :depends on r-matrixstats: 
   :depends on r-rcolorbrewer: 
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

    pixi global install bioconductor-methylaid

to add into an existing workspace instead, run::

    pixi add bioconductor-methylaid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-methylaid

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-methylaid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-methylaid:<tag>

(see `bioconductor-methylaid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-methylaid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylaid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylaid
   :alt:   (downloads)
.. |docker_bioconductor-methylaid| image:: https://quay.io/repository/biocontainers/bioconductor-methylaid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylaid
.. _`bioconductor-methylaid/tags`: https://quay.io/repository/biocontainers/bioconductor-methylaid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylaid";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylaid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylaid/README.html