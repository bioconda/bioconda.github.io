:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylophlan'
.. highlight: bash

phylophlan
==========

.. conda:recipe:: phylophlan
   :replaces_section_title:
   :noindex:

   Precise phylogenetic analysis of microbial isolates and genomes from metagenomes

   :homepage: https://github.com/biobakery/phylophlan
   :license: MIT / MIT License
   :recipe: /`phylophlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan/meta.yaml>`_

   PhyloPhlAn 3.0 is an integrated pipeline for large\-scale phylogenetic 
   profiling of genomes and metagenomes. PhyloPhlAn 3.0 is an accurate\, rapid\,
   and easy\-to\-use method for large\-scale microbial genome characterization 
   and phylogenetic analysis at multiple levels of resolution. PhyloPhlAn 3.0 
   can assign both genomes and metagenome\-assembled genomes \(MAGs\) to 
   species\-level genome bins \(SGBs\). PhyloPhlAn 3.0 can reconstruct 
   strain\-level phylogenies using clade\-specific maximally informative 
   phylogenetic markers\, and can also scale to very\-large phylogenies 
   comprising \>17\,000 microbial species.


.. conda:package:: phylophlan

   |downloads_phylophlan| |docker_phylophlan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1-0</code>,  <code>3.1-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0-7</code>,  <code>3.0-6</code>,  <code>3.0-5</code>,  <code>3.0-4</code>,  </span></summary>
      

      ``3.1.1-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends blast: ``>=2.6.0``
   :depends dendropy: ``>=4.4.0``
   :depends diamond: ``>=0.9``
   :depends fasttree: ``>=2.1.8``
   :depends iqtree: ``>=1.6.6``
   :depends mafft: ``>=7.310``
   :depends mash: 
   :depends matplotlib-base: ``>=3.1.0``
   :depends muscle: ``>=3.8.1551``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.7``
   :depends raxml: ``>=8.2.10``
   :depends requests: 
   :depends seaborn: ``>=0.9.0``
   :depends trimal: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phylophlan

   and update with::

      mamba update phylophlan

  To create a new environment, run::

      mamba create --name myenvname phylophlan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylophlan:<tag>

   (see `phylophlan/tags`_ for valid values for ``<tag>``)


.. |downloads_phylophlan| image:: https://img.shields.io/conda/dn/bioconda/phylophlan.svg?style=flat
   :target: https://anaconda.org/bioconda/phylophlan
   :alt:   (downloads)
.. |docker_phylophlan| image:: https://quay.io/repository/biocontainers/phylophlan/status
   :target: https://quay.io/repository/biocontainers/phylophlan
.. _`phylophlan/tags`: https://quay.io/repository/biocontainers/phylophlan?tab=tags


.. raw:: html

    <script>
        var package = "phylophlan";
        var versions = ["3.1.1","3.1","3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylophlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylophlan/README.html