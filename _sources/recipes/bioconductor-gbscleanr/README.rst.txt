:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gbscleanr'
.. highlight: bash

bioconductor-gbscleanr
======================

.. conda:recipe:: bioconductor-gbscleanr
   :replaces_section_title:
   :noindex:

   Error correction tool for noisy genotyping by sequencing \(GBS\) data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GBScleanR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-gbscleanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gbscleanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gbscleanr/meta.yaml>`_

   GBScleanR is a package for quality check\, filtering\, and error correction of genotype data derived from next generation sequcener \(NGS\) based genotyping platforms. GBScleanR takes Variant Call Format \(VCF\) file as input. The main function of this package is \`estGeno\(\)\` which estimates the true genotypes of samples from given read counts for genotype markers using a hidden Markov model with incorporating uneven observation ratio of allelic reads. This implementation gives robust genotype estimation even in noisy genotype data usually observed in Genotyping\-By\-Sequnencing \(GBS\) and similar methods\, e.g. RADseq. The current implementation accepts genotype data of a diploid population at any generation of multi\-parental cross\, e.g. biparental F2 from inbred parents\, biparental F2 from outbred parents\, and 8\-way recombinant inbred lines \(8\-way RILs\) which can be refered to as MAGIC population.


.. conda:package:: bioconductor-gbscleanr

   |downloads_bioconductor-gbscleanr| |docker_bioconductor-gbscleanr|

   :versions:
      
      

      ``2.4.4-0``,  ``2.0.2-0``,  ``1.6.0-0``,  ``1.4.4-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-gdsfmt: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-seqarray: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-seqarray: ``>=1.50.1,<1.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-expm: 
   :depends on r-ggplot2: 
   :depends on r-rcpp: 
   :depends on r-rcppparallel: 
   :depends on r-tidyr: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-gbscleanr

to add into an existing workspace instead, run::

    pixi add bioconductor-gbscleanr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gbscleanr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gbscleanr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gbscleanr:<tag>

(see `bioconductor-gbscleanr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gbscleanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gbscleanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gbscleanr
   :alt:   (downloads)
.. |docker_bioconductor-gbscleanr| image:: https://quay.io/repository/biocontainers/bioconductor-gbscleanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gbscleanr
.. _`bioconductor-gbscleanr/tags`: https://quay.io/repository/biocontainers/bioconductor-gbscleanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gbscleanr";
        var versions = ["2.4.4","2.0.2","1.6.0","1.4.4","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gbscleanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gbscleanr/README.html