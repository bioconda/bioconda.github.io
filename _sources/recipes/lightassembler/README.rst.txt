:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightassembler'
.. highlight: bash

lightassembler
==============

.. conda:recipe:: lightassembler
   :replaces_section_title:
   :noindex:

   Lightweight assembly algorithm designed to be executed on a desktop machine. It uses a pair of cache oblivious Bloom filters\, one holding a uniform sample of g\-spaced sequenced k\-mers and the other holding k\-mers classified as likely correct\, using a simple statistical test.

   :homepage: https://github.com/SaraEl-Metwally/LightAssembler
   :license: GPL
   :recipe: /`lightassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightassembler/meta.yaml>`_
   :links: biotools: :biotools:`LightAssembler`, doi: :doi:`10.1093/bioinformatics/btw470`

   


.. conda:package:: lightassembler

   |downloads_lightassembler| |docker_lightassembler|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libtool: 
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install lightassembler

   and update with::

      mamba update lightassembler

  To create a new environment, run::

      mamba create --name myenvname lightassembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lightassembler:<tag>

   (see `lightassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_lightassembler| image:: https://img.shields.io/conda/dn/bioconda/lightassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/lightassembler
   :alt:   (downloads)
.. |docker_lightassembler| image:: https://quay.io/repository/biocontainers/lightassembler/status
   :target: https://quay.io/repository/biocontainers/lightassembler
.. _`lightassembler/tags`: https://quay.io/repository/biocontainers/lightassembler?tab=tags


.. raw:: html

    <script>
        var package = "lightassembler";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightassembler/README.html