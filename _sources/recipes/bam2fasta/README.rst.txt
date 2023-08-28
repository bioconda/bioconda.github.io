:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2fasta'
.. highlight: bash

bam2fasta
=========

.. conda:recipe:: bam2fasta
   :replaces_section_title:
   :noindex:

   bam2fasta\: cli tool to convert bam to fastas

   :homepage: https://github.com/czbiohub/bam2fasta
   :license: MIT / MIT
   :recipe: /`bam2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fasta/meta.yaml>`_
   :links: biotools: :biotools:`bam2fasta`

   


.. conda:package:: bam2fasta

   |downloads_bam2fasta| |docker_bam2fasta|

   :versions:
      
      

      ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pandas: ``>=0.24.1``
   :depends pathos: ``>=0.2.5``
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends screed: ``>=0.9``
   :depends tqdm: ``>=4.36.1``
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

      mamba install bam2fasta

   and update with::

      mamba update bam2fasta

  To create a new environment, run::

      mamba create --name myenvname bam2fasta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bam2fasta:<tag>

   (see `bam2fasta/tags`_ for valid values for ``<tag>``)


.. |downloads_bam2fasta| image:: https://img.shields.io/conda/dn/bioconda/bam2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/bam2fasta
   :alt:   (downloads)
.. |docker_bam2fasta| image:: https://quay.io/repository/biocontainers/bam2fasta/status
   :target: https://quay.io/repository/biocontainers/bam2fasta
.. _`bam2fasta/tags`: https://quay.io/repository/biocontainers/bam2fasta?tab=tags


.. raw:: html

    <script>
        var package = "bam2fasta";
        var versions = ["1.0.8","1.0.7","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2fasta/README.html