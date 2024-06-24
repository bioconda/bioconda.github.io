:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plinkio'
.. highlight: bash

plinkio
=======

.. conda:recipe:: plinkio
   :replaces_section_title:
   :noindex:

   A library for parsing plink genotype files

   :homepage: https://github.com/mfranberg/libplinkio
   :license: BSD-3-Clause
   :recipe: /`plinkio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinkio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plinkio/meta.yaml>`_

   


.. conda:package:: plinkio

   |downloads_plinkio| |docker_plinkio|

   :versions:
      
      

      ``0.9.8-1``,  ``0.9.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install plinkio

   and update with::

      mamba update plinkio

  To create a new environment, run::

      mamba create --name myenvname plinkio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plinkio:<tag>

   (see `plinkio/tags`_ for valid values for ``<tag>``)


.. |downloads_plinkio| image:: https://img.shields.io/conda/dn/bioconda/plinkio.svg?style=flat
   :target: https://anaconda.org/bioconda/plinkio
   :alt:   (downloads)
.. |docker_plinkio| image:: https://quay.io/repository/biocontainers/plinkio/status
   :target: https://quay.io/repository/biocontainers/plinkio
.. _`plinkio/tags`: https://quay.io/repository/biocontainers/plinkio?tab=tags


.. raw:: html

    <script>
        var package = "plinkio";
        var versions = ["0.9.8","0.9.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plinkio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plinkio/README.html