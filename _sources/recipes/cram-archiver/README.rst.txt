:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cram-archiver'
.. highlight: bash

cram-archiver
=============

.. conda:recipe:: cram-archiver
   :replaces_section_title:
   :noindex:

   A samtools wrapper for CRAM conversion automation.

   :homepage: https://github.com/lumc/cram-archiver
   :license: AGPL / agpl-3.0-or-later
   :recipe: /`cram-archiver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cram-archiver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cram-archiver/meta.yaml>`_

   


.. conda:package:: cram-archiver

   |downloads_cram-archiver| |docker_cram-archiver|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.22``
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

      mamba install cram-archiver

   and update with::

      mamba update cram-archiver

  To create a new environment, run::

      mamba create --name myenvname cram-archiver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cram-archiver:<tag>

   (see `cram-archiver/tags`_ for valid values for ``<tag>``)


.. |downloads_cram-archiver| image:: https://img.shields.io/conda/dn/bioconda/cram-archiver.svg?style=flat
   :target: https://anaconda.org/bioconda/cram-archiver
   :alt:   (downloads)
.. |docker_cram-archiver| image:: https://quay.io/repository/biocontainers/cram-archiver/status
   :target: https://quay.io/repository/biocontainers/cram-archiver
.. _`cram-archiver/tags`: https://quay.io/repository/biocontainers/cram-archiver?tab=tags


.. raw:: html

    <script>
        var package = "cram-archiver";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cram-archiver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cram-archiver/README.html