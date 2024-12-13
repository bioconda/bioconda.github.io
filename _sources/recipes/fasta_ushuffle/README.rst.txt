:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta_ushuffle'
.. highlight: bash

fasta_ushuffle
==============

.. conda:recipe:: fasta_ushuffle
   :replaces_section_title:
   :noindex:

   a wrapper for uShuffle

   :homepage: https://github.com/agordon/fasta_ushuffle
   :license: custom
   :recipe: /`fasta_ushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_ushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_ushuffle/meta.yaml>`_

   


.. conda:package:: fasta_ushuffle

   |downloads_fasta_ushuffle| |docker_fasta_ushuffle|

   :versions:
      
      

      ``0.2-7``,  ``0.2-6``,  ``0.2-5``,  ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install fasta_ushuffle

   and update with::

      mamba update fasta_ushuffle

  To create a new environment, run::

      mamba create --name myenvname fasta_ushuffle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fasta_ushuffle:<tag>

   (see `fasta_ushuffle/tags`_ for valid values for ``<tag>``)


.. |downloads_fasta_ushuffle| image:: https://img.shields.io/conda/dn/bioconda/fasta_ushuffle.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta_ushuffle
   :alt:   (downloads)
.. |docker_fasta_ushuffle| image:: https://quay.io/repository/biocontainers/fasta_ushuffle/status
   :target: https://quay.io/repository/biocontainers/fasta_ushuffle
.. _`fasta_ushuffle/tags`: https://quay.io/repository/biocontainers/fasta_ushuffle?tab=tags


.. raw:: html

    <script>
        var package = "fasta_ushuffle";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta_ushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta_ushuffle/README.html