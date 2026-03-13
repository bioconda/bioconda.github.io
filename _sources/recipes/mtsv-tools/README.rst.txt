:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtsv-tools'
.. highlight: bash

mtsv-tools
==========

.. conda:recipe:: mtsv-tools
   :replaces_section_title:
   :noindex:

   mtsv\_tools contains core tools for alignment\-based metagenomic\/metatranscriptomic assignment


   :homepage: https://github.com/FofanovLab/mtsv_tools
   :license: MIT / MIT
   :recipe: /`mtsv-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv-tools/meta.yaml>`_

   


.. conda:package:: mtsv-tools

   |downloads_mtsv-tools| |docker_mtsv-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.2-4</code>,  <code>2.0.2-3</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``

   :additional platforms:
      

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

    pixi global install mtsv-tools

to add into an existing workspace instead, run::

    pixi add mtsv-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mtsv-tools

Alternatively, to install into a new environment, run::

    conda create -n envname mtsv-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mtsv-tools:<tag>

(see `mtsv-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mtsv-tools| image:: https://img.shields.io/conda/dn/bioconda/mtsv-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/mtsv-tools
   :alt:   (downloads)
.. |docker_mtsv-tools| image:: https://quay.io/repository/biocontainers/mtsv-tools/status
   :target: https://quay.io/repository/biocontainers/mtsv-tools
.. _`mtsv-tools/tags`: https://quay.io/repository/biocontainers/mtsv-tools?tab=tags


.. raw:: html

    <script>
        var package = "mtsv-tools";
        var versions = ["2.1.0","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtsv-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtsv-tools/README.html