:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'odgi'
.. highlight: bash

odgi
====

.. conda:recipe:: odgi
   :replaces_section_title:
   :noindex:

   An optimized dynamic genome\/graph implementation.

   :homepage: https://github.com/pangenome/odgi
   :documentation: https://github.com/pangenome/odgi/blob/v0.9.4/README.md
   
   :license: MIT / MIT
   :recipe: /`odgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odgi/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac308`, biotools: :biotools:`odgi`, usegalaxy-eu: :usegalaxy-eu:`odgi_viz`, usegalaxy-eu: :usegalaxy-eu:`odgi_build`

   


.. conda:package:: odgi

   |downloads_odgi| |docker_odgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.6-2</code>,  <code>0.8.6-1</code>,  </span></summary>
      

      ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.6-2``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6-1``,  ``0.6-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``v0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on jemalloc: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on libstdcxx-ng: 
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pybind11: 
   :depends on python: ``>=3``

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

    pixi global install odgi

to add into an existing workspace instead, run::

    pixi add odgi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install odgi

Alternatively, to install into a new environment, run::

    conda create -n envname odgi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/odgi:<tag>

(see `odgi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_odgi| image:: https://img.shields.io/conda/dn/bioconda/odgi.svg?style=flat
   :target: https://anaconda.org/bioconda/odgi
   :alt:   (downloads)
.. |docker_odgi| image:: https://quay.io/repository/biocontainers/odgi/status
   :target: https://quay.io/repository/biocontainers/odgi
.. _`odgi/tags`: https://quay.io/repository/biocontainers/odgi?tab=tags


.. raw:: html

    <script>
        var package = "odgi";
        var versions = ["0.9.4","0.9.3","0.9.2","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odgi/README.html