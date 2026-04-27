:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-mdbg'
.. highlight: bash

rust-mdbg
=========

.. conda:recipe:: rust-mdbg
   :replaces_section_title:
   :noindex:

   An ultra\-fast minimizer\-space de Bruijn graph \(mdBG\) implementation\, geared towards the assembly of long and accurate reads.


   :homepage: https://github.com/ekimb/rust-mdbg
   :license: MIT
   :recipe: /`rust-mdbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-mdbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-mdbg/meta.yaml>`_

   


.. conda:package:: rust-mdbg

   |downloads_rust-mdbg| |docker_rust-mdbg|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install rust-mdbg

to add into an existing workspace instead, run::

    pixi add rust-mdbg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rust-mdbg

Alternatively, to install into a new environment, run::

    conda create -n envname rust-mdbg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rust-mdbg:<tag>

(see `rust-mdbg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rust-mdbg| image:: https://img.shields.io/conda/dn/bioconda/rust-mdbg.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-mdbg
   :alt:   (downloads)
.. |docker_rust-mdbg| image:: https://quay.io/repository/biocontainers/rust-mdbg/status
   :target: https://quay.io/repository/biocontainers/rust-mdbg
.. _`rust-mdbg/tags`: https://quay.io/repository/biocontainers/rust-mdbg?tab=tags


.. raw:: html

    <script>
        var package = "rust-mdbg";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-mdbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-mdbg/README.html