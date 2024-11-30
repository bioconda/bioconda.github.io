:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs_te_mapper2'
.. highlight: bash

ngs_te_mapper2
==============

.. conda:recipe:: ngs_te_mapper2
   :replaces_section_title:
   :noindex:

   A program to identify transposable element insertions using next generation sequencing data.

   :homepage: https://github.com/bergmanlab/ngs_te_mapper2
   :license: BSD
   :recipe: /`ngs_te_mapper2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs_te_mapper2/meta.yaml>`_

   


.. conda:package:: ngs_te_mapper2

   |downloads_ngs_te_mapper2| |docker_ngs_te_mapper2|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends biopython: 
   :depends bwa: 
   :depends minimap2: 
   :depends numpy: 
   :depends pip: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends repeatmasker: ``4.0.7.*``
   :depends samtools: ``>=1.9``
   :depends seqtk: 
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

      mamba install ngs_te_mapper2

   and update with::

      mamba update ngs_te_mapper2

  To create a new environment, run::

      mamba create --name myenvname ngs_te_mapper2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngs_te_mapper2:<tag>

   (see `ngs_te_mapper2/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs_te_mapper2| image:: https://img.shields.io/conda/dn/bioconda/ngs_te_mapper2.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs_te_mapper2
   :alt:   (downloads)
.. |docker_ngs_te_mapper2| image:: https://quay.io/repository/biocontainers/ngs_te_mapper2/status
   :target: https://quay.io/repository/biocontainers/ngs_te_mapper2
.. _`ngs_te_mapper2/tags`: https://quay.io/repository/biocontainers/ngs_te_mapper2?tab=tags


.. raw:: html

    <script>
        var package = "ngs_te_mapper2";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs_te_mapper2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs_te_mapper2/README.html