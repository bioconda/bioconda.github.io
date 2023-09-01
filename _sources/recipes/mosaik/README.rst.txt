:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosaik'
.. highlight: bash

mosaik
======

.. conda:recipe:: mosaik
   :replaces_section_title:
   :noindex:

   MOSAIK is a stable\, sensitive and open\-source program for mapping second and third\-generation sequencing reads to a reference genome.

   :homepage: https://github.com/wanpinglee/MOSAIK
   :license: GPL 2.0+
   :recipe: /`mosaik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaik/meta.yaml>`_
   :links: biotools: :biotools:`mosaik`, doi: :doi:`10.1371/journal.pone.0090581`

   


.. conda:package:: mosaik

   |downloads_mosaik| |docker_mosaik|

   :versions:
      
      

      ``2.2.26-4``,  ``2.2.26-3``,  ``2.2.26-2``,  ``2.2.26-1``,  ``2.2.26-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mosaik

   and update with::

      mamba update mosaik

  To create a new environment, run::

      mamba create --name myenvname mosaik

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mosaik:<tag>

   (see `mosaik/tags`_ for valid values for ``<tag>``)


.. |downloads_mosaik| image:: https://img.shields.io/conda/dn/bioconda/mosaik.svg?style=flat
   :target: https://anaconda.org/bioconda/mosaik
   :alt:   (downloads)
.. |docker_mosaik| image:: https://quay.io/repository/biocontainers/mosaik/status
   :target: https://quay.io/repository/biocontainers/mosaik
.. _`mosaik/tags`: https://quay.io/repository/biocontainers/mosaik?tab=tags


.. raw:: html

    <script>
        var package = "mosaik";
        var versions = ["2.2.26","2.2.26","2.2.26","2.2.26","2.2.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosaik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosaik/README.html