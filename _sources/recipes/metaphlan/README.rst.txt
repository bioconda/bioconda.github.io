:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphlan'
.. highlight: bash

metaphlan
=========

.. conda:recipe:: metaphlan
   :replaces_section_title:
   :noindex:

   Metagenomic Phylogenetic Analysis.

   :homepage: https://github.com/biobakery/metaphlan
   :documentation: https://github.com/biobakery/MetaPhlAn/wiki/MetaPhlAn-4
   
   :license: MIT / MIT
   :recipe: /`metaphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.2066`, biotools: :biotools:`metaphlan`, usegalaxy-eu: :usegalaxy-eu:`metaphlan`

   MetaPhlAn is a computational tool for profiling the composition of microbial
   communities \(Bacteria\, Archaea and Eukaryotes\) from metagenomic
   shotgun sequencing data with species level resolution. From version 2.0
   MetaPhlAn is also able to identify specific strains \(in the not\-so\-frequent
   cases in which the sample contains a previously sequenced strains\) and to
   track strains across samples for all species.



.. conda:package:: metaphlan

   |downloads_metaphlan| |docker_metaphlan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.4-0</code>,  <code>4.2.3-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.6-0</code>,  </span></summary>
      

      ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.1.0-0``,  ``3.0.14-0``,  ``3.0.13-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.10-0``,  ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-2``,  ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``3.0.0.alpha-1``,  ``3.0.0.alpha-0``,  ``2.8.1-1``,  ``2.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-microbiome: 
   :depends on biom-format: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bowtie2: ``>=2.3.0``
   :depends on cmseq: 
   :depends on dendropy: 
   :depends on h5py: 
   :depends on hclust2: 
   :depends on matplotlib-base: 
   :depends on minimap2: ``>=2.26``
   :depends on muscle: ``>=3.8.1551``
   :depends on numpy: 
   :depends on pandas: 
   :depends on phylophlan: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on r-ape: 
   :depends on r-base: ``>=4``
   :depends on r-biocmanager: 
   :depends on r-compositions: 
   :depends on r-essentials: 
   :depends on r-optparse: 
   :depends on r-rbiom: 
   :depends on raxml: ``>=8.2.10``
   :depends on requests: 
   :depends on samtools: 
   :depends on scipy: 

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

    pixi global install metaphlan

to add into an existing workspace instead, run::

    pixi add metaphlan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaphlan

Alternatively, to install into a new environment, run::

    conda create -n envname metaphlan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaphlan:<tag>

(see `metaphlan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaphlan| image:: https://img.shields.io/conda/dn/bioconda/metaphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphlan
   :alt:   (downloads)
.. |docker_metaphlan| image:: https://quay.io/repository/biocontainers/metaphlan/status
   :target: https://quay.io/repository/biocontainers/metaphlan
.. _`metaphlan/tags`: https://quay.io/repository/biocontainers/metaphlan?tab=tags


.. raw:: html

    <script>
        var package = "metaphlan";
        var versions = ["4.2.4","4.2.3","4.2.2","4.2.1","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphlan/README.html