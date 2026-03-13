:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtrans'
.. highlight: bash

bioconductor-flowtrans
======================

.. conda:recipe:: bioconductor-flowtrans
   :replaces_section_title:
   :noindex:

   Parameter Optimization for Flow Cytometry Data Transformation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowTrans.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans/meta.yaml>`_

   Profile maximum likelihood estimation of parameters for flow cytometry data transformations.


.. conda:package:: bioconductor-flowtrans

   |downloads_bioconductor-flowtrans| |docker_bioconductor-flowtrans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowclust: ``>=3.48.0,<3.49.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowviz: ``>=1.74.0,<1.75.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-flowtrans

to add into an existing workspace instead, run::

    pixi add bioconductor-flowtrans

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowtrans

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowtrans

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowtrans:<tag>

(see `bioconductor-flowtrans/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowtrans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtrans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtrans
   :alt:   (downloads)
.. |docker_bioconductor-flowtrans| image:: https://quay.io/repository/biocontainers/bioconductor-flowtrans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtrans
.. _`bioconductor-flowtrans/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtrans?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowtrans";
        var versions = ["1.62.0","1.58.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html