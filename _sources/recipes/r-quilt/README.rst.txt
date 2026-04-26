:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-quilt'
.. highlight: bash

r-quilt
=======

.. conda:recipe:: r-quilt
   :replaces_section_title:
   :noindex:

   Rapid and accurate genotype imputation from low coverage short read\, long read\, and cell free DNA sequence.

   :homepage: https://github.com/rwdavies/quilt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-quilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt/meta.yaml>`_

   


.. conda:package:: r-quilt

   |downloads_r-quilt| |docker_r-quilt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.5-0``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-mspbwt: ``>=0.1.0``
   :depends on r-mspbwt: ``>=0.1.1,<0.2.0a0``
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: ``>=0.3.4``
   :depends on r-stitch: ``>=1.8.2``
   :depends on r-stitch: ``>=1.8.4,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install r-quilt

to add into an existing workspace instead, run::

    pixi add r-quilt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-quilt

Alternatively, to install into a new environment, run::

    conda create -n envname r-quilt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-quilt:<tag>

(see `r-quilt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-quilt| image:: https://img.shields.io/conda/dn/bioconda/r-quilt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-quilt
   :alt:   (downloads)
.. |docker_r-quilt| image:: https://quay.io/repository/biocontainers/r-quilt/status
   :target: https://quay.io/repository/biocontainers/r-quilt
.. _`r-quilt/tags`: https://quay.io/repository/biocontainers/r-quilt?tab=tags


.. raw:: html

    <script>
        var package = "r-quilt";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-quilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-quilt/README.html