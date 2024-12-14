:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saccharis'
.. highlight: bash

saccharis
=========

.. conda:recipe:: saccharis
   :replaces_section_title:
   :noindex:

   A CAZyme discovery tool. Easily create phylogenetic trees from FASTA files and CAZyme families.

   :homepage: https://github.com/saccharis/SACCHARIS_2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`saccharis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis/meta.yaml>`_

   Bioinformatics pipeline to automate phylogenetic analysis of CAZyme families in FASTA sequences via creation of phylogenetic trees.


.. conda:package:: saccharis

   |downloads_saccharis| |docker_saccharis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.1.dev21-9</code>,  <code>2.0.1.dev21-8</code>,  <code>2.0.1.dev21-7</code>,  </span></summary>
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.1.dev21-9``,  ``2.0.1.dev21-8``,  ``2.0.1.dev21-7``,  ``2.0.1.dev21-6``,  ``2.0.1.dev21-5``,  ``2.0.1.dev21-4``,  ``2.0.1.dev21-3``,  ``2.0.1.dev21-2``,  ``2.0.1.dev21-0``,  ``2.0.0.dev21-2``,  ``2.0.0.dev21-0``,  ``2.0.0.dev20-0``,  ``2.0.0.dev19-7``,  ``2.0.0.dev19-0``,  ``2.0.0.dev18-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: ``>=4.11.1``
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.*``
   :depends dbcan: ``<4``
   :depends diamond: ``>=2.0.15``
   :depends fasttree: ``>=2.1.11``
   :depends hmmer: ``>=3.3``
   :depends lxml: ``>=4.9.0``
   :depends modeltest-ng: ``>=0.1.7``
   :depends muscle: ``>=3.8``
   :depends ncbi-datasets-pylib: ``>=14.*``
   :depends psutil: 
   :depends pyqt: ``>=5,<6``
   :depends pyqt5-sip: ``>=12.11``
   :depends python: ``>=3.11``
   :depends python-dotenv: ``>=0.20.0``
   :depends raxml: ``>=8.2.12``
   :depends raxml-ng: ``>=1.2``
   :depends requests: ``>=2.28.0``
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

      mamba install saccharis

   and update with::

      mamba update saccharis

  To create a new environment, run::

      mamba create --name myenvname saccharis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/saccharis:<tag>

   (see `saccharis/tags`_ for valid values for ``<tag>``)


.. |downloads_saccharis| image:: https://img.shields.io/conda/dn/bioconda/saccharis.svg?style=flat
   :target: https://anaconda.org/bioconda/saccharis
   :alt:   (downloads)
.. |docker_saccharis| image:: https://quay.io/repository/biocontainers/saccharis/status
   :target: https://quay.io/repository/biocontainers/saccharis
.. _`saccharis/tags`: https://quay.io/repository/biocontainers/saccharis?tab=tags


.. raw:: html

    <script>
        var package = "saccharis";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saccharis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saccharis/README.html