:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgenomes'
.. highlight: bash

r-acidgenomes
=============

.. conda:recipe:: r-acidgenomes
   :replaces_section_title:
   :noindex:

   Toolkit for downloading and processing genome annotations.

   :homepage: https://r.acidgenomics.com/packages/acidgenomes/
   :developer docs: https://github.com/acidgenomics/r-acidgenomes
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgenomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenomes/meta.yaml>`_

   


.. conda:package:: r-acidgenomes

   |downloads_r-acidgenomes| |docker_r-acidgenomes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.3.0-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-2``,  ``0.2.12-1``,  ``0.2.12-0``,  ``0.2.11-2``,  ``0.2.11-0``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.62.0``
   :depends on bioconductor-annotationhub: ``>=3.8.0``
   :depends on bioconductor-biocfilecache: ``>=2.8.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-biomart: ``>=2.56.0``
   :depends on bioconductor-ensembldb: ``>=2.24.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0``
   :depends on bioconductor-genomicfeatures: ``>=1.52.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidgenerics: ``>=0.7.1``
   :depends on r-acidplyr: ``>=0.5.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.0``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-rvest: ``>=1.0.3``
   :depends on r-syntactic: ``>=0.7.0``
   :depends on r-withr: ``>=2.5.0``

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

    pixi global install r-acidgenomes

to add into an existing workspace instead, run::

    pixi add r-acidgenomes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidgenomes

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidgenomes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidgenomes:<tag>

(see `r-acidgenomes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidgenomes| image:: https://img.shields.io/conda/dn/bioconda/r-acidgenomes.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgenomes
   :alt:   (downloads)
.. |docker_r-acidgenomes| image:: https://quay.io/repository/biocontainers/r-acidgenomes/status
   :target: https://quay.io/repository/biocontainers/r-acidgenomes
.. _`r-acidgenomes/tags`: https://quay.io/repository/biocontainers/r-acidgenomes?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgenomes";
        var versions = ["0.7.5","0.7.4","0.7.3","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgenomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgenomes/README.html