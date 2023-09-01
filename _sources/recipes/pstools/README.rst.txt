:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pstools'
.. highlight: bash

pstools
=======

.. conda:recipe:: pstools
   :replaces_section_title:
   :noindex:

   Toolkit for fully phased sequences

   :homepage: https://github.com/shilpagarg/pstools
   :license: MIT
   :recipe: /`pstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pstools/meta.yaml>`_

   


.. conda:package:: pstools

   |downloads_pstools| |docker_pstools|

   :versions:
      
      

      ``0.2a3-3``,  ``0.2a3-2``,  ``0.2a3-1``,  ``0.2a3-0``

      

   
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

      mamba install pstools

   and update with::

      mamba update pstools

  To create a new environment, run::

      mamba create --name myenvname pstools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pstools:<tag>

   (see `pstools/tags`_ for valid values for ``<tag>``)


.. |downloads_pstools| image:: https://img.shields.io/conda/dn/bioconda/pstools.svg?style=flat
   :target: https://anaconda.org/bioconda/pstools
   :alt:   (downloads)
.. |docker_pstools| image:: https://quay.io/repository/biocontainers/pstools/status
   :target: https://quay.io/repository/biocontainers/pstools
.. _`pstools/tags`: https://quay.io/repository/biocontainers/pstools?tab=tags


.. raw:: html

    <script>
        var package = "pstools";
        var versions = ["0.2a3","0.2a3","0.2a3","0.2a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pstools/README.html