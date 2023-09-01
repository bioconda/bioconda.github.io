:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ushuffle'
.. highlight: bash

ushuffle
========

.. conda:recipe:: ushuffle
   :replaces_section_title:
   :noindex:

   uShuffle\-\-\-a useful tool for shuffling biological sequences while preserving the k\-let counts

   :homepage: http://digital.cs.usu.edu/~mjiang/ushuffle/
   :license: custom
   :recipe: /`ushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ushuffle/meta.yaml>`_

   


.. conda:package:: ushuffle

   |downloads_ushuffle| |docker_ushuffle|

   :versions:
      
      

      ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
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

      mamba install ushuffle

   and update with::

      mamba update ushuffle

  To create a new environment, run::

      mamba create --name myenvname ushuffle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ushuffle:<tag>

   (see `ushuffle/tags`_ for valid values for ``<tag>``)


.. |downloads_ushuffle| image:: https://img.shields.io/conda/dn/bioconda/ushuffle.svg?style=flat
   :target: https://anaconda.org/bioconda/ushuffle
   :alt:   (downloads)
.. |docker_ushuffle| image:: https://quay.io/repository/biocontainers/ushuffle/status
   :target: https://quay.io/repository/biocontainers/ushuffle
.. _`ushuffle/tags`: https://quay.io/repository/biocontainers/ushuffle?tab=tags


.. raw:: html

    <script>
        var package = "ushuffle";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ushuffle/README.html