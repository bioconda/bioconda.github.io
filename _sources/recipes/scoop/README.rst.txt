:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scoop'
.. highlight: bash

scoop
=====

.. conda:recipe:: scoop
   :replaces_section_title:
   :noindex:

   Scalable COncurrent Operations in Python

   :homepage: http://github.com/soravux/scoop
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`scoop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scoop/meta.yaml>`_

   


.. conda:package:: scoop

   |downloads_scoop| |docker_scoop|

   :versions:
      
      

      ``0.7.1.1-4``,  ``0.7.1.1-3``,  ``0.7.1.1-2``,  ``0.7.1.1-1``,  ``0.7.1.1-0``

      

   
   :depends greenlet: ``>=0.3.4``
   :depends python: 
   :depends pyzmq: ``>=13.1.0``
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

      mamba install scoop

   and update with::

      mamba update scoop

  To create a new environment, run::

      mamba create --name myenvname scoop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scoop:<tag>

   (see `scoop/tags`_ for valid values for ``<tag>``)


.. |downloads_scoop| image:: https://img.shields.io/conda/dn/bioconda/scoop.svg?style=flat
   :target: https://anaconda.org/bioconda/scoop
   :alt:   (downloads)
.. |docker_scoop| image:: https://quay.io/repository/biocontainers/scoop/status
   :target: https://quay.io/repository/biocontainers/scoop
.. _`scoop/tags`: https://quay.io/repository/biocontainers/scoop?tab=tags


.. raw:: html

    <script>
        var package = "scoop";
        var versions = ["0.7.1.1","0.7.1.1","0.7.1.1","0.7.1.1","0.7.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scoop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scoop/README.html