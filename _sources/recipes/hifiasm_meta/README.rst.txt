:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifiasm_meta'
.. highlight: bash

hifiasm_meta
============

.. conda:recipe:: hifiasm_meta
   :replaces_section_title:
   :noindex:

   Metagenome assembler for Hifi reads\, based on hifiasm.

   :homepage: https://github.com/xfengnefx/hifiasm-meta
   :license: MIT / MIT
   :recipe: /`hifiasm_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta/meta.yaml>`_

   


.. conda:package:: hifiasm_meta

   |downloads_hifiasm_meta| |docker_hifiasm_meta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>hamtv0.3.5-0</code>,  <code>hamtv0.3.4-0</code>,  <code>hamtv0.3.3-0</code>,  <code>hamtv0.3.2-2</code>,  <code>hamtv0.3.2-1</code>,  <code>hamtv0.3.2-0</code>,  <code>hamtv0.3.1-2</code>,  <code>hamtv0.3.1-1</code>,  <code>hamtv0.3.1-0</code>,  </span></summary>
      

      ``hamtv0.3.5-0``,  ``hamtv0.3.4-0``,  ``hamtv0.3.3-0``,  ``hamtv0.3.2-2``,  ``hamtv0.3.2-1``,  ``hamtv0.3.2-0``,  ``hamtv0.3.1-2``,  ``hamtv0.3.1-1``,  ``hamtv0.3.1-0``,  ``hamtv0.3-1``,  ``hamtv0.3-0``,  ``hamtv0.2.2-1``,  ``hamtv0.2.2-0``,  ``hamtv0.2-0``,  ``hamtv0.1-1``,  ``hamtv0.1-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install hifiasm_meta

to add into an existing workspace instead, run::

    pixi add hifiasm_meta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hifiasm_meta

Alternatively, to install into a new environment, run::

    conda create -n envname hifiasm_meta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hifiasm_meta:<tag>

(see `hifiasm_meta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hifiasm_meta| image:: https://img.shields.io/conda/dn/bioconda/hifiasm_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/hifiasm_meta
   :alt:   (downloads)
.. |docker_hifiasm_meta| image:: https://quay.io/repository/biocontainers/hifiasm_meta/status
   :target: https://quay.io/repository/biocontainers/hifiasm_meta
.. _`hifiasm_meta/tags`: https://quay.io/repository/biocontainers/hifiasm_meta?tab=tags


.. raw:: html

    <script>
        var package = "hifiasm_meta";
        var versions = ["hamtv0.3.5","hamtv0.3.4","hamtv0.3.3","hamtv0.3.2","hamtv0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifiasm_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifiasm_meta/README.html