:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eskrim'
.. highlight: bash

eskrim
======

.. conda:recipe:: eskrim
   :replaces_section_title:
   :noindex:

   ESKRIM\: EStimate with K\-mers the RIchness in a Microbiome

   :homepage: https://forgemia.inra.fr/metagenopolis/eskrim
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`eskrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eskrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eskrim/meta.yaml>`_

   ESKRIM is a reference\-free tool that compares microbial richness in shotgun metagenomic samples by counting k\-mers


.. conda:package:: eskrim

   |downloads_eskrim| |docker_eskrim|

   :versions:
      
      

      ``1.0.9-0``

      

   
   :depends kmer-jellyfish: ``>=2.3.1``
   :depends python: ``>=3.12``
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

      mamba install eskrim

   and update with::

      mamba update eskrim

  To create a new environment, run::

      mamba create --name myenvname eskrim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eskrim:<tag>

   (see `eskrim/tags`_ for valid values for ``<tag>``)


.. |downloads_eskrim| image:: https://img.shields.io/conda/dn/bioconda/eskrim.svg?style=flat
   :target: https://anaconda.org/bioconda/eskrim
   :alt:   (downloads)
.. |docker_eskrim| image:: https://quay.io/repository/biocontainers/eskrim/status
   :target: https://quay.io/repository/biocontainers/eskrim
.. _`eskrim/tags`: https://quay.io/repository/biocontainers/eskrim?tab=tags


.. raw:: html

    <script>
        var package = "eskrim";
        var versions = ["1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eskrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eskrim/README.html