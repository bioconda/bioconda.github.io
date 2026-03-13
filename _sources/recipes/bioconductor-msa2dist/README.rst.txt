:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msa2dist'
.. highlight: bash

bioconductor-msa2dist
=====================

.. conda:recipe:: bioconductor-msa2dist
   :replaces_section_title:
   :noindex:

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSA2dist.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-msa2dist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa2dist/meta.yaml>`_

   MSA2dist calculates pairwise distances between all sequences of a DNAStringSet or a AAStringSet using a custom score matrix and conducts codon based analysis. It uses scoring matrices to be used in these pairwise distance calcualtions which can be adapted to any scoring for DNA or AA characters. E.g. by using literal distances MSA2dist calculates pairwise IUPAC distances.


.. conda:package:: bioconductor-msa2dist

   |downloads_bioconductor-msa2dist| |docker_bioconductor-msa2dist|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-rcpp: 
   :depends on r-rcppthread: 
   :depends on r-rlang: 
   :depends on r-seqinr: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-msa2dist

to add into an existing workspace instead, run::

    pixi add bioconductor-msa2dist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msa2dist

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msa2dist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msa2dist:<tag>

(see `bioconductor-msa2dist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msa2dist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa2dist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msa2dist
   :alt:   (downloads)
.. |docker_bioconductor-msa2dist| image:: https://quay.io/repository/biocontainers/bioconductor-msa2dist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa2dist
.. _`bioconductor-msa2dist/tags`: https://quay.io/repository/biocontainers/bioconductor-msa2dist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msa2dist";
        var versions = ["1.14.0","1.10.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa2dist/README.html