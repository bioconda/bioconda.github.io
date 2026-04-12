:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dysgu'
.. highlight: bash

dysgu
=====

.. conda:recipe:: dysgu
   :replaces_section_title:
   :noindex:

   A collection of tools for calling structural variants using short or long reads.

   :homepage: https://github.com/kcleal/dysgu
   :documentation: https://github.com/kcleal/dysgu/blob/v1.8.7/README.rst
   
   :license: MIT / MIT
   :recipe: /`dysgu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkac039`

   


.. conda:package:: dysgu

   |downloads_dysgu| |docker_dysgu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.7-0</code>,  <code>1.8.6-0</code>,  <code>1.8.5-0</code>,  <code>1.8.4-0</code>,  <code>1.8.3-0</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on click: ``>=8.0``
   :depends on cython: ``>=0.29``
   :depends on htslib: ``>=1.12``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lightgbm: ``>=3.1``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.18``
   :depends on numpy: ``>=1.21,<3``
   :depends on openssl: ``>=1.1``
   :depends on openssl: ``>=3.5.3,<4.0a0``
   :depends on pandas: ``>=1.2``
   :depends on pysam: ``>=0.23``
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=0.22``
   :depends on scipy: ``>=1.7``
   :depends on sortedcontainers: 
   :depends on superintervals: ``>=0.2.10``
   :depends on superintervals: ``>=0.3.5,<0.4.0a0``

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

    pixi global install dysgu

to add into an existing workspace instead, run::

    pixi add dysgu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dysgu

Alternatively, to install into a new environment, run::

    conda create -n envname dysgu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dysgu:<tag>

(see `dysgu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dysgu| image:: https://img.shields.io/conda/dn/bioconda/dysgu.svg?style=flat
   :target: https://anaconda.org/bioconda/dysgu
   :alt:   (downloads)
.. |docker_dysgu| image:: https://quay.io/repository/biocontainers/dysgu/status
   :target: https://quay.io/repository/biocontainers/dysgu
.. _`dysgu/tags`: https://quay.io/repository/biocontainers/dysgu?tab=tags


.. raw:: html

    <script>
        var package = "dysgu";
        var versions = ["1.8.7","1.8.6","1.8.5","1.8.4","1.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dysgu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dysgu/README.html