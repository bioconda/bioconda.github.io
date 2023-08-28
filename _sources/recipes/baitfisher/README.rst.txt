:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baitfisher'
.. highlight: bash

baitfisher
==========

.. conda:recipe:: baitfisher
   :replaces_section_title:
   :noindex:

   The BaitFisher\-package is a software package for designing hybrid enrichment probes.

   :homepage: https://github.com/cmayer/BaitFisher-package
   :license: GPL3
   :recipe: /`baitfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baitfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baitfisher/meta.yaml>`_

   


.. conda:package:: baitfisher

   |downloads_baitfisher| |docker_baitfisher|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install baitfisher

   and update with::

      mamba update baitfisher

  To create a new environment, run::

      mamba create --name myenvname baitfisher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baitfisher:<tag>

   (see `baitfisher/tags`_ for valid values for ``<tag>``)


.. |downloads_baitfisher| image:: https://img.shields.io/conda/dn/bioconda/baitfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/baitfisher
   :alt:   (downloads)
.. |docker_baitfisher| image:: https://quay.io/repository/biocontainers/baitfisher/status
   :target: https://quay.io/repository/biocontainers/baitfisher
.. _`baitfisher/tags`: https://quay.io/repository/biocontainers/baitfisher?tab=tags


.. raw:: html

    <script>
        var package = "baitfisher";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baitfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baitfisher/README.html