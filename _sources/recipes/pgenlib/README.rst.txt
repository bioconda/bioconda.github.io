:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgenlib'
.. highlight: bash

pgenlib
=======

.. conda:recipe:: pgenlib
   :replaces_section_title:
   :noindex:

   Python wrapper for pgenlib\'s basic reader and writer.

   :homepage: https://github.com/chrchang/plink-ng
   :documentation: https://github.com/chrchang/plink-ng/blob/master/2.0/Python/README.md
   
   :developer docs: https://github.com/chrchang/plink-ng/tree/master/2.0/Python
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`pgenlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgenlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgenlib/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0047-8`

   


.. conda:package:: pgenlib

   |downloads_pgenlib| |docker_pgenlib|

   :versions:
      
      

      ``0.93.0-0``,  ``0.92.1-0``,  ``0.91.0-1``,  ``0.91.0-0``,  ``0.90.2-1``,  ``0.90.2-0``,  ``0.90.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.19.3``
   :depends on numpy: ``>=1.21,<3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: ``<81``

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

    pixi global install pgenlib

to add into an existing workspace instead, run::

    pixi add pgenlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgenlib

Alternatively, to install into a new environment, run::

    conda create -n envname pgenlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgenlib:<tag>

(see `pgenlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgenlib| image:: https://img.shields.io/conda/dn/bioconda/pgenlib.svg?style=flat
   :target: https://anaconda.org/bioconda/pgenlib
   :alt:   (downloads)
.. |docker_pgenlib| image:: https://quay.io/repository/biocontainers/pgenlib/status
   :target: https://quay.io/repository/biocontainers/pgenlib
.. _`pgenlib/tags`: https://quay.io/repository/biocontainers/pgenlib?tab=tags


.. raw:: html

    <script>
        var package = "pgenlib";
        var versions = ["0.93.0","0.92.1","0.91.0","0.91.0","0.90.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgenlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgenlib/README.html