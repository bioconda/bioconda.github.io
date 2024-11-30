:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacluster'
.. highlight: bash

metacluster
===========

.. conda:recipe:: metacluster
   :replaces_section_title:
   :noindex:

   MetaCluster5.1 is a new software for binning short pair\-end reads

   :homepage: http://i.cs.hku.hk/~alse/MetaCluster/
   :license: GPLv2
   :recipe: /`metacluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacluster/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts397`

   MetaCluster5.1 is an unsupervised binning method that can \(1\) samples with
   low\-abundance species\, or \(2\) samples \(even with high\-abundance\) with many
   extremely\-low\-abundance species. The input file should be in fasta format.
   Every odd\-number read and its next read are supposed to be pair\-end reads.



.. conda:package:: metacluster

   |downloads_metacluster| |docker_metacluster|

   :versions:
      
      

      ``5.1-6``,  ``5.1-5``,  ``5.1-4``,  ``5.1-3``,  ``5.1-2``,  ``5.1-1``,  ``5.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install metacluster

   and update with::

      mamba update metacluster

  To create a new environment, run::

      mamba create --name myenvname metacluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metacluster:<tag>

   (see `metacluster/tags`_ for valid values for ``<tag>``)


.. |downloads_metacluster| image:: https://img.shields.io/conda/dn/bioconda/metacluster.svg?style=flat
   :target: https://anaconda.org/bioconda/metacluster
   :alt:   (downloads)
.. |docker_metacluster| image:: https://quay.io/repository/biocontainers/metacluster/status
   :target: https://quay.io/repository/biocontainers/metacluster
.. _`metacluster/tags`: https://quay.io/repository/biocontainers/metacluster?tab=tags


.. raw:: html

    <script>
        var package = "metacluster";
        var versions = ["5.1","5.1","5.1","5.1","5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacluster/README.html