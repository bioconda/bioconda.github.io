:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtg-tools'
.. highlight: bash

rtg-tools
=========

.. conda:recipe:: rtg-tools
   :replaces_section_title:
   :noindex:

   RealTimeGenomics Tools \-\- Utilities for accurate VCF comparison and manipulation.

   :homepage: https://github.com/RealTimeGenomics/rtg-tools
   :documentation: https://realtimegenomics.github.io/rtg-tools/index.html
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rtg-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools/meta.yaml>`_
   :links: biotools: :biotools:`rtg_core`

   


.. conda:package:: rtg-tools

   |downloads_rtg-tools| |docker_rtg-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13-0</code>,  <code>3.12.1-1</code>,  <code>3.12.1-0</code>,  <code>3.12-1</code>,  <code>3.12-0</code>,  <code>3.11-0</code>,  <code>3.10.1-0</code>,  <code>3.10-0</code>,  <code>3.9.1-1</code>,  </span></summary>
      

      ``3.13-0``,  ``3.12.1-1``,  ``3.12.1-0``,  ``3.12-1``,  ``3.12-0``,  ``3.11-0``,  ``3.10.1-0``,  ``3.10-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9-0``,  ``3.8.4-0``,  ``3.8.2-0``,  ``3.7.1-0``,  ``3.6-1``,  ``3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on fontconfig: 
   :depends on openjdk: 
   :depends on zlib: 

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

    pixi global install rtg-tools

to add into an existing workspace instead, run::

    pixi add rtg-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rtg-tools

Alternatively, to install into a new environment, run::

    conda create -n envname rtg-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rtg-tools:<tag>

(see `rtg-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rtg-tools| image:: https://img.shields.io/conda/dn/bioconda/rtg-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/rtg-tools
   :alt:   (downloads)
.. |docker_rtg-tools| image:: https://quay.io/repository/biocontainers/rtg-tools/status
   :target: https://quay.io/repository/biocontainers/rtg-tools
.. _`rtg-tools/tags`: https://quay.io/repository/biocontainers/rtg-tools?tab=tags


.. raw:: html

    <script>
        var package = "rtg-tools";
        var versions = ["3.13","3.12.1","3.12.1","3.12","3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtg-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtg-tools/README.html