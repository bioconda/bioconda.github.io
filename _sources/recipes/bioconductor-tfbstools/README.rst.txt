:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfbstools'
.. highlight: bash

bioconductor-tfbstools
======================

.. conda:recipe:: bioconductor-tfbstools
   :replaces_section_title:
   :noindex:

   Software Package for Transcription Factor Binding Site \(TFBS\) Analysis.

   :homepage: https://bioconductor.org/packages/3.21/bioc/html/TFBSTools.html
   :license: GPL / GPL-2.0-or-later
   :recipe: /`bioconductor-tfbstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfbstools/meta.yaml>`_
   :links: biotools: :biotools:`tfbstools`

   TFBSTools is a package for the analysis and manipulation of transcription factor binding sites. It includes matrices conversion between Position Frequency Matirx \(PFM\)\, Position Weight Matirx \(PWM\) and Information Content Matrix \(ICM\). It can also scan putative TFBS from sequence\/alignment\, query JASPAR database and provides a wrapper of de novo motif discovery software.


.. conda:package:: bioconductor-tfbstools

   |downloads_bioconductor-tfbstools| |docker_bioconductor-tfbstools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.15.7-0``,  ``1.14.2-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on bioconductor-seqlogo: ``>=1.76.0,<1.77.0``
   :depends on bioconductor-seqlogo: ``>=1.76.0,<1.77.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-catools: ``>=1.17.1``
   :depends on r-dbi: ``>=0.6``
   :depends on r-gtools: ``>=3.5.0``
   :depends on r-rsqlite: ``>=1.0.0``
   :depends on r-tfmpvalue: ``>=0.0.5``
   :depends on r-xml: ``>=3.98-1.3``

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

    pixi global install bioconductor-tfbstools

to add into an existing workspace instead, run::

    pixi add bioconductor-tfbstools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tfbstools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tfbstools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tfbstools:<tag>

(see `bioconductor-tfbstools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tfbstools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfbstools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfbstools
   :alt:   (downloads)
.. |docker_bioconductor-tfbstools| image:: https://quay.io/repository/biocontainers/bioconductor-tfbstools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfbstools
.. _`bioconductor-tfbstools/tags`: https://quay.io/repository/biocontainers/bioconductor-tfbstools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfbstools";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfbstools/README.html