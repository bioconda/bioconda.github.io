:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goldrush'
.. highlight: bash

goldrush
========

.. conda:recipe:: goldrush
   :replaces_section_title:
   :noindex:

   Linear\-time de novo long read assembler\, from the Bioinformatics Technology Lab

   :homepage: https://github.com/bcgsc/goldrush
   :license: GPL-3.0
   :recipe: /`goldrush <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goldrush/meta.yaml>`_

   


.. conda:package:: goldrush

   |downloads_goldrush| |docker_goldrush|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-0</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  </span></summary>
      

      ``1.2.2-0``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bc: 
   :depends on btllib: ``>=1.6.2``
   :depends on btllib: ``>=1.7.3,<2.0a0``
   :depends on gperftools: 
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on make: 
   :depends on minimap2: ``>=2.17``
   :depends on ntlink: ``>=1.3.0``
   :depends on numpy: ``>=1.22.4``
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on snakemake: 
   :depends on tigmint: ``>=1.2.6``

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

    pixi global install goldrush

to add into an existing workspace instead, run::

    pixi add goldrush

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install goldrush

Alternatively, to install into a new environment, run::

    conda create -n envname goldrush

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/goldrush:<tag>

(see `goldrush/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_goldrush| image:: https://img.shields.io/conda/dn/bioconda/goldrush.svg?style=flat
   :target: https://anaconda.org/bioconda/goldrush
   :alt:   (downloads)
.. |docker_goldrush| image:: https://quay.io/repository/biocontainers/goldrush/status
   :target: https://quay.io/repository/biocontainers/goldrush
.. _`goldrush/tags`: https://quay.io/repository/biocontainers/goldrush?tab=tags


.. raw:: html

    <script>
        var package = "goldrush";
        var versions = ["1.2.2","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goldrush/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goldrush/README.html