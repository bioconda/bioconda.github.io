:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tooldistillator'
.. highlight: bash

tooldistillator
===============

.. conda:recipe:: tooldistillator
   :replaces_section_title:
   :noindex:

   Tool to extract and aggregate information from different tool outputs to JSON parsable files

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/tooldistillator/-/blob/main/docs/_build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/tooldistillator
   :license: GPL / GPLv3
   :recipe: /`tooldistillator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tooldistillator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tooldistillator/meta.yaml>`_

   


.. conda:package:: tooldistillator

   |downloads_tooldistillator| |docker_tooldistillator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  </span></summary>
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8.5.0-0``,  ``0.8.4.1-0``,  ``0.8.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _libgcc_mutex: 
   :depends on _openmp_mutex: 
   :depends on biopython: 
   :depends on bzip2: 
   :depends on ca-certificates: 
   :depends on ld_impl_linux-64: 
   :depends on libblas: 
   :depends on libcblas: 
   :depends on libffi: 
   :depends on libgcc-ng: 
   :depends on libgfortran-ng: 
   :depends on libgfortran5: 
   :depends on libgomp: 
   :depends on liblapack: 
   :depends on libnsl: 
   :depends on libopenblas: 
   :depends on libsqlite: 
   :depends on libstdcxx-ng: 
   :depends on libzlib: 
   :depends on ncurses: 
   :depends on numpy: 
   :depends on openssl: 
   :depends on pandas: 
   :depends on pip: 
   :depends on python: 
   :depends on python-dateutil: 
   :depends on python-tzdata: 
   :depends on python_abi: 
   :depends on pytz: 
   :depends on readline: 
   :depends on setuptools: 
   :depends on six: 
   :depends on tk: 
   :depends on tzdata: 
   :depends on wheel: 
   :depends on xz: 

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

    pixi global install tooldistillator

to add into an existing workspace instead, run::

    pixi add tooldistillator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tooldistillator

Alternatively, to install into a new environment, run::

    conda create -n envname tooldistillator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tooldistillator:<tag>

(see `tooldistillator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tooldistillator| image:: https://img.shields.io/conda/dn/bioconda/tooldistillator.svg?style=flat
   :target: https://anaconda.org/bioconda/tooldistillator
   :alt:   (downloads)
.. |docker_tooldistillator| image:: https://quay.io/repository/biocontainers/tooldistillator/status
   :target: https://quay.io/repository/biocontainers/tooldistillator
.. _`tooldistillator/tags`: https://quay.io/repository/biocontainers/tooldistillator?tab=tags


.. raw:: html

    <script>
        var package = "tooldistillator";
        var versions = ["1.0.5","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tooldistillator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tooldistillator/README.html