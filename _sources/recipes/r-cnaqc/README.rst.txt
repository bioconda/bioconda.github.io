:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cnaqc'
.. highlight: bash

r-cnaqc
=======

.. conda:recipe:: r-cnaqc
   :replaces_section_title:
   :noindex:

   Copy number quality control

   :homepage: https://github.com/caravagnalab/CNAqc
   :documentation: https://caravagnalab.github.io/CNAqc/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-cnaqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnaqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnaqc/meta.yaml>`_

   CNAqc is a package to quality control \(QC\) bulk cancer sequencing data. 
   Methods are available to \, visualise and manipulate i\) somatic mutation data 
   of both single\-nucleotide variants and insertion\-deletions\, ii\) allele\-specific 
   Copy Number Alterations \(CNAs\) and iii\) tumour purity estimates. QC procedures 
   in CNAqc can be used to validate copy number segmentations against variant 
   allele frequencies of somatic mutations\; QC scores can be used to rank 
   alternative tumour segmentations and purity\/ ploidy estimates. 
   CNAqc provides also algorithms to phase mutation multiplicities against CNAs and 
   estimate Cancer Cell Fractions \(CCFs\) with their uncertainty. The package contains 
   also statistical tests to identify patterns of over\-fragmentation of chromosome 
   arms \(excessively short and numerous DNA fragments\) and perform 
   various manipulation tasks for somatic tumour data.



.. conda:package:: r-cnaqc

   |downloads_r-cnaqc| |docker_r-cnaqc|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``

      

   
   :depends on bioconductor-annotationdbi: 
   :depends on bioconductor-complexheatmap: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-rhtslib: 
   :depends on bioconductor-rsamtools: 
   :depends on bioconductor-variantannotation: 
   :depends on r-akima: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bmix: 
   :depends on r-cli: 
   :depends on r-clisymbols: 
   :depends on r-cowplot: 
   :depends on r-crayon: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-easypar: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-ggsci: 
   :depends on r-gtools: 
   :depends on r-magrittr: 
   :depends on r-peakpick: 
   :depends on r-pio: 
   :depends on r-progress: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-scales: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vcfr: 

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

    pixi global install r-cnaqc

to add into an existing workspace instead, run::

    pixi add r-cnaqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cnaqc

Alternatively, to install into a new environment, run::

    conda create -n envname r-cnaqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cnaqc:<tag>

(see `r-cnaqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cnaqc| image:: https://img.shields.io/conda/dn/bioconda/r-cnaqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cnaqc
   :alt:   (downloads)
.. |docker_r-cnaqc| image:: https://quay.io/repository/biocontainers/r-cnaqc/status
   :target: https://quay.io/repository/biocontainers/r-cnaqc
.. _`r-cnaqc/tags`: https://quay.io/repository/biocontainers/r-cnaqc?tab=tags


.. raw:: html

    <script>
        var package = "r-cnaqc";
        var versions = ["1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cnaqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cnaqc/README.html