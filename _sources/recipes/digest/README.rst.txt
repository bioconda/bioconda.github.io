:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digest'
.. highlight: bash

digest
======

.. conda:recipe:: digest
   :replaces_section_title:
   :noindex:

   Fast\, multi\-use k\-mer sub\-sampling library

   :homepage: https://github.com/VeryAmazed/digest
   :license: MIT
   :recipe: /`digest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digest/meta.yaml>`_

   A C\+\+ library that supports various sub\-sampling schemes for k\-mers in DNA sequences.
   Includes Python bindings that allow users to run functions from the C\+\+ library in Python.



.. conda:package:: digest

   |downloads_digest| |docker_digest|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on pybind11: 
   :depends on python: ``>=3.10,<3.11.0a0``
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

    pixi global install digest

to add into an existing workspace instead, run::

    pixi add digest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install digest

Alternatively, to install into a new environment, run::

    conda create -n envname digest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/digest:<tag>

(see `digest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_digest| image:: https://img.shields.io/conda/dn/bioconda/digest.svg?style=flat
   :target: https://anaconda.org/bioconda/digest
   :alt:   (downloads)
.. |docker_digest| image:: https://quay.io/repository/biocontainers/digest/status
   :target: https://quay.io/repository/biocontainers/digest
.. _`digest/tags`: https://quay.io/repository/biocontainers/digest?tab=tags


.. raw:: html

    <script>
        var package = "digest";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digest/README.html