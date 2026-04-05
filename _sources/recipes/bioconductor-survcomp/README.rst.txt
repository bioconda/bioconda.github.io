:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survcomp'
.. highlight: bash

bioconductor-survcomp
=====================

.. conda:recipe:: bioconductor-survcomp
   :replaces_section_title:
   :noindex:

   Performance Assessment and Comparison for Survival Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/survcomp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp/meta.yaml>`_
   :links: biotools: :biotools:`survcomp`

   Assessment and Comparison for Performance of Risk Prediction \(Survival\) Models.


.. conda:package:: bioconductor-survcomp

   |downloads_bioconductor-survcomp| |docker_bioconductor-survcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.1-1``,  ``1.44.1-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bootstrap: 
   :depends on r-ipred: 
   :depends on r-kernsmooth: 
   :depends on r-prodlim: 
   :depends on r-rmeta: 
   :depends on r-suppdists: 
   :depends on r-survival: 
   :depends on r-survivalroc: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-survcomp

to add into an existing workspace instead, run::

    pixi add bioconductor-survcomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-survcomp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-survcomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-survcomp:<tag>

(see `bioconductor-survcomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-survcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survcomp
   :alt:   (downloads)
.. |docker_bioconductor-survcomp| image:: https://quay.io/repository/biocontainers/bioconductor-survcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survcomp
.. _`bioconductor-survcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-survcomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-survcomp";
        var versions = ["1.60.0","1.56.0","1.56.0","1.52.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survcomp/README.html