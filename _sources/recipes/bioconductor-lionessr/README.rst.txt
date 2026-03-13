:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lionessr'
.. highlight: bash

bioconductor-lionessr
=====================

.. conda:recipe:: bioconductor-lionessr
   :replaces_section_title:
   :noindex:

   Modeling networks for individual samples using LIONESS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lionessR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lionessr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr/meta.yaml>`_

   LIONESS\, or Linear Interpolation to Obtain Network Estimates for Single Samples\, can be used to reconstruct single\-sample networks \(https\:\/\/arxiv.org\/abs\/1505.06440\). This code implements the LIONESS equation in the lioness function in R to reconstruct single\-sample networks. The default network reconstruction method we use is based on Pearson correlation. However\, lionessR can run on any network reconstruction algorithms that returns a complete\, weighted adjacency matrix. lionessR works for both unipartite and bipartite networks.


.. conda:package:: bioconductor-lionessr

   |downloads_bioconductor-lionessr| |docker_bioconductor-lionessr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-lionessr

to add into an existing workspace instead, run::

    pixi add bioconductor-lionessr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lionessr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lionessr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lionessr:<tag>

(see `bioconductor-lionessr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lionessr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lionessr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lionessr
   :alt:   (downloads)
.. |docker_bioconductor-lionessr| image:: https://quay.io/repository/biocontainers/bioconductor-lionessr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lionessr
.. _`bioconductor-lionessr/tags`: https://quay.io/repository/biocontainers/bioconductor-lionessr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lionessr";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lionessr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lionessr/README.html