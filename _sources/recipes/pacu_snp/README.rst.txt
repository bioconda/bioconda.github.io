:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pacu_snp'
.. highlight: bash

pacu_snp
========

.. conda:recipe:: pacu_snp
   :replaces_section_title:
   :noindex:

   PACU is a workflow for whole genome sequencing based phylogeny of Illumina and ONT R9\/R10 data.

   :homepage: https://github.com/BioinformaticsPlatformWIV-ISP/PACU
   :license: GPL / GPL-3.0-or-later
   :recipe: /`pacu_snp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacu_snp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacu_snp/meta.yaml>`_

   


.. conda:package:: pacu_snp

   |downloads_pacu_snp| |docker_pacu_snp|

   :versions:
      
      

      ``1.0.0-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on bcftools: ``>=1.17``
   :depends on beautifulsoup4: ``>=4.12.2``
   :depends on bedtools: ``>=2.31.0``
   :depends on biopython: ``>=1.84``
   :depends on bowtie2: ``>=2.5.1``
   :depends on figtree: ``>=1.4.4``
   :depends on gubbins: ``>=3.3.1``
   :depends on iqtree: ``>=2.2.5``
   :depends on matplotlib-base: ``>=3.8.0``
   :depends on minimap2: ``>=2.26``
   :depends on pandas: ``>=2.1.0``
   :depends on python: 
   :depends on pyvcf3: ``>=1.0.3``
   :depends on pyyaml: ``>=6.0.1``
   :depends on samtools: ``>=1.17``
   :depends on seqkit: ``>=2.3.1``
   :depends on snakemake-minimal: ``7.32.4``
   :depends on snp-dists: ``>=0.8.2``
   :depends on trimmomatic: ``>=0.39``
   :depends on upsetplot: ``>=0.8.0``
   :depends on yattag: ``>=1.15.1``

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

    pixi global install pacu_snp

to add into an existing workspace instead, run::

    pixi add pacu_snp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pacu_snp

Alternatively, to install into a new environment, run::

    conda create -n envname pacu_snp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pacu_snp:<tag>

(see `pacu_snp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pacu_snp| image:: https://img.shields.io/conda/dn/bioconda/pacu_snp.svg?style=flat
   :target: https://anaconda.org/bioconda/pacu_snp
   :alt:   (downloads)
.. |docker_pacu_snp| image:: https://quay.io/repository/biocontainers/pacu_snp/status
   :target: https://quay.io/repository/biocontainers/pacu_snp
.. _`pacu_snp/tags`: https://quay.io/repository/biocontainers/pacu_snp?tab=tags


.. raw:: html

    <script>
        var package = "pacu_snp";
        var versions = ["1.0.0","0.0.7","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pacu_snp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pacu_snp/README.html