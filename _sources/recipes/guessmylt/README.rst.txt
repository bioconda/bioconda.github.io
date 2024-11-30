:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guessmylt'
.. highlight: bash

guessmylt
=========

.. conda:recipe:: guessmylt
   :replaces_section_title:
   :noindex:

   Software to guess the RNA\-Seq library type.

   :homepage: https://github.com/NBISweden/GUESSmyLT
   :license: GPL / GPLv3
   :recipe: /`guessmylt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt/meta.yaml>`_

   


.. conda:package:: guessmylt

   |downloads_guessmylt| |docker_guessmylt|

   :versions:
      
      

      ``0.2.5-0``

      

   
   :depends bcbio-gff: ``0.6.4``
   :depends biopython: ``1.67``
   :depends bowtie2: ``>=2``
   :depends busco: ``3.0.2``
   :depends git: ``>=2.11.1``
   :depends pysam: ``>=0.13.0``
   :depends python: ``>3``
   :depends snakemake: ``5.4.*``
   :depends trinity: ``2.8.4``
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

      mamba install guessmylt

   and update with::

      mamba update guessmylt

  To create a new environment, run::

      mamba create --name myenvname guessmylt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/guessmylt:<tag>

   (see `guessmylt/tags`_ for valid values for ``<tag>``)


.. |downloads_guessmylt| image:: https://img.shields.io/conda/dn/bioconda/guessmylt.svg?style=flat
   :target: https://anaconda.org/bioconda/guessmylt
   :alt:   (downloads)
.. |docker_guessmylt| image:: https://quay.io/repository/biocontainers/guessmylt/status
   :target: https://quay.io/repository/biocontainers/guessmylt
.. _`guessmylt/tags`: https://quay.io/repository/biocontainers/guessmylt?tab=tags


.. raw:: html

    <script>
        var package = "guessmylt";
        var versions = ["0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guessmylt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guessmylt/README.html