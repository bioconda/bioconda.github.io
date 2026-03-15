:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strangepg'
.. highlight: bash

strangepg
=========

.. conda:recipe:: strangepg
   :replaces_section_title:
   :noindex:

   Strange pangenome\-scale interactive graph visualizer

   :homepage: https://github.com/qwx9/strangepg
   :license: MIT / MIT
   :recipe: /`strangepg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strangepg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strangepg/meta.yaml>`_

   


.. conda:package:: strangepg

   |downloads_strangepg| |docker_strangepg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-0</code>,  <code>0.9.3.1-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.20-0</code>,  <code>0.8.19.3-0</code>,  <code>0.8.18.1-0</code>,  <code>0.8.17-0</code>,  </span></summary>
      

      ``0.9.4-0``,  ``0.9.3.1-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.20-0``,  ``0.8.19.3-0``,  ``0.8.18.1-0``,  ``0.8.17-0``,  ``0.8.16-0``,  ``0.8.15-0``,  ``0.8.14-0``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libegl: ``>=1.7.0,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgles: ``>=1.7.0,<2.0a0``
   :depends on libxcb: 
   :depends on xorg-libx11: ``>=1.8.12,<2.0a0``
   :depends on xorg-libxau: 
   :depends on xorg-libxcursor: ``>=1.2.3,<2.0a0``
   :depends on xorg-libxdmcp: 
   :depends on xorg-libxext: 
   :depends on xorg-libxfixes: 
   :depends on xorg-libxi: ``>=1.8.2,<2.0a0``
   :depends on xorg-libxrandr: 

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

    pixi global install strangepg

to add into an existing workspace instead, run::

    pixi add strangepg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strangepg

Alternatively, to install into a new environment, run::

    conda create -n envname strangepg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strangepg:<tag>

(see `strangepg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strangepg| image:: https://img.shields.io/conda/dn/bioconda/strangepg.svg?style=flat
   :target: https://anaconda.org/bioconda/strangepg
   :alt:   (downloads)
.. |docker_strangepg| image:: https://quay.io/repository/biocontainers/strangepg/status
   :target: https://quay.io/repository/biocontainers/strangepg
.. _`strangepg/tags`: https://quay.io/repository/biocontainers/strangepg?tab=tags


.. raw:: html

    <script>
        var package = "strangepg";
        var versions = ["0.9.4","0.9.3.1","0.9.2","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strangepg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strangepg/README.html