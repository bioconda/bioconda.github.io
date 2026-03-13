:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosca'
.. highlight: bash

mosca
=====

.. conda:recipe:: mosca
   :replaces_section_title:
   :noindex:

   MOSCA \- Meta\-Omics Software for Community Analysis

   :homepage: https://github.com/iquasere/MOSCA
   :documentation: https://github.com/iquasere/MOSCA/wiki
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`mosca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca/meta.yaml>`_

   MOSCA \(portuguese for fly\) is a pipeline designed for performing metagenomics \(MG\)\,
   metatranscriptomics \(MT\) and metaproteomics \(MP\) integrated data analysis\, 
   in a mostly local and fully automated workflow. Metagenomics is used to build 
   a reference database for MT and MP\, beginning with preprocessing of data for
   removal of Illumina adapters and lower quality regions\, folowed by assembly
   of reads into contigs\, gene calling on the contigs and homology\-based and 
   domain\-based annotation of identified proteins\, using the UniProt and COG 
   databases\, respectively. If available\, MT reads are then aligned to the ORFs 
   for gene expression quantification\, and MP spectra are submitted for
   Peptide\-to\-Spectrum matching\, with the annotated ORFs as reference database.
   Final steps include differential expression analysis for both MT and MP\, and
   metabolic pathways analysis through KEGG Pathways.



.. conda:package:: mosca

   |downloads_mosca| |docker_mosca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pandas: 
   :depends on python: ``>=3.9,<3.12``
   :depends on snakemake: ``<8``

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

    pixi global install mosca

to add into an existing workspace instead, run::

    pixi add mosca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mosca

Alternatively, to install into a new environment, run::

    conda create -n envname mosca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mosca:<tag>

(see `mosca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mosca| image:: https://img.shields.io/conda/dn/bioconda/mosca.svg?style=flat
   :target: https://anaconda.org/bioconda/mosca
   :alt:   (downloads)
.. |docker_mosca| image:: https://quay.io/repository/biocontainers/mosca/status
   :target: https://quay.io/repository/biocontainers/mosca
.. _`mosca/tags`: https://quay.io/repository/biocontainers/mosca?tab=tags


.. raw:: html

    <script>
        var package = "mosca";
        var versions = ["2.3.0","2.2.1","2.2.0","2.1.0","1.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosca/README.html