:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2fastx'
.. highlight: bash

bam2fastx
=========

.. conda:recipe:: bam2fastx
   :replaces_section_title:
   :noindex:

   Converting and demultiplexing of PacBio BAM files into gzipped fasta and fastq files

   :homepage: https://github.com/PacificBiosciences/bam2fastx
   :license: BSD-3-Clause-Clear
   :recipe: /`bam2fastx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fastx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fastx/meta.yaml>`_

   


.. conda:package:: bam2fastx

   |downloads_bam2fastx| |docker_bam2fastx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-8</code>,  <code>1.3.0-7</code>,  <code>1.3.0-6</code>,  <code>1.3.0-5</code>,  <code>1.3.0-4</code>,  </span></summary>
      

      ``3.0.0-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-8``,  ``1.3.0-7``,  ``1.3.0-6``,  ``1.3.0-5``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pbtk: ``>=3.1.*``
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

      mamba install bam2fastx

   and update with::

      mamba update bam2fastx

  To create a new environment, run::

      mamba create --name myenvname bam2fastx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bam2fastx:<tag>

   (see `bam2fastx/tags`_ for valid values for ``<tag>``)


.. |downloads_bam2fastx| image:: https://img.shields.io/conda/dn/bioconda/bam2fastx.svg?style=flat
   :target: https://anaconda.org/bioconda/bam2fastx
   :alt:   (downloads)
.. |docker_bam2fastx| image:: https://quay.io/repository/biocontainers/bam2fastx/status
   :target: https://quay.io/repository/biocontainers/bam2fastx
.. _`bam2fastx/tags`: https://quay.io/repository/biocontainers/bam2fastx?tab=tags


.. raw:: html

    <script>
        var package = "bam2fastx";
        var versions = ["3.0.0","1.3.1","1.3.1","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2fastx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2fastx/README.html