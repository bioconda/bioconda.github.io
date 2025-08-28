:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira-moods'
.. highlight: bash

mira-moods
==========

.. conda:recipe:: mira-moods
   :replaces_section_title:
   :noindex:

   MOODS\: Motif Occurrence Detection Suite

   :homepage: https://www.cs.helsinki.fi/group/pssmfind/
   :license: MIT AND GPL-3.0
   :recipe: /`mira-moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: mira-moods

   |downloads_mira-moods| |docker_mira-moods|

   :versions:
      
      

      ``1.9.4.2-2``,  ``1.9.4.2-1``,  ``1.9.4.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends swig: 
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

      mamba install mira-moods

   and update with::

      mamba update mira-moods

  To create a new environment, run::

      mamba create --name myenvname mira-moods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mira-moods:<tag>

   (see `mira-moods/tags`_ for valid values for ``<tag>``)


.. |downloads_mira-moods| image:: https://img.shields.io/conda/dn/bioconda/mira-moods.svg?style=flat
   :target: https://anaconda.org/bioconda/mira-moods
   :alt:   (downloads)
.. |docker_mira-moods| image:: https://quay.io/repository/biocontainers/mira-moods/status
   :target: https://quay.io/repository/biocontainers/mira-moods
.. _`mira-moods/tags`: https://quay.io/repository/biocontainers/mira-moods?tab=tags


.. raw:: html

    <script>
        var package = "mira-moods";
        var versions = ["1.9.4.2","1.9.4.2","1.9.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira-moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira-moods/README.html