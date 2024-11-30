:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secapr'
.. highlight: bash

secapr
======

.. conda:recipe:: secapr
   :replaces_section_title:
   :noindex:

   Process sequence\-capture FASTQ files into alignments for phylogenetic analyses. Integrates allele phasing.

   :homepage: https://github.com/AntonelliLab/seqcap_processor
   :license: MIT
   :recipe: /`secapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr/meta.yaml>`_

   


.. conda:package:: secapr

   |downloads_secapr| |docker_secapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.8-0</code>,  <code>2.2.6-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.1-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``2.2.8-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.1-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.1.15-2``,  ``1.1.15-1``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.10-2``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.4-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends emboss: 
   :depends fastqc: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: 
   :depends pandas: 
   :depends python: 
   :depends samtools: ``1.9.*``
   :depends spades: 
   :depends trimal: 
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

      mamba install secapr

   and update with::

      mamba update secapr

  To create a new environment, run::

      mamba create --name myenvname secapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/secapr:<tag>

   (see `secapr/tags`_ for valid values for ``<tag>``)


.. |downloads_secapr| image:: https://img.shields.io/conda/dn/bioconda/secapr.svg?style=flat
   :target: https://anaconda.org/bioconda/secapr
   :alt:   (downloads)
.. |docker_secapr| image:: https://quay.io/repository/biocontainers/secapr/status
   :target: https://quay.io/repository/biocontainers/secapr
.. _`secapr/tags`: https://quay.io/repository/biocontainers/secapr?tab=tags


.. raw:: html

    <script>
        var package = "secapr";
        var versions = ["2.2.8","2.2.6","2.2.5","2.2.4","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secapr/README.html