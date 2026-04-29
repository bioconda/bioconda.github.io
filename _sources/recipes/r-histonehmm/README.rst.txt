:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-histonehmm'
.. highlight: bash

r-histonehmm
============

.. conda:recipe:: r-histonehmm
   :replaces_section_title:
   :noindex:

   histoneHMM is a software to analyse ChIP\-seq data of histone modifications with broad genomic footprints like H3K27me3. It allows for calling modified regions in single samples as well as for calling differentially modified regions in a comparison of two samples.

   :homepage: http://histonehmm.molgen.mpg.de
   :developer docs: https://github.com/matthiasheinig/histoneHMM
   :license: GPL
   :recipe: /`r-histonehmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm/meta.yaml>`_

   


.. conda:package:: r-histonehmm

   |downloads_r-histonehmm| |docker_r-histonehmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8-8</code>,  <code>1.8-6</code>,  <code>1.8-5</code>,  <code>1.8-4</code>,  <code>1.8-3</code>,  <code>1.8-2</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7.1-1</code>,  </span></summary>
      

      ``1.8-8``,  ``1.8-6``,  ``1.8-5``,  ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7-1``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-mvtnorm: 
   :depends on r-optparse: 
   :depends on r-rcpp: 

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

    pixi global install r-histonehmm

to add into an existing workspace instead, run::

    pixi add r-histonehmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-histonehmm

Alternatively, to install into a new environment, run::

    conda create -n envname r-histonehmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-histonehmm:<tag>

(see `r-histonehmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-histonehmm| image:: https://img.shields.io/conda/dn/bioconda/r-histonehmm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-histonehmm
   :alt:   (downloads)
.. |docker_r-histonehmm| image:: https://quay.io/repository/biocontainers/r-histonehmm/status
   :target: https://quay.io/repository/biocontainers/r-histonehmm
.. _`r-histonehmm/tags`: https://quay.io/repository/biocontainers/r-histonehmm?tab=tags


.. raw:: html

    <script>
        var package = "r-histonehmm";
        var versions = ["1.8","1.8","1.8","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-histonehmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-histonehmm/README.html