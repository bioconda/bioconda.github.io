:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tapseq'
.. highlight: bash

bioconductor-tapseq
===================

.. conda:recipe:: bioconductor-tapseq
   :replaces_section_title:
   :noindex:

   Targeted scRNA\-seq primer design for TAP\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TAPseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tapseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tapseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tapseq/meta.yaml>`_

   Design primers for targeted single\-cell RNA\-seq used by TAP\-seq. Create sequence templates for target gene panels and design gene\-specific primers using Primer3. Potential off\-targets can be estimated with BLAST. Requires working installations of Primer3 and BLASTn.


.. conda:package:: bioconductor-tapseq

   |downloads_bioconductor-tapseq| |docker_bioconductor-tapseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.18.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.18.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-tapseq

to add into an existing workspace instead, run::

    pixi add bioconductor-tapseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tapseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tapseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tapseq:<tag>

(see `bioconductor-tapseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tapseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tapseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tapseq
   :alt:   (downloads)
.. |docker_bioconductor-tapseq| image:: https://quay.io/repository/biocontainers/bioconductor-tapseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tapseq
.. _`bioconductor-tapseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tapseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tapseq";
        var versions = ["1.22.1","1.18.0","1.14.1","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tapseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tapseq/README.html