:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kat'
.. highlight: bash

kat
===

.. conda:recipe:: kat
   :replaces_section_title:
   :noindex:

   KAT is a suite of tools that analyse jellyfish hashes or sequence files \(fasta or fastq\) using kmer counts.

   :homepage: https://github.com/TGAC/KAT
   :documentation: https://kat.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat/meta.yaml>`_
   :links: biotools: :biotools:`kat`, doi: :doi:`10.1093/bioinformatics/btw663`

   


.. conda:package:: kat

   |downloads_kat| |docker_kat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-5</code>,  <code>2.4.2-3</code>,  <code>2.4.2-2</code>,  <code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.4.1-3</code>,  <code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.0-3</code>,  </span></summary>
      

      ``2.4.2-5``,  ``2.4.2-3``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.0.8-4``,  ``2.0.8-3``,  ``2.0.8-2``,  ``2.0.8-1``,  ``2.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``<1.84.0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends scipy: 
   :depends tabulate: 
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

      mamba install kat

   and update with::

      mamba update kat

  To create a new environment, run::

      mamba create --name myenvname kat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kat:<tag>

   (see `kat/tags`_ for valid values for ``<tag>``)


.. |downloads_kat| image:: https://img.shields.io/conda/dn/bioconda/kat.svg?style=flat
   :target: https://anaconda.org/bioconda/kat
   :alt:   (downloads)
.. |docker_kat| image:: https://quay.io/repository/biocontainers/kat/status
   :target: https://quay.io/repository/biocontainers/kat
.. _`kat/tags`: https://quay.io/repository/biocontainers/kat?tab=tags


.. raw:: html

    <script>
        var package = "kat";
        var versions = ["2.4.2","2.4.2","2.4.2","2.4.2","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kat/README.html