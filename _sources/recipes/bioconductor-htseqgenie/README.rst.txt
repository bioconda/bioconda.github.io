:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htseqgenie'
.. highlight: bash

bioconductor-htseqgenie
=======================

.. conda:recipe:: bioconductor-htseqgenie
   :replaces_section_title:
   :noindex:

   A NGS analysis pipeline.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HTSeqGenie.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htseqgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie/meta.yaml>`_

   Libraries to perform NGS analysis.


.. conda:package:: bioconductor-htseqgenie

   |downloads_bioconductor-htseqgenie| |docker_bioconductor-htseqgenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.32.0-0</code>,  <code>4.30.0-0</code>,  <code>4.27.0-0</code>,  <code>4.24.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-1</code>,  <code>4.20.0-0</code>,  <code>4.18.0-0</code>,  <code>4.16.0-0</code>,  </span></summary>
      

      ``4.32.0-0``,  ``4.30.0-0``,  ``4.27.0-0``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-1``,  ``4.20.0-0``,  ``4.18.0-0``,  ``4.16.0-0``,  ``4.14.0-1``,  ``4.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-chipseq: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-gmapr: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-varianttools: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cairo: ``>=1.5.5``
   :depends on r-hwriter: ``>=1.3.0``

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

    pixi global install bioconductor-htseqgenie

to add into an existing workspace instead, run::

    pixi add bioconductor-htseqgenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-htseqgenie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-htseqgenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-htseqgenie:<tag>

(see `bioconductor-htseqgenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-htseqgenie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htseqgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htseqgenie
   :alt:   (downloads)
.. |docker_bioconductor-htseqgenie| image:: https://quay.io/repository/biocontainers/bioconductor-htseqgenie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htseqgenie
.. _`bioconductor-htseqgenie/tags`: https://quay.io/repository/biocontainers/bioconductor-htseqgenie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htseqgenie";
        var versions = ["4.32.0","4.30.0","4.27.0","4.24.0","4.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html