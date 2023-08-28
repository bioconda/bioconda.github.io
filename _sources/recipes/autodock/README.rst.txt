:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autodock'
.. highlight: bash

autodock
========

.. conda:recipe:: autodock
   :replaces_section_title:
   :noindex:

   AutoDock is a suite of automated docking tools.

   :homepage: http://autodock.scripps.edu/
   :license: GPL-2.0-only
   :recipe: /`autodock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autodock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autodock/meta.yaml>`_

   


.. conda:package:: autodock

   |downloads_autodock| |docker_autodock|

   :versions:
      
      

      ``4.2.6-3``,  ``4.2.6-2``,  ``4.2.6-1``,  ``4.2.6-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install autodock

   and update with::

      mamba update autodock

  To create a new environment, run::

      mamba create --name myenvname autodock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autodock:<tag>

   (see `autodock/tags`_ for valid values for ``<tag>``)


.. |downloads_autodock| image:: https://img.shields.io/conda/dn/bioconda/autodock.svg?style=flat
   :target: https://anaconda.org/bioconda/autodock
   :alt:   (downloads)
.. |docker_autodock| image:: https://quay.io/repository/biocontainers/autodock/status
   :target: https://quay.io/repository/biocontainers/autodock
.. _`autodock/tags`: https://quay.io/repository/biocontainers/autodock?tab=tags


.. raw:: html

    <script>
        var package = "autodock";
        var versions = ["4.2.6","4.2.6","4.2.6","4.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autodock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autodock/README.html