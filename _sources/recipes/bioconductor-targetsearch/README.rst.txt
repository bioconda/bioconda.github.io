:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetsearch'
.. highlight: bash

bioconductor-targetsearch
=========================

.. conda:recipe:: bioconductor-targetsearch
   :replaces_section_title:
   :noindex:

   A package for the analysis of GC\-MS metabolite profiling data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TargetSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch/meta.yaml>`_

   This packages provides a flexible\, fast and accurate method for targeted pre\-processing of GC\-MS data. The user provides a \(often very large\) set of GC chromatograms and a metabolite library of targets. The package will automatically search those targets in the chromatograms resulting in a data matrix that can be used for further data analysis.


.. conda:package:: bioconductor-targetsearch

   |downloads_bioconductor-targetsearch| |docker_bioconductor-targetsearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.50.1-1</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.8.0-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.2.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.50.1-1``,  ``1.50.1-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.3-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.2-0``,  ``1.40.0-0``,  ``1.38.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ncdf4: 

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

    pixi global install bioconductor-targetsearch

to add into an existing workspace instead, run::

    pixi add bioconductor-targetsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-targetsearch

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-targetsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-targetsearch:<tag>

(see `bioconductor-targetsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-targetsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetsearch
   :alt:   (downloads)
.. |docker_bioconductor-targetsearch| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearch
.. _`bioconductor-targetsearch/tags`: https://quay.io/repository/biocontainers/bioconductor-targetsearch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetsearch";
        var versions = ["2.12.0","2.8.0","2.4.1","2.4.1","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html