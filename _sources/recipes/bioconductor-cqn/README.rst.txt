:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cqn'
.. highlight: bash

bioconductor-cqn
================

.. conda:recipe:: bioconductor-cqn
   :replaces_section_title:
   :noindex:

   Conditional quantile normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn/meta.yaml>`_
   :links: biotools: :biotools:`cqn`

   A normalization tool for RNA\-Seq data\, implementing the conditional quantile normalization method.


.. conda:package:: bioconductor-cqn

   |downloads_bioconductor-cqn| |docker_bioconductor-cqn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mclust: 
   :depends on r-nor1mix: 
   :depends on r-quantreg: 

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

    pixi global install bioconductor-cqn

to add into an existing workspace instead, run::

    pixi add bioconductor-cqn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cqn

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cqn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cqn:<tag>

(see `bioconductor-cqn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cqn
   :alt:   (downloads)
.. |docker_bioconductor-cqn| image:: https://quay.io/repository/biocontainers/bioconductor-cqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cqn
.. _`bioconductor-cqn/tags`: https://quay.io/repository/biocontainers/bioconductor-cqn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cqn";
        var versions = ["1.56.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cqn/README.html