:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbknn'
.. highlight: bash

bbknn
=====

.. conda:recipe:: bbknn
   :replaces_section_title:
   :noindex:

   Batch balanced KNN.

   :homepage: https://github.com/Teichlab/bbknn
   :license: MIT / MIT
   :recipe: /`bbknn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz625`

   


.. conda:package:: bbknn

   |downloads_bbknn| |docker_bbknn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-5</code>,  <code>1.6.0-4</code>,  <code>1.6.0-3</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.6.0-5``,  ``1.6.0-4``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.12-1``,  ``1.3.12-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.13``
   :depends on numpy: ``>=1.21,<3``
   :depends on pandas: 
   :depends on pynndescent: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-annoy: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=1.0.2``
   :depends on scipy: ``>=1.6.0``
   :depends on umap-learn: 
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install bbknn

to add into an existing workspace instead, run::

    pixi add bbknn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bbknn

Alternatively, to install into a new environment, run::

    conda create -n envname bbknn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bbknn:<tag>

(see `bbknn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bbknn| image:: https://img.shields.io/conda/dn/bioconda/bbknn.svg?style=flat
   :target: https://anaconda.org/bioconda/bbknn
   :alt:   (downloads)
.. |docker_bbknn| image:: https://quay.io/repository/biocontainers/bbknn/status
   :target: https://quay.io/repository/biocontainers/bbknn
.. _`bbknn/tags`: https://quay.io/repository/biocontainers/bbknn?tab=tags


.. raw:: html

    <script>
        var package = "bbknn";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbknn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbknn/README.html