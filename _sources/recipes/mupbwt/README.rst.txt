:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mupbwt'
.. highlight: bash

mupbwt
======

.. conda:recipe:: mupbwt
   :replaces_section_title:
   :noindex:

   A light pbwt\-based index

   :homepage: https://github.com/dlcgold/muPBWT
   :license: GPL-3.0-or-later
   :recipe: /`mupbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mupbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mupbwt/meta.yaml>`_
   :links: biotools: :biotools:`mupbwt`

   


.. conda:package:: mupbwt

   |downloads_mupbwt| |docker_mupbwt|

   :versions:
      
      

      ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends htslib: ``>=1.17,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install mupbwt

   and update with::

      mamba update mupbwt

  To create a new environment, run::

      mamba create --name myenvname mupbwt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mupbwt:<tag>

   (see `mupbwt/tags`_ for valid values for ``<tag>``)


.. |downloads_mupbwt| image:: https://img.shields.io/conda/dn/bioconda/mupbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/mupbwt
   :alt:   (downloads)
.. |docker_mupbwt| image:: https://quay.io/repository/biocontainers/mupbwt/status
   :target: https://quay.io/repository/biocontainers/mupbwt
.. _`mupbwt/tags`: https://quay.io/repository/biocontainers/mupbwt?tab=tags


.. raw:: html

    <script>
        var package = "mupbwt";
        var versions = ["0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mupbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mupbwt/README.html