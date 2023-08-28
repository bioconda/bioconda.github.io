:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectral_hk'
.. highlight: bash

spectral_hk
===========

.. conda:recipe:: spectral_hk
   :replaces_section_title:
   :noindex:

   NCGC Spectral HashKey

   :homepage: https://bitbucket.org/ncgc/spectral_hk
   :license: PUBLIC DOMAIN
   :recipe: /`spectral_hk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectral_hk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectral_hk/meta.yaml>`_

   


.. conda:package:: spectral_hk

   |downloads_spectral_hk| |docker_spectral_hk|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install spectral_hk

   and update with::

      mamba update spectral_hk

  To create a new environment, run::

      mamba create --name myenvname spectral_hk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spectral_hk:<tag>

   (see `spectral_hk/tags`_ for valid values for ``<tag>``)


.. |downloads_spectral_hk| image:: https://img.shields.io/conda/dn/bioconda/spectral_hk.svg?style=flat
   :target: https://anaconda.org/bioconda/spectral_hk
   :alt:   (downloads)
.. |docker_spectral_hk| image:: https://quay.io/repository/biocontainers/spectral_hk/status
   :target: https://quay.io/repository/biocontainers/spectral_hk
.. _`spectral_hk/tags`: https://quay.io/repository/biocontainers/spectral_hk?tab=tags


.. raw:: html

    <script>
        var package = "spectral_hk";
        var versions = ["0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectral_hk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectral_hk/README.html