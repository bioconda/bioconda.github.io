:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meraculous'
.. highlight: bash

meraculous
==========

.. conda:recipe:: meraculous
   :replaces_section_title:
   :noindex:

   Meraculous is a whole genome assembler for Next Generation Sequencing data\, geared for large genomes. It\'s hybrid k\-mer\/read\-based approach capitalizes on the high accuracy of Illumina sequence by eschewing an explicit error correction step which we argue to be redundant with the assembly process. Meraculous achieves high performance with large datasets by utilizing lightweight data structures and multi\-threaded parallelization\, allowing to assemble human\-sized genomes on a high\-cpu cluster in under a day. The process pipeline implements a highly transparent and portable model of job control and monitoring where different assembly stages can be executed and re\-executed separately or in unison on a wide variety of architectures.


   :homepage: https://jgi.doe.gov/data-and-tools/meraculous/
   :license: GPLv3
   :recipe: /`meraculous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meraculous/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0023501`

   


.. conda:package:: meraculous

   |downloads_meraculous| |docker_meraculous|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.6-6</code>,  <code>2.2.6-5</code>,  <code>2.2.6-4</code>,  <code>2.2.6-3</code>,  <code>2.2.6-2</code>,  <code>2.2.6-1</code>,  <code>2.2.6-0</code>,  <code>2.2.5.1.1.ga103cd6-0</code>,  <code>2.2.5-0</code>,  </span></summary>
      

      ``2.2.6-6``,  ``2.2.6-5``,  ``2.2.6-4``,  ``2.2.6-3``,  ``2.2.6-2``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5.1.1.ga103cd6-0``,  ``2.2.5-0``,  ``2.2.4-1``,  ``2.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends gnuplot: ``>=3.7``
   :depends libgcc-ng: ``>=12``
   :depends libgd: ``>=2.0``
   :depends libgd: ``>=2.3.3,<2.4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-log-log4perl: ``>=1.31``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install meraculous

   and update with::

      mamba update meraculous

  To create a new environment, run::

      mamba create --name myenvname meraculous

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meraculous:<tag>

   (see `meraculous/tags`_ for valid values for ``<tag>``)


.. |downloads_meraculous| image:: https://img.shields.io/conda/dn/bioconda/meraculous.svg?style=flat
   :target: https://anaconda.org/bioconda/meraculous
   :alt:   (downloads)
.. |docker_meraculous| image:: https://quay.io/repository/biocontainers/meraculous/status
   :target: https://quay.io/repository/biocontainers/meraculous
.. _`meraculous/tags`: https://quay.io/repository/biocontainers/meraculous?tab=tags


.. raw:: html

    <script>
        var package = "meraculous";
        var versions = ["2.2.6","2.2.6","2.2.6","2.2.6","2.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meraculous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meraculous/README.html