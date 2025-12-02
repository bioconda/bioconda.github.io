:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogen-profiler'
.. highlight: bash

pathogen-profiler
=================

.. conda:recipe:: pathogen-profiler
   :replaces_section_title:
   :noindex:

   Library giving access to classes and functions to create a profiling tool to look for mutations from NGS data.

   :homepage: https://github.com/jodyphelan/pathogen-profiler
   :license: GPL3
   :recipe: /`pathogen-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler/meta.yaml>`_

   


.. conda:package:: pathogen-profiler

   |downloads_pathogen-profiler| |docker_pathogen-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.0-0</code>,  <code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.8.0-0</code>,  <code>4.7.0-0</code>,  <code>4.6.0-0</code>,  <code>4.5.1-0</code>,  </span></summary>
      

      ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.8.0-0``,  ``4.7.0-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-1``,  ``4.5.0-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.12``
   :depends bedtools: 
   :depends bwa: 
   :depends delly: ``1.3.3.*``
   :depends dsk: ``>=2.2``
   :depends filelock: 
   :depends freebayes: ``1.3.6.*``
   :depends gatk4: 
   :depends git: 
   :depends itol-config: 
   :depends joblib: ``>=1.3.0``
   :depends kmc: ``>=3.2.1``
   :depends lofreq: ``>=2.1.5``
   :depends minimap2: ``>=2.28``
   :depends openjdk: ``>=11.0.8``
   :depends pandas: 
   :depends parallel: 
   :depends pilon: ``>=1.24``
   :depends pydantic: ``>=2.6``
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends requests: 
   :depends rich-argparse: 
   :depends samclip: 
   :depends samtools: ``>=1.12``
   :depends seqkit: 
   :depends snpeff: ``5.2.*``
   :depends sourmash: 
   :depends sylph: 
   :depends tomli: 
   :depends tqdm: 
   :depends trimmomatic: 
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

      mamba install pathogen-profiler

   and update with::

      mamba update pathogen-profiler

  To create a new environment, run::

      mamba create --name myenvname pathogen-profiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathogen-profiler:<tag>

   (see `pathogen-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogen-profiler| image:: https://img.shields.io/conda/dn/bioconda/pathogen-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogen-profiler
   :alt:   (downloads)
.. |docker_pathogen-profiler| image:: https://quay.io/repository/biocontainers/pathogen-profiler/status
   :target: https://quay.io/repository/biocontainers/pathogen-profiler
.. _`pathogen-profiler/tags`: https://quay.io/repository/biocontainers/pathogen-profiler?tab=tags


.. raw:: html

    <script>
        var package = "pathogen-profiler";
        var versions = ["5.1.0","5.0.3","5.0.2","5.0.1","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogen-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogen-profiler/README.html