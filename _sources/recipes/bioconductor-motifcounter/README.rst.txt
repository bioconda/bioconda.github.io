:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifcounter'
.. highlight: bash

bioconductor-motifcounter
=========================

.. conda:recipe:: bioconductor-motifcounter
   :replaces_section_title:
   :noindex:

   R package for analysing TFBSs in DNA sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/motifcounter.html
   :license: GPL-2
   :recipe: /`bioconductor-motifcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifcounter/meta.yaml>`_

   \'motifcounter\' provides motif matching\, motif counting and motif enrichment functionality based on position frequency matrices. The main features of the packages include the utilization of higher\-order background models and accounting for self\-overlapping motif matches when determining motif enrichment. The background model allows to capture dinucleotide \(or higher\-order nucleotide\) composition adequately which may reduced model biases and misleading results compared to using simple GC background models. When conducting a motif enrichment analysis based on the motif match count\, the package relies on a compound Poisson distribution or alternatively a combinatorial model. These distribution account for self\-overlapping motif structures as exemplified by repeat\-like or palindromic motifs\, and allow to determine the p\-value and fold\-enrichment for a set of observed motif matches.


.. conda:package:: bioconductor-motifcounter

   |downloads_bioconductor-motifcounter| |docker_bioconductor-motifcounter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-motifcounter

to add into an existing workspace instead, run::

    pixi add bioconductor-motifcounter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-motifcounter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-motifcounter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-motifcounter:<tag>

(see `bioconductor-motifcounter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-motifcounter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifcounter
   :alt:   (downloads)
.. |docker_bioconductor-motifcounter| image:: https://quay.io/repository/biocontainers/bioconductor-motifcounter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifcounter
.. _`bioconductor-motifcounter/tags`: https://quay.io/repository/biocontainers/bioconductor-motifcounter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifcounter";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifcounter/README.html