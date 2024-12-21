:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rad_haplotyper'
.. highlight: bash

rad_haplotyper
==============

.. conda:recipe:: rad_haplotyper
   :replaces_section_title:
   :noindex:

   A program for building SNP haplotypes from RAD sequencing data

   :homepage: https://github.com/chollenbeck/rad_haplotyper
   :license: Perl
   :recipe: /`rad_haplotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper/meta.yaml>`_

   


.. conda:package:: rad_haplotyper

   |downloads_rad_haplotyper| |docker_rad_haplotyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.9-8</code>,  <code>1.1.9-7</code>,  <code>1.1.9-6</code>,  <code>1.1.9-5</code>,  <code>1.1.9-4</code>,  <code>1.1.9-3</code>,  <code>1.1.9-2</code>,  <code>1.1.9-1</code>,  <code>1.1.9-0</code>,  </span></summary>
      

      ``1.1.9-8``,  ``1.1.9-7``,  ``1.1.9-6``,  ``1.1.9-5``,  ``1.1.9-4``,  ``1.1.9-3``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.7-0``,  ``1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends ddocent: ``>=2.9.8,<3.0a0``
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-bio-cigar: 
   :depends perl-bio-samtools: 
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-getopt-long: ``>=2.58,<3.0a0``
   :depends perl-list-moreutils: 
   :depends perl-module-build: ``0.4232.*``
   :depends perl-parallel-forkmanager: ``>=2.3,<3.0a0``
   :depends perl-pod-usage: 
   :depends perl-term-progressbar: 
   :depends perl-vcftools-vcf: ``<0.700``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rad_haplotyper

   and update with::

      mamba update rad_haplotyper

  To create a new environment, run::

      mamba create --name myenvname rad_haplotyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rad_haplotyper:<tag>

   (see `rad_haplotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_rad_haplotyper| image:: https://img.shields.io/conda/dn/bioconda/rad_haplotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/rad_haplotyper
   :alt:   (downloads)
.. |docker_rad_haplotyper| image:: https://quay.io/repository/biocontainers/rad_haplotyper/status
   :target: https://quay.io/repository/biocontainers/rad_haplotyper
.. _`rad_haplotyper/tags`: https://quay.io/repository/biocontainers/rad_haplotyper?tab=tags


.. raw:: html

    <script>
        var package = "rad_haplotyper";
        var versions = ["1.1.9","1.1.9","1.1.9","1.1.9","1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad_haplotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad_haplotyper/README.html