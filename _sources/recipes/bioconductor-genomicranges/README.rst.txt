:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicranges'
.. highlight: bash

bioconductor-genomicranges
==========================

.. conda:recipe:: bioconductor-genomicranges
   :replaces_section_title:
   :noindex:

   Representation and manipulation of genomic intervals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges/meta.yaml>`_
   :links: biotools: :biotools:`genomicranges`

   The ability to efficiently represent and manipulate genomic annotations and alignments is playing a central role when it comes to analyzing high\-throughput sequencing data \(a.k.a. NGS data\). The GenomicRanges package defines general purpose containers for storing and manipulating genomic intervals and variables defined along a genome. More specialized containers for representing and manipulating short alignments against a reference genome\, or a matrix\-like summarization of an experiment\, are defined in the GenomicAlignments and SummarizedExperiment packages\, respectively. Both packages build on top of the GenomicRanges infrastructure.


.. conda:package:: bioconductor-genomicranges

   |downloads_bioconductor-genomicranges| |docker_bioconductor-genomicranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.1-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.54.1-2</code>,  <code>1.54.1-1</code>,  <code>1.54.1-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  </span></summary>
      

      ``1.62.1-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.1-2``,  ``1.54.1-1``,  ``1.54.1-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.1-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.7-0``,  ``1.30.3-0``,  ``1.30.0-0``,  ``1.28.6-0``,  ``1.26.4-0``,  ``1.26.1-1``,  ``1.24.3-1``,  ``1.22.4-0``,  ``1.22.3-0``,  ``1.22.2-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-genomicranges

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicranges

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicranges

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicranges

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicranges:<tag>

(see `bioconductor-genomicranges/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicranges
   :alt:   (downloads)
.. |docker_bioconductor-genomicranges| image:: https://quay.io/repository/biocontainers/bioconductor-genomicranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicranges
.. _`bioconductor-genomicranges/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicranges";
        var versions = ["1.62.1","1.58.0","1.58.0","1.58.0","1.54.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html