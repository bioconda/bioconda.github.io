:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome_updater'
.. highlight: bash

genome_updater
==============

.. conda:recipe:: genome_updater
   :replaces_section_title:
   :noindex:

   genome\_updater\: bash script to download\/update snapshots of refseq\/genbank

   :homepage: https://github.com/pirovc/genome_updater
   :license: MIT / MIT License
   :recipe: /`genome_updater <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater/meta.yaml>`_

   Bash script to download\/update snapshots of files from NCBI genomes repository 
   \(refseq\/genbank\) with track of changes and without redundancy  



.. conda:package:: genome_updater

   |downloads_genome_updater| |docker_genome_updater|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends coreutils: 
   :depends curl: 
   :depends findutils: 
   :depends gawk: 
   :depends parallel: 
   :depends tar: 
   :depends wget: 
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

      mamba install genome_updater

   and update with::

      mamba update genome_updater

  To create a new environment, run::

      mamba create --name myenvname genome_updater

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genome_updater:<tag>

   (see `genome_updater/tags`_ for valid values for ``<tag>``)


.. |downloads_genome_updater| image:: https://img.shields.io/conda/dn/bioconda/genome_updater.svg?style=flat
   :target: https://anaconda.org/bioconda/genome_updater
   :alt:   (downloads)
.. |docker_genome_updater| image:: https://quay.io/repository/biocontainers/genome_updater/status
   :target: https://quay.io/repository/biocontainers/genome_updater
.. _`genome_updater/tags`: https://quay.io/repository/biocontainers/genome_updater?tab=tags


.. raw:: html

    <script>
        var package = "genome_updater";
        var versions = ["0.6.3","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome_updater/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome_updater/README.html