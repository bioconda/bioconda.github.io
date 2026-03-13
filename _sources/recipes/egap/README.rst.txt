:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'egap'
.. highlight: bash

egap
====

.. conda:recipe:: egap
   :replaces_section_title:
   :noindex:

   EGAP pipeline for genome assembly and QC analysis

   :homepage: https://github.com/iPsychonaut/EGAP
   :license: BSD-3-Clause
   :recipe: /`egap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/egap/meta.yaml>`_

   EGAP \(Entheome Genome Assembly Pipeline\) is a versatile bioinformatics
   pipeline for hybrid genome assembly from Oxford Nanopore\, Illumina\, and
   PacBio data. It supports multiple input modes and assembly methods and
   determines the best based on multiple metrics\: BUSCO Completeness
   \(Single \+ Duplicated\)\, Assembly Contig Count\, Assembly N50\, Assembly L50\,
   and Assembly GC\-content.



.. conda:package:: egap

   |downloads_egap| |docker_egap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.8-0</code>,  <code>3.3.7-0</code>,  <code>3.3.6-0</code>,  <code>3.3.5-0</code>,  <code>3.3.4-0</code>,  <code>3.3c-0</code>,  <code>3.2c-0</code>,  <code>3.1-0</code>,  <code>3.1b-0</code>,  </span></summary>
      

      ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3c-0``,  ``3.2c-0``,  ``3.1-0``,  ``3.1b-0``,  ``3.0.0f-0``,  ``3.0.0b-0``,  ``2.6.6-0``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.2-0``,  ``2.5.4-0``,  ``2.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abyss: ``>=2.0.2``
   :depends on bamtools: ``>=2.5.2``
   :depends on bbmap: ``>=39.15``
   :depends on beautifulsoup4: ``>=4.12.3``
   :depends on bifrost: ``>=1.3.5``
   :depends on biopython: ``>=1.81``
   :depends on busco: ``>=5.8.2``
   :depends on bwa-mem2: ``>=2.2.1``
   :depends on compleasm: ``>=0.2.7``
   :depends on fastqc: ``>=0.12.1``
   :depends on filtlong: ``>=0.2.1``
   :depends on flye: ``>=2.9.5``
   :depends on geopy: ``>=2.4.1``
   :depends on gfatools: ``>=0.5``
   :depends on hifiasm: ``>=0.21.0``
   :depends on jinja2: ``>=3.1.4``
   :depends on kmc: ``>=3.2.4``
   :depends on masurca: ``>=4.1.2``
   :depends on matplotlib-base: ``>=3.7.3``
   :depends on minimap2: ``>=2.28``
   :depends on nanoplot: ``>=1.43.0``
   :depends on ncbi-datasets-cli: ``>=18.3.1``
   :depends on numpy: ``>=1.24.3``
   :depends on openpyxl: ``>=3.1.5``
   :depends on pandas: ``>=2.0.3``
   :depends on pbccs: ``>=6.4.0``
   :depends on pilon: ``>=1.22``
   :depends on psutil: ``>=6.0.0``
   :depends on purge_dups: ``>=1.2.6``
   :depends on pyinaturalist: ``>=0.20``
   :depends on python: ``>=3.8,<3.9``
   :depends on quast: ``>=5.2.0``
   :depends on racon: ``>=1.5.0``
   :depends on ragtag: ``>=2.1.0``
   :depends on ratatosk: ``>=0.9.0``
   :depends on requests: ``>=2.32.3``
   :depends on rich: ``>=13.3.3``
   :depends on samtools: ``>=1.21``
   :depends on sepp: ``>=4.5.1``
   :depends on spades: ``>=4.0.0``
   :depends on sra-tools: ``>=3.2.0``
   :depends on tabulate: ``>=0.9.0``
   :depends on termcolor: ``>=2.3.0``
   :depends on textual: ``>=0.4.2``
   :depends on tgsgapcloser: ``>=1.2.1``
   :depends on trimmomatic: ``>=0.39``

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

    pixi global install egap

to add into an existing workspace instead, run::

    pixi add egap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install egap

Alternatively, to install into a new environment, run::

    conda create -n envname egap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/egap:<tag>

(see `egap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_egap| image:: https://img.shields.io/conda/dn/bioconda/egap.svg?style=flat
   :target: https://anaconda.org/bioconda/egap
   :alt:   (downloads)
.. |docker_egap| image:: https://quay.io/repository/biocontainers/egap/status
   :target: https://quay.io/repository/biocontainers/egap
.. _`egap/tags`: https://quay.io/repository/biocontainers/egap?tab=tags


.. raw:: html

    <script>
        var package = "egap";
        var versions = ["3.3.8","3.3.7","3.3.6","3.3.5","3.3.4"];
    </script>





Notes
-----
This package installs a custom executable named \"EGAP\" in \$PREFIX\/bin.
Please refer to the upstream GitHub page for usage instructions.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/egap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/egap/README.html