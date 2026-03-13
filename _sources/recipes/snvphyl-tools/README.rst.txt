:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snvphyl-tools'
.. highlight: bash

snvphyl-tools
=============

.. conda:recipe:: snvphyl-tools
   :replaces_section_title:
   :noindex:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying
   Single Nucleotide Variants \(SNV\) within a collection of microbial genomes and constructing a phylogenetic tree

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: apache_2.0
   :recipe: /`snvphyl-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools/meta.yaml>`_

   


.. conda:package:: snvphyl-tools

   |downloads_snvphyl-tools| |docker_snvphyl-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.2-9</code>,  <code>1.8.2-8</code>,  <code>1.8.2-7</code>,  <code>1.8.2-6</code>,  <code>1.8.2-5</code>,  <code>1.8.2-4</code>,  <code>1.8.2-3</code>,  <code>1.8.2-2</code>,  <code>1.8.2-1</code>,  </span></summary>
      

      ``1.8.2-9``,  ``1.8.2-8``,  ``1.8.2-7``,  ``1.8.2-6``,  ``1.8.2-5``,  ``1.8.2-4``,  ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools-snvphyl-plugin: ``>=1.9``
   :depends on grep: 
   :depends on libgcc: ``>=13``
   :depends on mummer: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-hash-merge: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-round: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-string-util: 
   :depends on perl-text-csv: 
   :depends on perl-vcftools-vcf: 
   :depends on samtools: ``>=1.9``
   :depends on vcftools: 

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

    pixi global install snvphyl-tools

to add into an existing workspace instead, run::

    pixi add snvphyl-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snvphyl-tools

Alternatively, to install into a new environment, run::

    conda create -n envname snvphyl-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snvphyl-tools:<tag>

(see `snvphyl-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snvphyl-tools| image:: https://img.shields.io/conda/dn/bioconda/snvphyl-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/snvphyl-tools
   :alt:   (downloads)
.. |docker_snvphyl-tools| image:: https://quay.io/repository/biocontainers/snvphyl-tools/status
   :target: https://quay.io/repository/biocontainers/snvphyl-tools
.. _`snvphyl-tools/tags`: https://quay.io/repository/biocontainers/snvphyl-tools?tab=tags


.. raw:: html

    <script>
        var package = "snvphyl-tools";
        var versions = ["1.8.2","1.8.2","1.8.2","1.8.2","1.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snvphyl-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snvphyl-tools/README.html