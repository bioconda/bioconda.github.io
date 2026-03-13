:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringdiff'
.. highlight: bash

bioconductor-nanostringdiff
===========================

.. conda:recipe:: bioconductor-nanostringdiff
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis of NanoString nCounter Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NanoStringDiff.html
   :license: GPL
   :recipe: /`bioconductor-nanostringdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff/meta.yaml>`_

   This Package utilizes a generalized linear model\(GLM\) of the negative binomial family to characterize count data and allows for multi\-factor design. NanoStrongDiff incorporate size factors\, calculated from positive controls and housekeeping controls\, and background level\, obtained from negative controls\, in the model framework so that all the normalization information provided by NanoString nCounter Analyzer is fully utilized.


.. conda:package:: bioconductor-nanostringdiff

   |downloads_bioconductor-nanostringdiff| |docker_bioconductor-nanostringdiff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrixstats: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-nanostringdiff

to add into an existing workspace instead, run::

    pixi add bioconductor-nanostringdiff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nanostringdiff

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nanostringdiff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nanostringdiff:<tag>

(see `bioconductor-nanostringdiff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nanostringdiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringdiff
   :alt:   (downloads)
.. |docker_bioconductor-nanostringdiff| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff
.. _`bioconductor-nanostringdiff/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanostringdiff";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html