:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloflash'
.. highlight: bash

phyloflash
==========

.. conda:recipe:: phyloflash
   :replaces_section_title:
   :noindex:

   phyloFlash is a pipeline to rapidly reconstruct the SSU rRNAs and explore
   phylogenetic composition of an illumina \(meta\)genomic dataset.

   :homepage: https://github.com/HRGV/phyloFlash
   :license: GPL / GPLv3
   :recipe: /`phyloflash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash/meta.yaml>`_

   


.. conda:package:: phyloflash

   |downloads_phyloflash| |docker_phyloflash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.2-1</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3b4-0</code>,  <code>3.3b3-0</code>,  <code>3.3b2-0</code>,  <code>3.3b1-1</code>,  </span></summary>
      

      ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3b4-0``,  ``3.3b3-0``,  ``3.3b2-0``,  ``3.3b1-1``,  ``3.3b1-0``,  ``3.0b1-1``,  ``3.0b1-0``,  ``2.0beta6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bbmap: 
   :depends bedtools: 
   :depends emirge: 
   :depends mafft: 
   :depends perl: ``>=5.13.2``
   :depends pigz: 
   :depends r-base: ``>=4.0.0``
   :depends r-ggdendro: 
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gtable: 
   :depends r-optparse: 
   :depends r-reshape2: 
   :depends samtools: ``>=1.12``
   :depends spades: 
   :depends vsearch: ``>=2.5.0``
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

      mamba install phyloflash

   and update with::

      mamba update phyloflash

  To create a new environment, run::

      mamba create --name myenvname phyloflash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyloflash:<tag>

   (see `phyloflash/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloflash| image:: https://img.shields.io/conda/dn/bioconda/phyloflash.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloflash
   :alt:   (downloads)
.. |docker_phyloflash| image:: https://quay.io/repository/biocontainers/phyloflash/status
   :target: https://quay.io/repository/biocontainers/phyloflash
.. _`phyloflash/tags`: https://quay.io/repository/biocontainers/phyloflash?tab=tags


.. raw:: html

    <script>
        var package = "phyloflash";
        var versions = ["3.4.2","3.4.2","3.4.1","3.4","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloflash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloflash/README.html