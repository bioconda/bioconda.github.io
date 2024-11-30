:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ascat'
.. highlight: bash

ascat
=====

.. conda:recipe:: ascat
   :replaces_section_title:
   :noindex:

   ASCAT is a method to derive copy number profiles of tumour cells\,
   accounting for normal cell admixture and tumour aneuploidy \(Figure 1\).
   ASCAT infers tumour purity \(the fraction of tumour cells\) and ploidy \(the
   amount of DNA per tumour cell\, expressed as multiples of haploid genomes\)
   from SNP array or massively parallel sequencing data\, and calculates
   whole\-genome allele\-specific copy number profiles \(the number of copies of
   both parental alleles for all SNP loci across the genome\).


   :homepage: https://www.crick.ac.uk/research/a-z-researchers/researchers-v-y/peter-van-loo/software
   :documentation: https://github.com/VanLoo-lab/ascat/blob/v3.2.0/README.md
   
   :developer docs: https://github.com/Crick-CancerGenomics/ascat
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat/meta.yaml>`_
   :links: biotools: :biotools:`ascat`, doi: :doi:`10.1073/pnas.1009843107`

   


.. conda:package:: ascat

   |downloads_ascat| |docker_ascat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-0</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.5.2-4</code>,  <code>2.5.2-3</code>,  <code>2.5.2-2</code>,  <code>2.5.2-1</code>,  </span></summary>
      

      ``3.2.0-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.5.2-4``,  ``2.5.2-3``,  ``2.5.2-2``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-r.devices: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
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

      mamba install ascat

   and update with::

      mamba update ascat

  To create a new environment, run::

      mamba create --name myenvname ascat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ascat:<tag>

   (see `ascat/tags`_ for valid values for ``<tag>``)


.. |downloads_ascat| image:: https://img.shields.io/conda/dn/bioconda/ascat.svg?style=flat
   :target: https://anaconda.org/bioconda/ascat
   :alt:   (downloads)
.. |docker_ascat| image:: https://quay.io/repository/biocontainers/ascat/status
   :target: https://quay.io/repository/biocontainers/ascat
.. _`ascat/tags`: https://quay.io/repository/biocontainers/ascat?tab=tags


.. raw:: html

    <script>
        var package = "ascat";
        var versions = ["3.2.0","3.1.1","3.1.1","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ascat/README.html