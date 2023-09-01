:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muse'
.. highlight: bash

muse
====

.. conda:recipe:: muse
   :replaces_section_title:
   :noindex:

   Somatic point mutation caller

   :homepage: http://bioinformatics.mdanderson.org/main/MuSE
   :license: https://github.com/danielfan/MuSE/blob/master/LICENSE
   :recipe: /`muse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muse/meta.yaml>`_

   


.. conda:package:: muse

   |downloads_muse| |docker_muse|

   :versions:
      
      

      ``1.0.rc-8``,  ``1.0.rc-7``,  ``1.0.rc-6``,  ``1.0.rc-5``,  ``1.0.rc-4``,  ``1.0.rc-3``,  ``1.0.rc-2``,  ``1.0.rc-1``,  ``1.0.rc-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install muse

   and update with::

      mamba update muse

  To create a new environment, run::

      mamba create --name myenvname muse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/muse:<tag>

   (see `muse/tags`_ for valid values for ``<tag>``)


.. |downloads_muse| image:: https://img.shields.io/conda/dn/bioconda/muse.svg?style=flat
   :target: https://anaconda.org/bioconda/muse
   :alt:   (downloads)
.. |docker_muse| image:: https://quay.io/repository/biocontainers/muse/status
   :target: https://quay.io/repository/biocontainers/muse
.. _`muse/tags`: https://quay.io/repository/biocontainers/muse?tab=tags


.. raw:: html

    <script>
        var package = "muse";
        var versions = ["1.0.rc","1.0.rc","1.0.rc","1.0.rc","1.0.rc"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muse/README.html