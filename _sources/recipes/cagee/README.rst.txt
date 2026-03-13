:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cagee'
.. highlight: bash

cagee
=====

.. conda:recipe:: cagee
   :replaces_section_title:
   :noindex:

   Analyzes changes in gene expression in a way that accounts for phylogenetic history and provides a statistical foundation for evolutionary inferences

   :homepage: https://github.com/hahnlab/CAGEE
   :license: ECL
   :recipe: /`cagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee/meta.yaml>`_

   


.. conda:package:: cagee

   |downloads_cagee| |docker_cagee|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mkl: ``>=2020.4``
   :depends on zstd: ``>=1.5.6,<1.6.0a0``

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

    pixi global install cagee

to add into an existing workspace instead, run::

    pixi add cagee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cagee

Alternatively, to install into a new environment, run::

    conda create -n envname cagee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cagee:<tag>

(see `cagee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cagee| image:: https://img.shields.io/conda/dn/bioconda/cagee.svg?style=flat
   :target: https://anaconda.org/bioconda/cagee
   :alt:   (downloads)
.. |docker_cagee| image:: https://quay.io/repository/biocontainers/cagee/status
   :target: https://quay.io/repository/biocontainers/cagee
.. _`cagee/tags`: https://quay.io/repository/biocontainers/cagee?tab=tags


.. raw:: html

    <script>
        var package = "cagee";
        var versions = ["1.2","1.2","1.1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cagee/README.html