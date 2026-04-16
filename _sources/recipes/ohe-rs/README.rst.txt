:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ohe-rs'
.. highlight: bash

ohe-rs
======

.. conda:recipe:: ohe-rs
   :replaces_section_title:
   :noindex:

   Ultra\-fast one\-hot encoding for bioinformatics and ML\, powered by Rust.

   :homepage: https://github.com/genpat-it/ohe-rs
   :license: MIT / MIT
   :recipe: /`ohe-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ohe-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ohe-rs/meta.yaml>`_

   ohe\-rs is an ultra\-fast one\-hot encoding library with Python bindings\,
   built in Rust for maximum performance. Designed for cgMLST allele profiles
   and large\-scale categorical data in bioinformatics pipelines.



.. conda:package:: ohe-rs

   |downloads_ohe-rs| |docker_ohe-rs|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on numpy: ``>=1.20``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.7``

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

    pixi global install ohe-rs

to add into an existing workspace instead, run::

    pixi add ohe-rs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ohe-rs

Alternatively, to install into a new environment, run::

    conda create -n envname ohe-rs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ohe-rs:<tag>

(see `ohe-rs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ohe-rs| image:: https://img.shields.io/conda/dn/bioconda/ohe-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/ohe-rs
   :alt:   (downloads)
.. |docker_ohe-rs| image:: https://quay.io/repository/biocontainers/ohe-rs/status
   :target: https://quay.io/repository/biocontainers/ohe-rs
.. _`ohe-rs/tags`: https://quay.io/repository/biocontainers/ohe-rs?tab=tags


.. raw:: html

    <script>
        var package = "ohe-rs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ohe-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ohe-rs/README.html