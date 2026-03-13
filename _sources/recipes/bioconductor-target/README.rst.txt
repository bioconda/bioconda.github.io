:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-target'
.. highlight: bash

bioconductor-target
===================

.. conda:recipe:: bioconductor-target
   :replaces_section_title:
   :noindex:

   Predict Combined Function of Transcription Factors

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/target.html
   :license: GPL-3
   :recipe: /`bioconductor-target <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-target/meta.yaml>`_

   Implement the BETA algorithm for infering direct target genes from DNA\-binding and perturbation expression data Wang et al. \(2013\) \<doi\: 10.1038\/nprot.2013.150\>. Extend the algorithm to predict the combined function of two DNA\-binding elements from comprable binding and expression data.


.. conda:package:: bioconductor-target

   |downloads_bioconductor-target| |docker_bioconductor-target|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrixstats: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-target

to add into an existing workspace instead, run::

    pixi add bioconductor-target

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-target

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-target

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-target:<tag>

(see `bioconductor-target/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-target| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-target.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-target
   :alt:   (downloads)
.. |docker_bioconductor-target| image:: https://quay.io/repository/biocontainers/bioconductor-target/status
   :target: https://quay.io/repository/biocontainers/bioconductor-target
.. _`bioconductor-target/tags`: https://quay.io/repository/biocontainers/bioconductor-target?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-target";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-target/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-target/README.html