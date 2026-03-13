:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unimap'
.. highlight: bash

unimap
======

.. conda:recipe:: unimap
   :replaces_section_title:
   :noindex:

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment.

   :homepage: https://github.com/lh3/unimap
   :license: MIT / MIT
   :recipe: /`unimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap/meta.yaml>`_

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment. It integrates the minigraph chaining algorithm and can align through long INDELs \(up to 100kb by default\) much faster than minimap2. Unimap is a better fit for resolving segmental duplications and is recommended over minimap2 for alignment between high\-quality assemblies.

   Unimap does not replace minimap2 for other types of alignment. It drops the support of multi\-part index and short\-read mapping. Its long\-read alignment is different from minimap2 but is not necessarily better. Unimap is more of a specialized minimap2 at the moment.



.. conda:package:: unimap

   |downloads_unimap| |docker_unimap|

   :versions:
      
      

      ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install unimap

to add into an existing workspace instead, run::

    pixi add unimap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unimap

Alternatively, to install into a new environment, run::

    conda create -n envname unimap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unimap:<tag>

(see `unimap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unimap| image:: https://img.shields.io/conda/dn/bioconda/unimap.svg?style=flat
   :target: https://anaconda.org/bioconda/unimap
   :alt:   (downloads)
.. |docker_unimap| image:: https://quay.io/repository/biocontainers/unimap/status
   :target: https://quay.io/repository/biocontainers/unimap
.. _`unimap/tags`: https://quay.io/repository/biocontainers/unimap?tab=tags


.. raw:: html

    <script>
        var package = "unimap";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unimap/README.html