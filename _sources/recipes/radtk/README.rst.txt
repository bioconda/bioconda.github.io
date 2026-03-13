:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radtk'
.. highlight: bash

radtk
=====

.. conda:recipe:: radtk
   :replaces_section_title:
   :noindex:

   A collection of tools for working with RAD files.

   :homepage: https://github.com/COMBINE-lab/radtk
   :license: BSD-3-Clause
   :recipe: /`radtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radtk/meta.yaml>`_

   


.. conda:package:: radtk

   |downloads_radtk| |docker_radtk|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install radtk

to add into an existing workspace instead, run::

    pixi add radtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install radtk

Alternatively, to install into a new environment, run::

    conda create -n envname radtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/radtk:<tag>

(see `radtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_radtk| image:: https://img.shields.io/conda/dn/bioconda/radtk.svg?style=flat
   :target: https://anaconda.org/bioconda/radtk
   :alt:   (downloads)
.. |docker_radtk| image:: https://quay.io/repository/biocontainers/radtk/status
   :target: https://quay.io/repository/biocontainers/radtk
.. _`radtk/tags`: https://quay.io/repository/biocontainers/radtk?tab=tags


.. raw:: html

    <script>
        var package = "radtk";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radtk/README.html