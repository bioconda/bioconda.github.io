:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedarray'
.. highlight: bash

bioconductor-delayedarray
=========================

.. conda:recipe:: bioconductor-delayedarray
   :replaces_section_title:
   :noindex:

   A unified framework for working transparently with on\-disk and in\-memory array\-like datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DelayedArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-delayedarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedarray/meta.yaml>`_

   Wrapping an array\-like object \(typically an on\-disk object\) in a DelayedArray object allows one to perform common array operations on it without loading the object in memory. In order to reduce memory usage and optimize performance\, operations on the object are either delayed or executed using a block processing mechanism. Note that this also works on in\-memory array\-like objects like DataFrame objects \(typically with Rle columns\)\, Matrix objects\, ordinary arrays and\, data frames.


.. conda:package:: bioconductor-delayedarray

   |downloads_bioconductor-delayedarray| |docker_bioconductor-delayedarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.28.0-2</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.26.6-0</code>,  <code>0.24.0-1</code>,  <code>0.24.0-0</code>,  </span></summary>
      

      ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.28.0-2``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.6-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.20.0-2``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.3-0``,  ``0.16.0-0``,  ``0.14.0-0``,  ``0.12.0-0``,  ``0.10.0-1``,  ``0.8.0-0``,  ``0.6.6-0``,  ``0.4.1-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-s4arrays: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-s4arrays: ``>=1.10.1,<1.11.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-sparsearray: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-sparsearray: ``>=1.10.8,<1.11.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-delayedarray

to add into an existing workspace instead, run::

    pixi add bioconductor-delayedarray

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-delayedarray

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-delayedarray

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-delayedarray:<tag>

(see `bioconductor-delayedarray/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-delayedarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedarray
   :alt:   (downloads)
.. |docker_bioconductor-delayedarray| image:: https://quay.io/repository/biocontainers/bioconductor-delayedarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedarray
.. _`bioconductor-delayedarray/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedarray";
        var versions = ["0.36.0","0.32.0","0.32.0","0.28.0","0.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedarray/README.html