:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic'
.. highlight: bash

artic
=====

.. conda:recipe:: artic
   :replaces_section_title:
   :noindex:

   ARTIC pipeline \- a bioinformatics pipeline for working with virus sequencing data sequenced with nanopore.

   :homepage: https://github.com/artic-network/fieldbioinformatics
   :documentation: https://artic.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`artic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic/meta.yaml>`_

   


.. conda:package:: artic

   |downloads_artic| |docker_artic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0_rc2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends biopython: 
   :depends bwa: 
   :depends clair3: 
   :depends clint: 
   :depends cyvcf2: 
   :depends htslib: 
   :depends minimap2: 
   :depends multiqc: 
   :depends muscle: ``<5.1``
   :depends pandas: 
   :depends pyfaidx: ``0.6.0.*``
   :depends pysam: 
   :depends pytest: 
   :depends python: ``3.9``
   :depends requests: 
   :depends samtools: 
   :depends tqdm: 
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

      mamba install artic

   and update with::

      mamba update artic

  To create a new environment, run::

      mamba create --name myenvname artic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/artic:<tag>

   (see `artic/tags`_ for valid values for ``<tag>``)


.. |downloads_artic| image:: https://img.shields.io/conda/dn/bioconda/artic.svg?style=flat
   :target: https://anaconda.org/bioconda/artic
   :alt:   (downloads)
.. |docker_artic| image:: https://quay.io/repository/biocontainers/artic/status
   :target: https://quay.io/repository/biocontainers/artic
.. _`artic/tags`: https://quay.io/repository/biocontainers/artic?tab=tags


.. raw:: html

    <script>
        var package = "artic";
        var versions = ["1.5.3","1.5.2","1.5.1","1.2.4","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic/README.html