:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq_utils'
.. highlight: bash

fastq_utils
===========

.. conda:recipe:: fastq_utils
   :replaces_section_title:
   :noindex:

   Validation and manipulation of FASTQ files\, scRNA\-seq barcode pre\-processing and UMI quantification.

   :homepage: https://github.com/nunofonseca/fastq_utils
   :license: GPL / GPL-3.0-only
   :recipe: /`fastq_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils/meta.yaml>`_

   


.. conda:package:: fastq_utils

   |downloads_fastq_utils| |docker_fastq_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.25.2-1</code>,  <code>0.25.2-0</code>,  <code>0.25.1-1</code>,  <code>0.25.1-0</code>,  <code>0.24.1-1</code>,  <code>0.24.1-0</code>,  <code>0.24.0-0</code>,  <code>0.23.0-0</code>,  <code>0.22.1-0</code>,  </span></summary>
      

      ``0.25.2-1``,  ``0.25.2-0``,  ``0.25.1-1``,  ``0.25.1-0``,  ``0.24.1-1``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.18.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends samtools: 
   :depends zlib: 
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

      mamba install fastq_utils

   and update with::

      mamba update fastq_utils

  To create a new environment, run::

      mamba create --name myenvname fastq_utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq_utils:<tag>

   (see `fastq_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq_utils| image:: https://img.shields.io/conda/dn/bioconda/fastq_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq_utils
   :alt:   (downloads)
.. |docker_fastq_utils| image:: https://quay.io/repository/biocontainers/fastq_utils/status
   :target: https://quay.io/repository/biocontainers/fastq_utils
.. _`fastq_utils/tags`: https://quay.io/repository/biocontainers/fastq_utils?tab=tags


.. raw:: html

    <script>
        var package = "fastq_utils";
        var versions = ["0.25.2","0.25.2","0.25.1","0.25.1","0.24.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq_utils/README.html