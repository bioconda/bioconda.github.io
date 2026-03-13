:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowviz'
.. highlight: bash

bioconductor-flowviz
====================

.. conda:recipe:: bioconductor-flowviz
   :replaces_section_title:
   :noindex:

   Visualization for flow cytometry

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz/meta.yaml>`_
   :links: biotools: :biotools:`flowviz`, doi: :doi:`10.1093/bioinformatics/btn021`

   Provides visualization tools for flow cytometry data.


.. conda:package:: bioconductor-flowviz

   |downloads_bioconductor-flowviz| |docker_bioconductor-flowviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hexbin: 
   :depends on r-idpmisc: 
   :depends on r-kernsmooth: 
   :depends on r-lattice: 
   :depends on r-latticeextra: 
   :depends on r-mass: 
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

    pixi global install bioconductor-flowviz

to add into an existing workspace instead, run::

    pixi add bioconductor-flowviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowviz:<tag>

(see `bioconductor-flowviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowviz
   :alt:   (downloads)
.. |docker_bioconductor-flowviz| image:: https://quay.io/repository/biocontainers/bioconductor-flowviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowviz
.. _`bioconductor-flowviz/tags`: https://quay.io/repository/biocontainers/bioconductor-flowviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowviz";
        var versions = ["1.74.0","1.70.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowviz/README.html