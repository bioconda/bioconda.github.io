:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rattle'
.. highlight: bash

rattle
======

.. conda:recipe:: rattle
   :replaces_section_title:
   :noindex:

   Reference\-free reconstruction and quantification of transcriptomes from long\-read sequencing.

   :homepage: https://github.com/comprna/RATTLE
   :documentation: https://github.com/comprna/RATTLE/blob/v1.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rattle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rattle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rattle/meta.yaml>`_
   :links: biotools: :biotools:`rattle`, doi: :doi:`10.1186/s13059-022-02715-w`

   


.. conda:package:: rattle

   |downloads_rattle| |docker_rattle|

   :versions:
      
      

      ``1.0-0``

      

   
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

    pixi global install rattle

to add into an existing workspace instead, run::

    pixi add rattle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rattle

Alternatively, to install into a new environment, run::

    conda create -n envname rattle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rattle:<tag>

(see `rattle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rattle| image:: https://img.shields.io/conda/dn/bioconda/rattle.svg?style=flat
   :target: https://anaconda.org/bioconda/rattle
   :alt:   (downloads)
.. |docker_rattle| image:: https://quay.io/repository/biocontainers/rattle/status
   :target: https://quay.io/repository/biocontainers/rattle
.. _`rattle/tags`: https://quay.io/repository/biocontainers/rattle?tab=tags


.. raw:: html

    <script>
        var package = "rattle";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rattle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rattle/README.html