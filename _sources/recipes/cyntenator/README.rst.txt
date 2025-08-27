:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyntenator'
.. highlight: bash

cyntenator
==========

.. conda:recipe:: cyntenator
   :replaces_section_title:
   :noindex:

   progressive gene order alignments

   :homepage: https://github.com/dieterich-lab/cyntenator
   :license: GPL
   :recipe: /`cyntenator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyntenator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyntenator/meta.yaml>`_

   Cyntenator identifies conserved syntenic blocks between multiple genomes. The program computes Smith\-Waterman alignments of sequences\, whereby the alphabet consists of all annotated genes and the scoring system is defined by protein sequence similarities and distances between species in a phylogenetic tree. The algorithm is an extension of the Syntenator partial order aligner\, described in Rödelsperger and Dieterich\, 2008.


.. conda:package:: cyntenator

   |downloads_cyntenator| |docker_cyntenator|

   :versions:
      
      

      ``0.0.r2326-4``,  ``0.0.r2326-3``,  ``0.0.r2326-2``,  ``0.0.r2326-1``,  ``0.0.r2326-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install cyntenator

   and update with::

      mamba update cyntenator

  To create a new environment, run::

      mamba create --name myenvname cyntenator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cyntenator:<tag>

   (see `cyntenator/tags`_ for valid values for ``<tag>``)


.. |downloads_cyntenator| image:: https://img.shields.io/conda/dn/bioconda/cyntenator.svg?style=flat
   :target: https://anaconda.org/bioconda/cyntenator
   :alt:   (downloads)
.. |docker_cyntenator| image:: https://quay.io/repository/biocontainers/cyntenator/status
   :target: https://quay.io/repository/biocontainers/cyntenator
.. _`cyntenator/tags`: https://quay.io/repository/biocontainers/cyntenator?tab=tags


.. raw:: html

    <script>
        var package = "cyntenator";
        var versions = ["0.0.r2326","0.0.r2326","0.0.r2326","0.0.r2326","0.0.r2326"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyntenator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyntenator/README.html