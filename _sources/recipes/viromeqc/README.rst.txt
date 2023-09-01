:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viromeqc'
.. highlight: bash

viromeqc
========

.. conda:recipe:: viromeqc
   :replaces_section_title:
   :noindex:

   Provides an enrichment score for VLP viromes with respect to metagenomes

   :homepage: https://github.com/SegataLab/viromeqc
   :license: MIT
   :recipe: /`viromeqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viromeqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viromeqc/meta.yaml>`_

   


.. conda:package:: viromeqc

   |downloads_viromeqc| |docker_viromeqc|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends diamond: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends samtools: 
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

      mamba install viromeqc

   and update with::

      mamba update viromeqc

  To create a new environment, run::

      mamba create --name myenvname viromeqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viromeqc:<tag>

   (see `viromeqc/tags`_ for valid values for ``<tag>``)


.. |downloads_viromeqc| image:: https://img.shields.io/conda/dn/bioconda/viromeqc.svg?style=flat
   :target: https://anaconda.org/bioconda/viromeqc
   :alt:   (downloads)
.. |docker_viromeqc| image:: https://quay.io/repository/biocontainers/viromeqc/status
   :target: https://quay.io/repository/biocontainers/viromeqc
.. _`viromeqc/tags`: https://quay.io/repository/biocontainers/viromeqc?tab=tags


.. raw:: html

    <script>
        var package = "viromeqc";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viromeqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viromeqc/README.html