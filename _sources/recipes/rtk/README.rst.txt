:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtk'
.. highlight: bash

rtk
===

.. conda:recipe:: rtk
   :replaces_section_title:
   :noindex:

   rtk \- rarefaction toolkit for OTU tables.

   :homepage: https://github.com/hildebra/Rarefaction
   :license: GPL-2.0-or-later
   :recipe: /`rtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtk/meta.yaml>`_

   


.. conda:package:: rtk

   |downloads_rtk| |docker_rtk|

   :versions:
      
      

      ``0.93.2-6``,  ``0.93.2-5``,  ``0.93.2-4``,  ``0.93.2-3``,  ``0.93.2-2``,  ``0.93.2-1``,  ``0.93.2-0``,  ``0.93.1-0``

      

   
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

    pixi global install rtk

to add into an existing workspace instead, run::

    pixi add rtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rtk

Alternatively, to install into a new environment, run::

    conda create -n envname rtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rtk:<tag>

(see `rtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rtk| image:: https://img.shields.io/conda/dn/bioconda/rtk.svg?style=flat
   :target: https://anaconda.org/bioconda/rtk
   :alt:   (downloads)
.. |docker_rtk| image:: https://quay.io/repository/biocontainers/rtk/status
   :target: https://quay.io/repository/biocontainers/rtk
.. _`rtk/tags`: https://quay.io/repository/biocontainers/rtk?tab=tags


.. raw:: html

    <script>
        var package = "rtk";
        var versions = ["0.93.2","0.93.2","0.93.2","0.93.2","0.93.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtk/README.html