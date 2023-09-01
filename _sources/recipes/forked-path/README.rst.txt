:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forked-path'
.. highlight: bash

forked-path
===========

.. conda:recipe:: forked-path
   :replaces_section_title:
   :noindex:

   An object oriented file path module

   :homepage: http://github.com/Singletoned/forked-path
   :license: Public Domain
   :recipe: /`forked-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path/meta.yaml>`_

   


.. conda:package:: forked-path

   |downloads_forked-path| |docker_forked-path|

   :versions:
      
      

      ``0.2.3-2``,  ``0.2.3-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install forked-path

   and update with::

      mamba update forked-path

  To create a new environment, run::

      mamba create --name myenvname forked-path

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/forked-path:<tag>

   (see `forked-path/tags`_ for valid values for ``<tag>``)


.. |downloads_forked-path| image:: https://img.shields.io/conda/dn/bioconda/forked-path.svg?style=flat
   :target: https://anaconda.org/bioconda/forked-path
   :alt:   (downloads)
.. |docker_forked-path| image:: https://quay.io/repository/biocontainers/forked-path/status
   :target: https://quay.io/repository/biocontainers/forked-path
.. _`forked-path/tags`: https://quay.io/repository/biocontainers/forked-path?tab=tags


.. raw:: html

    <script>
        var package = "forked-path";
        var versions = ["0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forked-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forked-path/README.html