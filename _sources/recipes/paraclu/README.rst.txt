:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraclu'
.. highlight: bash

paraclu
=======

.. conda:recipe:: paraclu
   :replaces_section_title:
   :noindex:

   Paraclu finds clusters in data attached to sequences.

   :homepage: https://gitlab.com/mcfrith/paraclu
   :license: GPL-3.0-or-later
   :recipe: /`paraclu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraclu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraclu/meta.yaml>`_
   :links: biotools: :biotools:`paraclu`

   


.. conda:package:: paraclu

   |downloads_paraclu| |docker_paraclu|

   :versions:
      
      

      ``10-4``,  ``10-3``,  ``10-2``,  ``10-1``,  ``10-0``,  ``9-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install paraclu

   and update with::

      mamba update paraclu

  To create a new environment, run::

      mamba create --name myenvname paraclu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paraclu:<tag>

   (see `paraclu/tags`_ for valid values for ``<tag>``)


.. |downloads_paraclu| image:: https://img.shields.io/conda/dn/bioconda/paraclu.svg?style=flat
   :target: https://anaconda.org/bioconda/paraclu
   :alt:   (downloads)
.. |docker_paraclu| image:: https://quay.io/repository/biocontainers/paraclu/status
   :target: https://quay.io/repository/biocontainers/paraclu
.. _`paraclu/tags`: https://quay.io/repository/biocontainers/paraclu?tab=tags


.. raw:: html

    <script>
        var package = "paraclu";
        var versions = ["10","10","10","10","10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraclu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraclu/README.html