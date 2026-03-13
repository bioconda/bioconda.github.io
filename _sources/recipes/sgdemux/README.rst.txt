:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sgdemux'
.. highlight: bash

sgdemux
=======

.. conda:recipe:: sgdemux
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing sequencing data generated on Singular Genomics\' sequencing instruments.

   :homepage: https://github.com/Singular-Genomics/singular-demux
   :license: Other / For Singular G4™ Sequencing Platform only
   :recipe: /`sgdemux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgdemux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgdemux/meta.yaml>`_

   


.. conda:package:: sgdemux

   |downloads_sgdemux| |docker_sgdemux|

   :versions:
      
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
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

    pixi global install sgdemux

to add into an existing workspace instead, run::

    pixi add sgdemux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sgdemux

Alternatively, to install into a new environment, run::

    conda create -n envname sgdemux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sgdemux:<tag>

(see `sgdemux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sgdemux| image:: https://img.shields.io/conda/dn/bioconda/sgdemux.svg?style=flat
   :target: https://anaconda.org/bioconda/sgdemux
   :alt:   (downloads)
.. |docker_sgdemux| image:: https://quay.io/repository/biocontainers/sgdemux/status
   :target: https://quay.io/repository/biocontainers/sgdemux
.. _`sgdemux/tags`: https://quay.io/repository/biocontainers/sgdemux?tab=tags


.. raw:: html

    <script>
        var package = "sgdemux";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sgdemux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sgdemux/README.html