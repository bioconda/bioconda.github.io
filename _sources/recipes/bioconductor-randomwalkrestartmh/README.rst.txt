:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randomwalkrestartmh'
.. highlight: bash

bioconductor-randomwalkrestartmh
================================

.. conda:recipe:: bioconductor-randomwalkrestartmh
   :replaces_section_title:
   :noindex:

   Random walk with restart on multiplex and heterogeneous Networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RandomWalkRestartMH.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-randomwalkrestartmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh/meta.yaml>`_

   This package performs Random Walk with Restart on multiplex and heterogeneous networks. It is described in the following article\: \"Random Walk With Restart On Multiplex And Heterogeneous Biological Networks\" \<https\:\/\/academic.oup.com\/bioinformatics\/article\/35\/3\/497\/5055408\>.


.. conda:package:: bioconductor-randomwalkrestartmh

   |downloads_bioconductor-randomwalkrestartmh| |docker_bioconductor-randomwalkrestartmh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dnet: 
   :depends on r-igraph: 
   :depends on r-matrix: 

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

    pixi global install bioconductor-randomwalkrestartmh

to add into an existing workspace instead, run::

    pixi add bioconductor-randomwalkrestartmh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-randomwalkrestartmh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-randomwalkrestartmh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-randomwalkrestartmh:<tag>

(see `bioconductor-randomwalkrestartmh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-randomwalkrestartmh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randomwalkrestartmh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randomwalkrestartmh
   :alt:   (downloads)
.. |docker_bioconductor-randomwalkrestartmh| image:: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh
.. _`bioconductor-randomwalkrestartmh/tags`: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-randomwalkrestartmh";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html