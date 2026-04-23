:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mogs'
.. highlight: bash

mogs
====

.. conda:recipe:: mogs
   :replaces_section_title:
   :noindex:

   MOGS \(Metagenome Ocurrence\-based Genetic Screening\)

   :homepage: https://gitlab.pasteur.fr/statistical-genetics/MOGS
   :license: AGPL / AGPL-3.0-only
   :recipe: /`mogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mogs/meta.yaml>`_

   This tool is designed to run a linear regression on bacterial data\, similar to a GWAS in human genetics.


.. conda:package:: mogs

   |downloads_mogs| |docker_mogs|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends on fmt: ``>=12.0.0,<12.1.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcxx: ``>=19``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on spdlog: ``>=1.16.0,<1.17.0a0``

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

    pixi global install mogs

to add into an existing workspace instead, run::

    pixi add mogs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mogs

Alternatively, to install into a new environment, run::

    conda create -n envname mogs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mogs:<tag>

(see `mogs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mogs| image:: https://img.shields.io/conda/dn/bioconda/mogs.svg?style=flat
   :target: https://anaconda.org/bioconda/mogs
   :alt:   (downloads)
.. |docker_mogs| image:: https://quay.io/repository/biocontainers/mogs/status
   :target: https://quay.io/repository/biocontainers/mogs
.. _`mogs/tags`: https://quay.io/repository/biocontainers/mogs?tab=tags


.. raw:: html

    <script>
        var package = "mogs";
        var versions = ["0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mogs/README.html