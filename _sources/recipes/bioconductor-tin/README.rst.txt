:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tin'
.. highlight: bash

bioconductor-tin
================

.. conda:recipe:: bioconductor-tin
   :replaces_section_title:
   :noindex:

   Transcriptome instability analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TIN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tin/meta.yaml>`_
   :links: biotools: :biotools:`tin`, doi: :doi:`10.4137/CIN.S31363`

   The TIN package implements a set of tools for transcriptome instability analysis based on exon expression profiles. Deviating exon usage is studied in the context of splicing factors to analyse to what degree transcriptome instability is correlated to splicing factor expression. In the transcriptome instability correlation analysis\, the data is compared to both random permutations of alternative splicing scores and expression of random gene sets.


.. conda:package:: bioconductor-tin

   |downloads_bioconductor-tin| |docker_bioconductor-tin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends on r-aroma.affymetrix: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-squash: 
   :depends on r-stringr: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-tin

to add into an existing workspace instead, run::

    pixi add bioconductor-tin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tin

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tin:<tag>

(see `bioconductor-tin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tin
   :alt:   (downloads)
.. |docker_bioconductor-tin| image:: https://quay.io/repository/biocontainers/bioconductor-tin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tin
.. _`bioconductor-tin/tags`: https://quay.io/repository/biocontainers/bioconductor-tin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tin";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tin/README.html