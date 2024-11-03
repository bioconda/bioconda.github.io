:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lotus2'
.. highlight: bash

lotus2
======

.. conda:recipe:: lotus2
   :replaces_section_title:
   :noindex:

   LotuS2 is a lightweight complete 16S\/18S\/ITS pipeline

   :homepage: http://lotus2.earlham.ac.uk/
   :developer docs: https://github.com/hildebra/lotus2/
   :license: GPL-3.0-or-later
   :recipe: /`lotus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01365-1`, biotools: :biotools:`lotus2`

   


.. conda:package:: lotus2

   |downloads_lotus2| |docker_lotus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.1-1</code>,  <code>2.34.1-0</code>,  <code>2.34-0</code>,  <code>2.32-1</code>,  <code>2.32-0</code>,  <code>2.31-0</code>,  <code>2.30-1</code>,  <code>2.30-0</code>,  <code>2.28.1-1</code>,  </span></summary>
      

      ``2.34.1-1``,  ``2.34.1-0``,  ``2.34-0``,  ``2.32-1``,  ``2.32-0``,  ``2.31-0``,  ``2.30-1``,  ``2.30-0``,  ``2.28.1-1``,  ``2.28.1-0``,  ``2.28-0``,  ``2.25-0``,  ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.21-0``,  ``2.19-0``,  ``2.17-0``,  ``2.16-0``,  ``2.14-0``,  ``2.12-1``,  ``2.12-0``,  ``2.11-0``,  ``2.09.2-0``,  ``2.09.1-0``,  ``2.09-0``,  ``2.08-0``,  ``2.07-0``,  ``2.06-0``,  ``2.05.1-0``,  ``2.04-1``,  ``2.04-0``,  ``2.02-0``,  ``2.01-1``,  ``2.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dada2: 
   :depends bioconductor-phyloseq: 
   :depends blast: 
   :depends cd-hit: 
   :depends clustalo: 
   :depends fasttree: 
   :depends hmmer: ``>=3.1``
   :depends infernal: 
   :depends iqtree: 
   :depends itsx: 
   :depends lambda: ``>=3,<4``
   :depends lca: ``>=0.25``
   :depends mafft: 
   :depends minimap2: 
   :depends perl: 
   :depends perl-getopt-long: 
   :depends pigz: 
   :depends r-base: 
   :depends r-dplyr: 
   :depends rdp_classifier: 
   :depends rtk: 
   :depends sdm: ``2.18``
   :depends swarm: 
   :depends unzip: 
   :depends usearch: ``>=12.0_beta,<13``
   :depends vsearch: 
   :depends wget: 
   :depends zip: 
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

      mamba install lotus2

   and update with::

      mamba update lotus2

  To create a new environment, run::

      mamba create --name myenvname lotus2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lotus2:<tag>

   (see `lotus2/tags`_ for valid values for ``<tag>``)


.. |downloads_lotus2| image:: https://img.shields.io/conda/dn/bioconda/lotus2.svg?style=flat
   :target: https://anaconda.org/bioconda/lotus2
   :alt:   (downloads)
.. |docker_lotus2| image:: https://quay.io/repository/biocontainers/lotus2/status
   :target: https://quay.io/repository/biocontainers/lotus2
.. _`lotus2/tags`: https://quay.io/repository/biocontainers/lotus2?tab=tags


.. raw:: html

    <script>
        var package = "lotus2";
        var versions = ["2.34.1","2.34.1","2.34","2.32","2.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lotus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lotus2/README.html