:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pxblat'
.. highlight: bash

pxblat
======

.. conda:recipe:: pxblat
   :replaces_section_title:
   :noindex:

   PxBLAT\: An Efficient and Ergonomics Python Binding Library for BLAT.

   :homepage: https://github.com/ylab-hi/pxblat
   :documentation: https://pxblat.readthedocs.io/en/latest
   
   :developer docs: https://pypi.org/project/pxblat
   :license: OTHER
   :recipe: /`pxblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.08.02.551686`

   


.. conda:package:: pxblat

   |downloads_pxblat| |docker_pxblat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.8-1</code>,  <code>1.2.8-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.1.20-0</code>,  <code>1.1.19-0</code>,  <code>1.1.18-0</code>,  <code>1.1.10-0</code>,  <code>1.1.8-0</code>,  </span></summary>
      

      ``1.2.8-1``,  ``1.2.8-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.18-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.3.10-1``,  ``0.3.10-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on deprecated: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on loguru: 
   :depends on mashumaro: 
   :depends on pybind11: ``>=2.10.4``
   :depends on pysimdjson: ``>=6.0.2``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rich: 
   :depends on typer: 
   :depends on urllib3: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install pxblat

to add into an existing workspace instead, run::

    pixi add pxblat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pxblat

Alternatively, to install into a new environment, run::

    conda create -n envname pxblat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pxblat:<tag>

(see `pxblat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pxblat| image:: https://img.shields.io/conda/dn/bioconda/pxblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pxblat
   :alt:   (downloads)
.. |docker_pxblat| image:: https://quay.io/repository/biocontainers/pxblat/status
   :target: https://quay.io/repository/biocontainers/pxblat
.. _`pxblat/tags`: https://quay.io/repository/biocontainers/pxblat?tab=tags


.. raw:: html

    <script>
        var package = "pxblat";
        var versions = ["1.2.8","1.2.8","1.2.1","1.2.1","1.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pxblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pxblat/README.html