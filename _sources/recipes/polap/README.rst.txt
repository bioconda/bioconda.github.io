:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polap'
.. highlight: bash

polap
=====

.. conda:recipe:: polap
   :replaces_section_title:
   :noindex:

   POLAP\: plant organelle long\-read assembly pipeline

   :homepage: https://github.com/goshng/polap
   :documentation: https://goshng.github.io/polap/polap.html
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`polap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polap/meta.yaml>`_

   


.. conda:package:: polap

   |downloads_polap| |docker_polap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.3.7.5-1</code>,  <code>0.4.3.7.5-0</code>,  <code>0.4.3.7.4-0</code>,  <code>0.4.3.7.3-0</code>,  <code>0.4.3.7.2-0</code>,  <code>0.4.3.7-1</code>,  <code>0.4.3.7-0</code>,  <code>0.4.1.1-0</code>,  <code>0.3.7.3-1</code>,  </span></summary>
      

      ``0.4.3.7.5-1``,  ``0.4.3.7.5-0``,  ``0.4.3.7.4-0``,  ``0.4.3.7.3-0``,  ``0.4.3.7.2-0``,  ``0.4.3.7-1``,  ``0.4.3.7-0``,  ``0.4.1.1-0``,  ``0.3.7.3-1``,  ``0.3.7.3-0``,  ``0.3.7.2-0``,  ``0.3.7.1-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.2.6-0``,  ``0.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends assembly-stats: 
   :depends bedtools: 
   :depends bioawk: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-ggtree: 
   :depends blast: 
   :depends clustalw: 
   :depends csvtk: 
   :depends entrez-direct: 
   :depends flye: ``>=2.9.5``
   :depends getorganelle: 
   :depends gfastats: 
   :depends gfatools: 
   :depends icu: 
   :depends kmer-jellyfish: 
   :depends libxml2: 
   :depends mafft: 
   :depends minimap2: 
   :depends networkx: 
   :depends newick_utils: 
   :depends orthofinder: 
   :depends pandas: 
   :depends pandoc: 
   :depends parallel: 
   :depends perl: 
   :depends perl-xml-libxml: 
   :depends progressivemauve: 
   :depends python: ``>=3.8,<3.11``
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-optparse: 
   :depends r-readr: 
   :depends r-rgbif: 
   :depends r-stringr: 
   :depends r-taxize: 
   :depends r-tidyr: 
   :depends samtools: 
   :depends seqkit: 
   :depends seqtk: 
   :depends sra-tools: 
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

      mamba install polap

   and update with::

      mamba update polap

  To create a new environment, run::

      mamba create --name myenvname polap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/polap:<tag>

   (see `polap/tags`_ for valid values for ``<tag>``)


.. |downloads_polap| image:: https://img.shields.io/conda/dn/bioconda/polap.svg?style=flat
   :target: https://anaconda.org/bioconda/polap
   :alt:   (downloads)
.. |docker_polap| image:: https://quay.io/repository/biocontainers/polap/status
   :target: https://quay.io/repository/biocontainers/polap
.. _`polap/tags`: https://quay.io/repository/biocontainers/polap?tab=tags


.. raw:: html

    <script>
        var package = "polap";
        var versions = ["0.4.3.7.5","0.4.3.7.5","0.4.3.7.4","0.4.3.7.3","0.4.3.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polap/README.html