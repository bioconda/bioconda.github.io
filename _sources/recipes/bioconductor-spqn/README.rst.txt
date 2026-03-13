:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spqn'
.. highlight: bash

bioconductor-spqn
=================

.. conda:recipe:: bioconductor-spqn
   :replaces_section_title:
   :noindex:

   Spatial quantile normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn/meta.yaml>`_

   The spqn package implements spatial quantile normalization \(SpQN\). This method was developed to remove a mean\-correlation relationship in correlation matrices built from gene expression data. It can serve as pre\-processing step prior to a co\-expression analysis.


.. conda:package:: bioconductor-spqn

   |downloads_bioconductor-spqn| |docker_bioconductor-spqn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggridges: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-spqn

to add into an existing workspace instead, run::

    pixi add bioconductor-spqn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spqn

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spqn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spqn:<tag>

(see `bioconductor-spqn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spqn
   :alt:   (downloads)
.. |docker_bioconductor-spqn| image:: https://quay.io/repository/biocontainers/bioconductor-spqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spqn
.. _`bioconductor-spqn/tags`: https://quay.io/repository/biocontainers/bioconductor-spqn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spqn";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spqn/README.html