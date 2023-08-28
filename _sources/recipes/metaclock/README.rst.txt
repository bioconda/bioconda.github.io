:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaclock'
.. highlight: bash

metaclock
=========

.. conda:recipe:: metaclock
   :replaces_section_title:
   :noindex:

   A python package for facilitating strain\-level phylogenetic and molecular clock analysis

   :homepage: https://github.com/SegataLab/metaclock
   :license: A-GPL 3.0
   :recipe: /`metaclock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclock/meta.yaml>`_

   


.. conda:package:: metaclock

   |downloads_metaclock| |docker_metaclock|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends bowtie2: 
   :depends bzip2: 
   :depends cmseq: 
   :depends dendropy: 
   :depends ete3: 
   :depends mapdamage2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends perl-bioperl: 
   :depends prokka: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends raxml: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends trimal: 
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

      mamba install metaclock

   and update with::

      mamba update metaclock

  To create a new environment, run::

      mamba create --name myenvname metaclock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaclock:<tag>

   (see `metaclock/tags`_ for valid values for ``<tag>``)


.. |downloads_metaclock| image:: https://img.shields.io/conda/dn/bioconda/metaclock.svg?style=flat
   :target: https://anaconda.org/bioconda/metaclock
   :alt:   (downloads)
.. |docker_metaclock| image:: https://quay.io/repository/biocontainers/metaclock/status
   :target: https://quay.io/repository/biocontainers/metaclock
.. _`metaclock/tags`: https://quay.io/repository/biocontainers/metaclock?tab=tags


.. raw:: html

    <script>
        var package = "metaclock";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaclock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaclock/README.html