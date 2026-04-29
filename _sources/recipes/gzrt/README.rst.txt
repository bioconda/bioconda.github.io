:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gzrt'
.. highlight: bash

gzrt
====

.. conda:recipe:: gzrt
   :replaces_section_title:
   :noindex:

   Unofficial build of the gzip Recovery Toolkit aka gzrecover.

   :homepage: https://www.urbanophile.com/arenn/hacking/gzrt
   :documentation: https://github.com/arenn/gzrt/blob/v0.9.1/README
   
   :developer docs: https://github.com/arenn/gzrt
   :license: GPL / GPL-2.0-only
   :recipe: /`gzrt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gzrt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gzrt/meta.yaml>`_

   gzrecover is a program that will attempt to extract any readable data
   out of a gzip file that has been corrupted.



.. conda:package:: gzrt

   |downloads_gzrt| |docker_gzrt|

   :versions:
      
      

      ``0.9.1-1``,  ``0.9.1-0``,  ``0.8-1``,  ``0.8-0``

      

   
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

    pixi global install gzrt

to add into an existing workspace instead, run::

    pixi add gzrt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gzrt

Alternatively, to install into a new environment, run::

    conda create -n envname gzrt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gzrt:<tag>

(see `gzrt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gzrt| image:: https://img.shields.io/conda/dn/bioconda/gzrt.svg?style=flat
   :target: https://anaconda.org/bioconda/gzrt
   :alt:   (downloads)
.. |docker_gzrt| image:: https://quay.io/repository/biocontainers/gzrt/status
   :target: https://quay.io/repository/biocontainers/gzrt
.. _`gzrt/tags`: https://quay.io/repository/biocontainers/gzrt?tab=tags


.. raw:: html

    <script>
        var package = "gzrt";
        var versions = ["0.9.1","0.9.1","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gzrt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gzrt/README.html