:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'racon'
.. highlight: bash

racon
=====

.. conda:recipe:: racon
   :replaces_section_title:
   :noindex:

   Ultrafast consensus module for raw de novo genome assembly of long uncorrected reads.

   :homepage: https://github.com/lbcb-sci/racon
   :documentation: https://github.com/lbcb-sci/racon/blob/1.5.0/README.md
   
   :license: MIT / MIT
   :recipe: /`racon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon/meta.yaml>`_
   :links: biotools: :biotools:`Racon`, usegalaxy-eu: :usegalaxy-eu:`racon`

   


.. conda:package:: racon

   |downloads_racon| |docker_racon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-8</code>,  <code>1.5.0-7</code>,  <code>1.5.0-6</code>,  <code>1.5.0-5</code>,  <code>1.5.0-4</code>,  <code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.5.0-8``,  ``1.5.0-7``,  ``1.5.0-6``,  ``1.5.0-5``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.20-2``,  ``1.4.20-1``,  ``1.4.20-0``,  ``1.4.13-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.7-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.3-1``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.1-1``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: 

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

    pixi global install racon

to add into an existing workspace instead, run::

    pixi add racon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install racon

Alternatively, to install into a new environment, run::

    conda create -n envname racon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/racon:<tag>

(see `racon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_racon| image:: https://img.shields.io/conda/dn/bioconda/racon.svg?style=flat
   :target: https://anaconda.org/bioconda/racon
   :alt:   (downloads)
.. |docker_racon| image:: https://quay.io/repository/biocontainers/racon/status
   :target: https://quay.io/repository/biocontainers/racon
.. _`racon/tags`: https://quay.io/repository/biocontainers/racon?tab=tags


.. raw:: html

    <script>
        var package = "racon";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/racon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/racon/README.html