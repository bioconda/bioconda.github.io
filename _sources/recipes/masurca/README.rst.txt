:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'masurca'
.. highlight: bash

masurca
=======

.. conda:recipe:: masurca
   :replaces_section_title:
   :noindex:

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software.

   :homepage: https://masurca.blogspot.co.uk
   :documentation: https://github.com/alekseyzimin/masurca/blob/v4.1.3/README.md
   
   :developer docs: https://github.com/alekseyzimin/masurca
   :license: GPL3 / GPL-3.0-only
   :recipe: /`masurca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca/meta.yaml>`_
   :links: biotools: :biotools:`masurca`, doi: :doi:`10.1093/bioinformatics/btt476`

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software. MaSuRCA requires Illumina data\, and supports third\-generation PacBio\/Nanopore MinION reads for hybrid assembly.


.. conda:package:: masurca

   |downloads_masurca| |docker_masurca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-2</code>,  <code>4.1.1-1</code>,  <code>4.1.1-0</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.9-1</code>,  <code>4.0.9-0</code>,  </span></summary>
      

      ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-2``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.9-1``,  ``4.0.9-0``,  ``4.0.8-1``,  ``4.0.8-0``,  ``4.0.7-1``,  ``4.0.7-0``,  ``4.0.6-0``,  ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bwa: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends flye: 
   :depends grep: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: 
   :depends perl: 
   :depends yaggo: ``>=1.5.10,<1.6.0a0``
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

      mamba install masurca

   and update with::

      mamba update masurca

  To create a new environment, run::

      mamba create --name myenvname masurca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/masurca:<tag>

   (see `masurca/tags`_ for valid values for ``<tag>``)


.. |downloads_masurca| image:: https://img.shields.io/conda/dn/bioconda/masurca.svg?style=flat
   :target: https://anaconda.org/bioconda/masurca
   :alt:   (downloads)
.. |docker_masurca| image:: https://quay.io/repository/biocontainers/masurca/status
   :target: https://quay.io/repository/biocontainers/masurca
.. _`masurca/tags`: https://quay.io/repository/biocontainers/masurca?tab=tags


.. raw:: html

    <script>
        var package = "masurca";
        var versions = ["4.1.3","4.1.2","4.1.1","4.1.1","4.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/masurca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/masurca/README.html