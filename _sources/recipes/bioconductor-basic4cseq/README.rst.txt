:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basic4cseq'
.. highlight: bash

bioconductor-basic4cseq
=======================

.. conda:recipe:: bioconductor-basic4cseq
   :replaces_section_title:
   :noindex:

   Basic4Cseq\: an R\/Bioconductor package for analyzing 4C\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Basic4Cseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basic4cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq/meta.yaml>`_
   :links: biotools: :biotools:`basic4cseq`, doi: :doi:`10.1093/bioinformatics/btu497`

   Basic4Cseq is an R\/Bioconductor package for basic filtering\, analysis and subsequent visualization of 4C\-seq data. Virtual fragment libraries can be created for any BSGenome package\, and filter functions for both reads and fragments and basic quality controls are included. Fragment data in the vicinity of the experiment\'s viewpoint can be visualized as a coverage plot based on a running median approach and a multi\-scale contact profile.


.. conda:package:: bioconductor-basic4cseq

   |downloads_bioconductor-basic4cseq| |docker_bioconductor-basic4cseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome.ecoli.ncbi.20080805: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-catools: 
   :depends on r-rcircos: 

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

    pixi global install bioconductor-basic4cseq

to add into an existing workspace instead, run::

    pixi add bioconductor-basic4cseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basic4cseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basic4cseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basic4cseq:<tag>

(see `bioconductor-basic4cseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basic4cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basic4cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basic4cseq
   :alt:   (downloads)
.. |docker_bioconductor-basic4cseq| image:: https://quay.io/repository/biocontainers/bioconductor-basic4cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basic4cseq
.. _`bioconductor-basic4cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basic4cseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basic4cseq";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html