:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqverify'
.. highlight: bash

seqverify
=========

.. conda:recipe:: seqverify
   :replaces_section_title:
   :noindex:

   Seqverify analyzes whole genome sequencing data for gene\-editing verification.

   :homepage: https://github.com/mpiersonsmela/SeqVerify
   :license: GPL-3.0
   :recipe: /`seqverify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqverify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqverify/meta.yaml>`_

   


.. conda:package:: seqverify

   |downloads_seqverify| |docker_seqverify|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends bcftools: 
   :depends blast: 
   :depends bwa: 
   :depends cnvpytor: 
   :depends htslib: 
   :depends idna: 
   :depends igv: ``2.13.2.*``
   :depends kraken2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openjdk: ``11.*``
   :depends pip: 
   :depends python: ``3.10.*``
   :depends samtools: 
   :depends scipy: 
   :depends snpeff: ``5.1.*``
   :depends snpsift: ``4.3.1t.*``
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

      mamba install seqverify

   and update with::

      mamba update seqverify

  To create a new environment, run::

      mamba create --name myenvname seqverify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqverify:<tag>

   (see `seqverify/tags`_ for valid values for ``<tag>``)


.. |downloads_seqverify| image:: https://img.shields.io/conda/dn/bioconda/seqverify.svg?style=flat
   :target: https://anaconda.org/bioconda/seqverify
   :alt:   (downloads)
.. |docker_seqverify| image:: https://quay.io/repository/biocontainers/seqverify/status
   :target: https://quay.io/repository/biocontainers/seqverify
.. _`seqverify/tags`: https://quay.io/repository/biocontainers/seqverify?tab=tags


.. raw:: html

    <script>
        var package = "seqverify";
        var versions = ["1.1.0","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqverify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqverify/README.html