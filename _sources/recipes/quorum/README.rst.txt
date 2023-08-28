:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quorum'
.. highlight: bash

quorum
======

.. conda:recipe:: quorum
   :replaces_section_title:
   :noindex:

   QuorUM \(Quality Optimized Reads from the University of Maryland\) is an error corrector for Illumina reads. It is distributed and used with MaSuRCA\, or it can be used independently.

   :homepage: http://www.genome.umd.edu/quorum.html
   :license: GPLv3
   :recipe: /`quorum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quorum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quorum/meta.yaml>`_

   


.. conda:package:: quorum

   |downloads_quorum| |docker_quorum|

   :versions:
      
      

      ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends kmer-jellyfish: ``2.*``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: 
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

      mamba install quorum

   and update with::

      mamba update quorum

  To create a new environment, run::

      mamba create --name myenvname quorum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quorum:<tag>

   (see `quorum/tags`_ for valid values for ``<tag>``)


.. |downloads_quorum| image:: https://img.shields.io/conda/dn/bioconda/quorum.svg?style=flat
   :target: https://anaconda.org/bioconda/quorum
   :alt:   (downloads)
.. |docker_quorum| image:: https://quay.io/repository/biocontainers/quorum/status
   :target: https://quay.io/repository/biocontainers/quorum
.. _`quorum/tags`: https://quay.io/repository/biocontainers/quorum?tab=tags


.. raw:: html

    <script>
        var package = "quorum";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quorum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quorum/README.html