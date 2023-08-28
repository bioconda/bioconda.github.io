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

         <details><summary><span class="truncated-version-list"><code>1.8.2-8</code>,  <code>1.8.2-7</code>,  <code>1.8.2-6</code>,  <code>1.8.2-5</code>,  <code>1.8.2-4</code>,  <code>1.8.2-3</code>,  <code>1.8.2-2</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  </span></summary>
      

      ``1.8.2-8``,  ``1.8.2-7``,  ``1.8.2-6``,  ``1.8.2-5``,  ``1.8.2-4``,  ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools-snvphyl-plugin: ``>=1.9``
   :depends grep: 
   :depends libgcc-ng: ``>=12``
   :depends mummer: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-hash-merge: 
   :depends perl-list-moreutils: 
   :depends perl-math-round: 
   :depends perl-parallel-forkmanager: 
   :depends perl-string-util: 
   :depends perl-text-csv: 
   :depends perl-vcftools-vcf: 
   :depends samtools: ``>=1.9``
   :depends vcftools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snvphyl-tools

   and update with::

      mamba update snvphyl-tools

  To create a new environment, run::

      mamba create --name myenvname snvphyl-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snvphyl-tools:<tag>

   (see `snvphyl-tools/tags`_ for valid values for ``<tag>``)


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