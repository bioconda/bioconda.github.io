:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dragonflye'
.. highlight: bash

dragonflye
==========

.. conda:recipe:: dragonflye
   :replaces_section_title:
   :noindex:

   Microbial assembly pipeline for Nanopore reads

   :homepage: https://github.com/rpetit3/dragonflye
   :license: GPL2
   :recipe: /`dragonflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragonflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragonflye/meta.yaml>`_
   :links: biotools: :biotools:`dragonflye`, usegalaxy-eu: :usegalaxy-eu:`dragonflye`

   


.. conda:package:: dragonflye

   |downloads_dragonflye| |docker_dragonflye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: ``>=0.4.2``
   :depends assembly-scan: ``>=1.0.0``
   :depends bwa: 
   :depends dnaapler: 
   :depends fastp: 
   :depends flye: ``>=2.9.2``
   :depends kmc: ``>=3.1``
   :depends medaka: ``>=1.11.0``
   :depends miniasm: ``>=0.3_r179``
   :depends nanoq: ``>=0.10.0``
   :depends perl: ``>=5.26``
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends pigz: ``>=2.6``
   :depends pilon: 
   :depends polypolish: ``>=0.6.0``
   :depends porechop: 
   :depends racon: ``>=1.5.0``
   :depends rasusa: ``>=1.0.0``
   :depends raven-assembler: ``>=1.8.3``
   :depends samclip: 
   :depends samtools: 
   :depends seqtk: ``>=1.4``
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

      mamba install dragonflye

   and update with::

      mamba update dragonflye

  To create a new environment, run::

      mamba create --name myenvname dragonflye

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dragonflye:<tag>

   (see `dragonflye/tags`_ for valid values for ``<tag>``)


.. |downloads_dragonflye| image:: https://img.shields.io/conda/dn/bioconda/dragonflye.svg?style=flat
   :target: https://anaconda.org/bioconda/dragonflye
   :alt:   (downloads)
.. |docker_dragonflye| image:: https://quay.io/repository/biocontainers/dragonflye/status
   :target: https://quay.io/repository/biocontainers/dragonflye
.. _`dragonflye/tags`: https://quay.io/repository/biocontainers/dragonflye?tab=tags


.. raw:: html

    <script>
        var package = "dragonflye";
        var versions = ["1.2.1","1.2.0","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dragonflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dragonflye/README.html