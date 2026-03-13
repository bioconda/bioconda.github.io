:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reduce'
.. highlight: bash

reduce
======

.. conda:recipe:: reduce
   :replaces_section_title:
   :noindex:

   Reduce \- tool for adding and correcting hydrogens in PDB files.

   :homepage: https://github.com/rlabduke/reduce
   :documentation: https://github.com/rlabduke/reduce/blob/v4.15/README.md
   
   :license: BSD / BSD-4-Clause-UC
   :recipe: /`reduce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reduce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reduce/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.1998.2401`

   Reduce is a tool for adding and correcting hydrogens in PDB files.
   It is often used in computational biology and molecular modeling to
   prepare protein structures for further analysis or simulations.



.. conda:package:: reduce

   |downloads_reduce| |docker_reduce|

   :versions:
      
      

      ``4.15-4``,  ``4.15-3``,  ``4.15-2``,  ``4.15-1``,  ``4.15-0``,  ``4.14-3``,  ``4.14-2``,  ``4.14-1``,  ``4.14-0``

      

   
   :depends on libboost-python: ``>=1.86.0,<1.87.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install reduce

to add into an existing workspace instead, run::

    pixi add reduce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reduce

Alternatively, to install into a new environment, run::

    conda create -n envname reduce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reduce:<tag>

(see `reduce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reduce| image:: https://img.shields.io/conda/dn/bioconda/reduce.svg?style=flat
   :target: https://anaconda.org/bioconda/reduce
   :alt:   (downloads)
.. |docker_reduce| image:: https://quay.io/repository/biocontainers/reduce/status
   :target: https://quay.io/repository/biocontainers/reduce
.. _`reduce/tags`: https://quay.io/repository/biocontainers/reduce?tab=tags


.. raw:: html

    <script>
        var package = "reduce";
        var versions = ["4.15","4.15","4.15","4.15","4.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reduce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reduce/README.html