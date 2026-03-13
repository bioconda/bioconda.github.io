:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libshorah'
.. highlight: bash

libshorah
=========

.. conda:recipe:: libshorah
   :replaces_section_title:
   :noindex:

   libshorah \- Short Reads Assembly into Haplotypes

   :homepage: https://github.com/LaraFuhrmann/VILOCA
   :license: GPL3 / GPLv3
   :recipe: /`libshorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libshorah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libshorah/meta.yaml>`_

   


.. conda:package:: libshorah

   |downloads_libshorah| |docker_libshorah|

   :versions:
      
      

      ``1.99.4-1``,  ``1.99.4-0``

      

   
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install libshorah

to add into an existing workspace instead, run::

    pixi add libshorah

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libshorah

Alternatively, to install into a new environment, run::

    conda create -n envname libshorah

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libshorah:<tag>

(see `libshorah/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libshorah| image:: https://img.shields.io/conda/dn/bioconda/libshorah.svg?style=flat
   :target: https://anaconda.org/bioconda/libshorah
   :alt:   (downloads)
.. |docker_libshorah| image:: https://quay.io/repository/biocontainers/libshorah/status
   :target: https://quay.io/repository/biocontainers/libshorah
.. _`libshorah/tags`: https://quay.io/repository/biocontainers/libshorah?tab=tags


.. raw:: html

    <script>
        var package = "libshorah";
        var versions = ["1.99.4","1.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libshorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libshorah/README.html