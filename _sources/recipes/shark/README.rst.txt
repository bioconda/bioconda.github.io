:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shark'
.. highlight: bash

shark
=====

.. conda:recipe:: shark
   :replaces_section_title:
   :noindex:

   Mapping\-free filtering of useless RNA\-Seq reads

   :homepage: https://algolab.github.io/shark/
   :license: GPL-3.0-or-later
   :recipe: /`shark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark/meta.yaml>`_
   :links: biotools: :biotools:`shark`

   


.. conda:package:: shark

   |downloads_shark| |docker_shark|

   :versions:
      
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install shark

   and update with::

      mamba update shark

  To create a new environment, run::

      mamba create --name myenvname shark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shark:<tag>

   (see `shark/tags`_ for valid values for ``<tag>``)


.. |downloads_shark| image:: https://img.shields.io/conda/dn/bioconda/shark.svg?style=flat
   :target: https://anaconda.org/bioconda/shark
   :alt:   (downloads)
.. |docker_shark| image:: https://quay.io/repository/biocontainers/shark/status
   :target: https://quay.io/repository/biocontainers/shark
.. _`shark/tags`: https://quay.io/repository/biocontainers/shark?tab=tags


.. raw:: html

    <script>
        var package = "shark";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shark/README.html