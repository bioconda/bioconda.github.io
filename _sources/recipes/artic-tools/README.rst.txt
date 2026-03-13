:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic-tools'
.. highlight: bash

artic-tools
===========

.. conda:recipe:: artic-tools
   :replaces_section_title:
   :noindex:

   A set of tools for working with the ARTIC bioinformatic pipeline.

   :homepage: https://github.com/will-rowe/artic-tools
   :license: MIT
   :recipe: /`artic-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools/meta.yaml>`_

   


.. conda:package:: artic-tools

   |downloads_artic-tools| |docker_artic-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-7</code>,  <code>0.3.1-6</code>,  <code>0.3.1-5</code>,  <code>0.3.1-4</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.3.1-7``,  ``0.3.1-6``,  ``0.3.1-5``,  ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.20,<1.24.0a0``
   :depends on libcurl: ``>=8.8.0,<9.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install artic-tools

to add into an existing workspace instead, run::

    pixi add artic-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install artic-tools

Alternatively, to install into a new environment, run::

    conda create -n envname artic-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/artic-tools:<tag>

(see `artic-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_artic-tools| image:: https://img.shields.io/conda/dn/bioconda/artic-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/artic-tools
   :alt:   (downloads)
.. |docker_artic-tools| image:: https://quay.io/repository/biocontainers/artic-tools/status
   :target: https://quay.io/repository/biocontainers/artic-tools
.. _`artic-tools/tags`: https://quay.io/repository/biocontainers/artic-tools?tab=tags


.. raw:: html

    <script>
        var package = "artic-tools";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic-tools/README.html