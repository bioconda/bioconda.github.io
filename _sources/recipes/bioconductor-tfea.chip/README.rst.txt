:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfea.chip'
.. highlight: bash

bioconductor-tfea.chip
======================

.. conda:recipe:: bioconductor-tfea.chip
   :replaces_section_title:
   :noindex:

   Analyze Transcription Factor Enrichment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TFEA.ChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfea.chip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip/meta.yaml>`_

   Package to analize transcription factor enrichment in a gene set using data from ChIP\-Seq experiments.


.. conda:package:: bioconductor-tfea.chip

   |downloads_bioconductor-tfea.chip| |docker_bioconductor-tfea.chip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-r.utils: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-tfea.chip

to add into an existing workspace instead, run::

    pixi add bioconductor-tfea.chip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tfea.chip

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tfea.chip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tfea.chip:<tag>

(see `bioconductor-tfea.chip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tfea.chip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfea.chip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfea.chip
   :alt:   (downloads)
.. |docker_bioconductor-tfea.chip| image:: https://quay.io/repository/biocontainers/bioconductor-tfea.chip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfea.chip
.. _`bioconductor-tfea.chip/tags`: https://quay.io/repository/biocontainers/bioconductor-tfea.chip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfea.chip";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html