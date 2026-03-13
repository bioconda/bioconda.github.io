:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pipette'
.. highlight: bash

r-pipette
=========

.. conda:recipe:: r-pipette
   :replaces_section_title:
   :noindex:

   Pipette biological data in and out of R.

   :homepage: https://r.acidgenomics.com/packages/pipette/
   :developer docs: https://github.com/acidgenomics/r-pipette
   :license: GPL / AGPL-3.0
   :recipe: /`r-pipette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette/meta.yaml>`_

   


.. conda:package:: r-pipette

   |downloads_r-pipette| |docker_r-pipette|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.3-0</code>,  <code>0.15.2-2</code>,  <code>0.15.2-1</code>,  <code>0.15.2-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  </span></summary>
      

      ``0.15.3-0``,  ``0.15.2-2``,  ``0.15.2-1``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.13.0-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.10-1``,  ``0.10.10-0``,  ``0.10.9-1``,  ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.5-0``,  ``0.10.4-1``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.15-2``,  ``0.5.15-1``,  ``0.5.15-0``,  ``0.5.14-2``,  ``0.5.14-0``,  ``0.4.22-1``,  ``0.4.22-0``,  ``0.4.20-0``,  ``0.4.19-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=2.8.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-biostrings: ``>=2.68.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-maftools: ``>=2.16.0``
   :depends on bioconductor-rsamtools: ``>=2.16.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidbase: ``>=0.7.2``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidgenerics: ``>=0.7.5``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-baseset: ``>=0.9.0``
   :depends on r-data.table: ``>=1.14.8``
   :depends on r-digest: ``>=0.6.33``
   :depends on r-goalie: ``>=0.7.7``
   :depends on r-httr2: ``>=0.2.3``
   :depends on r-jsonlite: ``>=1.8.8``
   :depends on r-matrix: ``>=1.6.4``
   :depends on r-ontologyindex: ``>=2.11``
   :depends on r-pzfx: ``>=0.3.0``
   :depends on r-readr: ``>=2.1.4``
   :depends on r-readxl: ``>=1.4.3``
   :depends on r-rio: ``>=1.0.1``
   :depends on r-syntactic: ``>=0.7.1``
   :depends on r-tibble: ``>=3.2.1``
   :depends on r-yaml: ``>=2.3.8``

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

    pixi global install r-pipette

to add into an existing workspace instead, run::

    pixi add r-pipette

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pipette

Alternatively, to install into a new environment, run::

    conda create -n envname r-pipette

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pipette:<tag>

(see `r-pipette/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pipette| image:: https://img.shields.io/conda/dn/bioconda/r-pipette.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pipette
   :alt:   (downloads)
.. |docker_r-pipette| image:: https://quay.io/repository/biocontainers/r-pipette/status
   :target: https://quay.io/repository/biocontainers/r-pipette
.. _`r-pipette/tags`: https://quay.io/repository/biocontainers/r-pipette?tab=tags


.. raw:: html

    <script>
        var package = "r-pipette";
        var versions = ["0.15.3","0.15.2","0.15.2","0.15.2","0.15.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pipette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pipette/README.html