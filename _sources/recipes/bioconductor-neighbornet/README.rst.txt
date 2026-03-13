:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-neighbornet'
.. highlight: bash

bioconductor-neighbornet
========================

.. conda:recipe:: bioconductor-neighbornet
   :replaces_section_title:
   :noindex:

   Neighbor\_net analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NeighborNet.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-neighbornet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet/meta.yaml>`_

   Identify the putative mechanism explaining the active interactions between genes in the investigated phenotype.


.. conda:package:: bioconductor-neighbornet

   |downloads_bioconductor-neighbornet| |docker_bioconductor-neighbornet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-neighbornet

to add into an existing workspace instead, run::

    pixi add bioconductor-neighbornet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-neighbornet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-neighbornet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-neighbornet:<tag>

(see `bioconductor-neighbornet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-neighbornet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neighbornet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-neighbornet
   :alt:   (downloads)
.. |docker_bioconductor-neighbornet| image:: https://quay.io/repository/biocontainers/bioconductor-neighbornet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neighbornet
.. _`bioconductor-neighbornet/tags`: https://quay.io/repository/biocontainers/bioconductor-neighbornet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-neighbornet";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html