:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piranha-polio'
.. highlight: bash

piranha-polio
=============

.. conda:recipe:: piranha-polio
   :replaces_section_title:
   :noindex:

   Poliovirus Investigation Resource Automating Nanopore Haplotype Analysis

   :homepage: https://github.com/polio-nanopore/piranha
   :license: GPL3 / GPL-3.0-only
   :recipe: /`piranha-polio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha-polio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha-polio/meta.yaml>`_

   


.. conda:package:: piranha-polio

   |downloads_piranha-polio| |docker_piranha-polio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.5-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.10-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.11``
   :depends biopython: 
   :depends coreutils: ``>=9.1``
   :depends mafft: 
   :depends mako: ``>=1.2``
   :depends medaka: ``>=1.7.1``
   :depends minimap2: ``>=2.17``
   :depends numpy: ``<=1.23.5``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``<3.10``
   :depends samtools: ``>=1.11``
   :depends snakemake-minimal: 
   :depends snipit: 
   :depends tabix: ``>=1.11``
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

      mamba install piranha-polio

   and update with::

      mamba update piranha-polio

  To create a new environment, run::

      mamba create --name myenvname piranha-polio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piranha-polio:<tag>

   (see `piranha-polio/tags`_ for valid values for ``<tag>``)


.. |downloads_piranha-polio| image:: https://img.shields.io/conda/dn/bioconda/piranha-polio.svg?style=flat
   :target: https://anaconda.org/bioconda/piranha-polio
   :alt:   (downloads)
.. |docker_piranha-polio| image:: https://quay.io/repository/biocontainers/piranha-polio/status
   :target: https://quay.io/repository/biocontainers/piranha-polio
.. _`piranha-polio/tags`: https://quay.io/repository/biocontainers/piranha-polio?tab=tags


.. raw:: html

    <script>
        var package = "piranha-polio";
        var versions = ["1.3.1","1.3","1.2.5","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piranha-polio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piranha-polio/README.html