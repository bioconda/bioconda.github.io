:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybdei'
.. highlight: bash

pybdei
======

.. conda:recipe:: pybdei
   :replaces_section_title:
   :noindex:

   Maximum likelihood estimation of Birth\-Death Exposed\-Infectious \(BDEI\) epidemiological model parameters from phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/bdei
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`pybdei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybdei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybdei/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syad059`

   PyBDEI provides tools for fast and accurate maximum likelihood estimation
   of Birth\-Death Exposed\-Infectious \(BDEI\) epidemiological model parameters
   from phylogenetic trees.



.. conda:package:: pybdei

   |downloads_pybdei| |docker_pybdei|

   :versions:
      
      

      ``0.13-1``,  ``0.13-0``

      

   
   :depends on ete3: ``>=3.1.3``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on nlopt: ``>=2.8.0,<2.9.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.24.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.11.1``
   :depends on six: ``>=1.16.0``
   :depends on treesimulator: ``>=0.1.22``

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

    pixi global install pybdei

to add into an existing workspace instead, run::

    pixi add pybdei

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybdei

Alternatively, to install into a new environment, run::

    conda create -n envname pybdei

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybdei:<tag>

(see `pybdei/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybdei| image:: https://img.shields.io/conda/dn/bioconda/pybdei.svg?style=flat
   :target: https://anaconda.org/bioconda/pybdei
   :alt:   (downloads)
.. |docker_pybdei| image:: https://quay.io/repository/biocontainers/pybdei/status
   :target: https://quay.io/repository/biocontainers/pybdei
.. _`pybdei/tags`: https://quay.io/repository/biocontainers/pybdei?tab=tags


.. raw:: html

    <script>
        var package = "pybdei";
        var versions = ["0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybdei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybdei/README.html