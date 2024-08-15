:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harpy'
.. highlight: bash

harpy
=====

.. conda:recipe:: harpy
   :replaces_section_title:
   :noindex:

   Process raw haplotagging data\, from raw sequences to phased haplotypes.

   :homepage: https://github.com/pdimens/harpy
   :documentation: https://pdimens.github.io/harpy
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`harpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy/meta.yaml>`_

   Harpy is a command\-line tool to easily process haplotag or 10x linked\-read data. It uses
   Snakemake under the hood to execute different workflows \(quality control\, trimming\, 
   alignment\, variant calling\, phasing\, etc.\)\, but the user is rarely\, if ever\, exposed
   to Snakemake directly. With an emphasis on user\-friendliness\, parallelization\, transparency\,
   and reproducibility\, Harpy aims to quickly handle data processing so that you can focus more
   on analyzing your data. 



.. conda:package:: harpy

   |downloads_harpy| |docker_harpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.3-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.6-0``,  ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends apptainer: 
   :depends bcftools: ``1.20.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich-click: 
   :depends samtools: ``1.20.*``
   :depends seqtk: 
   :depends snakemake-minimal: ``>7``
   :depends tabix: 
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

      mamba install harpy

   and update with::

      mamba update harpy

  To create a new environment, run::

      mamba create --name myenvname harpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harpy:<tag>

   (see `harpy/tags`_ for valid values for ``<tag>``)


.. |downloads_harpy| image:: https://img.shields.io/conda/dn/bioconda/harpy.svg?style=flat
   :target: https://anaconda.org/bioconda/harpy
   :alt:   (downloads)
.. |docker_harpy| image:: https://quay.io/repository/biocontainers/harpy/status
   :target: https://quay.io/repository/biocontainers/harpy
.. _`harpy/tags`: https://quay.io/repository/biocontainers/harpy?tab=tags


.. raw:: html

    <script>
        var package = "harpy";
        var versions = ["1.6","1.5","1.4.2","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harpy/README.html