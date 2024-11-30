:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microhapulator'
.. highlight: bash

microhapulator
==============

.. conda:recipe:: microhapulator
   :replaces_section_title:
   :noindex:

   Tools for empirical microhaplotype calling\, forensic interpretation\, and simulation.

   :homepage: https://github.com/bioforensics/MicroHapulator/
   :license: BSD / BSD-3-Clause
   :recipe: /`microhapulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapulator/meta.yaml>`_

   


.. conda:package:: microhapulator

   |downloads_microhapulator| |docker_microhapulator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.1-0</code>,  <code>0.5-1</code>,  </span></summary>
      

      ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends fastqc: ``>=0.11.9``
   :depends flash: ``>=1.2``
   :depends happer: ``>=0.1``
   :depends insilicoseq: ``>=1.5.4,<2.0``
   :depends jsonschema: ``>=4.0``
   :depends matplotlib-base: ``>=3.0``
   :depends microhapdb: ``>=0.10.1``
   :depends minimap2: ``>=2.25``
   :depends multiqc: ``>=1.14``
   :depends nbformat: ``>=5.0,<5.6``
   :depends numpy: ``>=1.19``
   :depends pandas: ``>1.0``
   :depends pulp: ``2.3.1``
   :depends pysam: ``>=0.15.2``
   :depends python: ``<3.12``
   :depends samtools: ``>=1.12``
   :depends scipy: ``>=1.7``
   :depends seaborn-base: ``>=0.13.2``
   :depends snakemake-minimal: ``>=7.15.2,<8.0``
   :depends termgraph: ``>=0.5``
   :depends tqdm: ``>=4.0``
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

      mamba install microhapulator

   and update with::

      mamba update microhapulator

  To create a new environment, run::

      mamba create --name myenvname microhapulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microhapulator:<tag>

   (see `microhapulator/tags`_ for valid values for ``<tag>``)


.. |downloads_microhapulator| image:: https://img.shields.io/conda/dn/bioconda/microhapulator.svg?style=flat
   :target: https://anaconda.org/bioconda/microhapulator
   :alt:   (downloads)
.. |docker_microhapulator| image:: https://quay.io/repository/biocontainers/microhapulator/status
   :target: https://quay.io/repository/biocontainers/microhapulator
.. _`microhapulator/tags`: https://quay.io/repository/biocontainers/microhapulator?tab=tags


.. raw:: html

    <script>
        var package = "microhapulator";
        var versions = ["0.8.4","0.8.3","0.8.2","0.8.1","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapulator/README.html