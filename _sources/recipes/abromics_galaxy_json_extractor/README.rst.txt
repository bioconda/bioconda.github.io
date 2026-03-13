:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abromics_galaxy_json_extractor'
.. highlight: bash

abromics_galaxy_json_extractor
==============================

.. conda:recipe:: abromics_galaxy_json_extractor
   :replaces_section_title:
   :noindex:

   Tool to convert Galaxy AMR output to abromics project

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/abromics-galaxy-json-extractor/-/blob/main/docs/_build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/abromics-galaxy-json-extractor
   :license: GPL / GPLv3
   :recipe: /`abromics_galaxy_json_extractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abromics_galaxy_json_extractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abromics_galaxy_json_extractor/meta.yaml>`_

   


.. conda:package:: abromics_galaxy_json_extractor

   |downloads_abromics_galaxy_json_extractor| |docker_abromics_galaxy_json_extractor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3.6-0</code>,  <code>0.8.3.5-0</code>,  <code>0.8.3.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2.1-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  </span></summary>
      

      ``0.8.3.6-0``,  ``0.8.3.5-0``,  ``0.8.3.4-0``,  ``0.8.3-0``,  ``0.8.2.1-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      
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

    pixi global install abromics_galaxy_json_extractor

to add into an existing workspace instead, run::

    pixi add abromics_galaxy_json_extractor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abromics_galaxy_json_extractor

Alternatively, to install into a new environment, run::

    conda create -n envname abromics_galaxy_json_extractor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abromics_galaxy_json_extractor:<tag>

(see `abromics_galaxy_json_extractor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abromics_galaxy_json_extractor| image:: https://img.shields.io/conda/dn/bioconda/abromics_galaxy_json_extractor.svg?style=flat
   :target: https://anaconda.org/bioconda/abromics_galaxy_json_extractor
   :alt:   (downloads)
.. |docker_abromics_galaxy_json_extractor| image:: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor/status
   :target: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor
.. _`abromics_galaxy_json_extractor/tags`: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor?tab=tags


.. raw:: html

    <script>
        var package = "abromics_galaxy_json_extractor";
        var versions = ["0.8.3.6","0.8.3.5","0.8.3.4","0.8.3","0.8.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abromics_galaxy_json_extractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abromics_galaxy_json_extractor/README.html