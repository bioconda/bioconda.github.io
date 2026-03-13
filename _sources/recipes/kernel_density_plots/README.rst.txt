:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kernel_density_plots'
.. highlight: bash

kernel_density_plots
====================

.. conda:recipe:: kernel_density_plots
   :replaces_section_title:
   :noindex:

   Python tool for generating SNP density and closest neighbor plots from aligned SNP FASTA files.

   :homepage: https://github.com/kapurlab/kernel_density_plots
   :license: GPL3
   :recipe: /`kernel_density_plots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kernel_density_plots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kernel_density_plots/meta.yaml>`_

   Python implementation of the Kernel Density Plot Tool that generates 
   SNP density and closest neighbor plots from aligned SNP FASTA files.



.. conda:package:: kernel_density_plots

   |downloads_kernel_density_plots| |docker_kernel_density_plots|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on matplotlib-base: ``>=3.7``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.10``
   :depends on seaborn: ``>=0.12``

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

    pixi global install kernel_density_plots

to add into an existing workspace instead, run::

    pixi add kernel_density_plots

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kernel_density_plots

Alternatively, to install into a new environment, run::

    conda create -n envname kernel_density_plots

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kernel_density_plots:<tag>

(see `kernel_density_plots/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kernel_density_plots| image:: https://img.shields.io/conda/dn/bioconda/kernel_density_plots.svg?style=flat
   :target: https://anaconda.org/bioconda/kernel_density_plots
   :alt:   (downloads)
.. |docker_kernel_density_plots| image:: https://quay.io/repository/biocontainers/kernel_density_plots/status
   :target: https://quay.io/repository/biocontainers/kernel_density_plots
.. _`kernel_density_plots/tags`: https://quay.io/repository/biocontainers/kernel_density_plots?tab=tags


.. raw:: html

    <script>
        var package = "kernel_density_plots";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kernel_density_plots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kernel_density_plots/README.html