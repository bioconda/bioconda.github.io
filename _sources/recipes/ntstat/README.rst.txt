:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntstat'
.. highlight: bash

ntstat
======

.. conda:recipe:: ntstat
   :replaces_section_title:
   :noindex:

   a toolkit for statistical analysis of k\-mer frequency and depth

   :homepage: https://github.com/bcgsc/ntStat
   :license: GPL-3.0-or-later
   :recipe: /`ntstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntstat/meta.yaml>`_

   


.. conda:package:: ntstat

   |downloads_ntstat| |docker_ntstat|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on btllib: ``>=1.7.2``
   :depends on btllib: ``>=1.7.3,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on ntcard: 
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on tabulate: 

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

    pixi global install ntstat

to add into an existing workspace instead, run::

    pixi add ntstat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntstat

Alternatively, to install into a new environment, run::

    conda create -n envname ntstat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntstat:<tag>

(see `ntstat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntstat| image:: https://img.shields.io/conda/dn/bioconda/ntstat.svg?style=flat
   :target: https://anaconda.org/bioconda/ntstat
   :alt:   (downloads)
.. |docker_ntstat| image:: https://quay.io/repository/biocontainers/ntstat/status
   :target: https://quay.io/repository/biocontainers/ntstat
.. _`ntstat/tags`: https://quay.io/repository/biocontainers/ntstat?tab=tags


.. raw:: html

    <script>
        var package = "ntstat";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntstat/README.html