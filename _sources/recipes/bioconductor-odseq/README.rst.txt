:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-odseq'
.. highlight: bash

bioconductor-odseq
==================

.. conda:recipe:: bioconductor-odseq
   :replaces_section_title:
   :noindex:

   Outlier detection in multiple sequence alignments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/odseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-odseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq/meta.yaml>`_

   Performs outlier detection of sequences in a multiple sequence alignment using bootstrap of predefined distance metrics. Outlier sequences can make downstream analyses unreliable or make the alignments less accurate while they are being constructed. This package implements the OD\-seq algorithm proposed by Jehl et al \(doi 10.1186\/s12859\-015\-0702\-1\) for aligned sequences and a variant using string kernels for unaligned sequences.


.. conda:package:: bioconductor-odseq

   |downloads_bioconductor-odseq| |docker_bioconductor-odseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-kebabs: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-msa: ``>=1.42.0,<1.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mclust: ``>=5.1``

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

    pixi global install bioconductor-odseq

to add into an existing workspace instead, run::

    pixi add bioconductor-odseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-odseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-odseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-odseq:<tag>

(see `bioconductor-odseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-odseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-odseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-odseq
   :alt:   (downloads)
.. |docker_bioconductor-odseq| image:: https://quay.io/repository/biocontainers/bioconductor-odseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-odseq
.. _`bioconductor-odseq/tags`: https://quay.io/repository/biocontainers/bioconductor-odseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-odseq";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-odseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-odseq/README.html