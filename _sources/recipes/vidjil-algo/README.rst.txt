:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vidjil-algo'
.. highlight: bash

vidjil-algo
===========

.. conda:recipe:: vidjil-algo
   :replaces_section_title:
   :noindex:

   Vidjil is an open\-source platform for the analysis of high\-throughput sequencing data from lymphocytes.

   :homepage: https://gitlab.inria.fr/vidjil/vidjil
   :documentation: https://www.vidjil.org/doc
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`vidjil-algo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vidjil-algo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vidjil-algo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2164-15-409`, doi: :doi:`10.1371/journal.pone.0166126`

   


.. conda:package:: vidjil-algo

   |downloads_vidjil-algo| |docker_vidjil-algo|

   :versions:
      
      

      ``2025.02-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install vidjil-algo

to add into an existing workspace instead, run::

    pixi add vidjil-algo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vidjil-algo

Alternatively, to install into a new environment, run::

    conda create -n envname vidjil-algo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vidjil-algo:<tag>

(see `vidjil-algo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vidjil-algo| image:: https://img.shields.io/conda/dn/bioconda/vidjil-algo.svg?style=flat
   :target: https://anaconda.org/bioconda/vidjil-algo
   :alt:   (downloads)
.. |docker_vidjil-algo| image:: https://quay.io/repository/biocontainers/vidjil-algo/status
   :target: https://quay.io/repository/biocontainers/vidjil-algo
.. _`vidjil-algo/tags`: https://quay.io/repository/biocontainers/vidjil-algo?tab=tags


.. raw:: html

    <script>
        var package = "vidjil-algo";
        var versions = ["2025.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vidjil-algo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vidjil-algo/README.html