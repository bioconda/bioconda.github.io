:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'workspace'
.. highlight: bash

workspace
=========

.. conda:recipe:: workspace
   :replaces_section_title:
   :noindex:

   Workspace Overmind

   :homepage: http://an9.org/w/WorkspacePy
   :license: MIT License
   :recipe: /`workspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/workspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/workspace/meta.yaml>`_

   


.. conda:package:: workspace

   |downloads_workspace| |docker_workspace|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
   :depends sprinkles: ``>=0.4.4``
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

      mamba install workspace

   and update with::

      mamba update workspace

  To create a new environment, run::

      mamba create --name myenvname workspace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/workspace:<tag>

   (see `workspace/tags`_ for valid values for ``<tag>``)


.. |downloads_workspace| image:: https://img.shields.io/conda/dn/bioconda/workspace.svg?style=flat
   :target: https://anaconda.org/bioconda/workspace
   :alt:   (downloads)
.. |docker_workspace| image:: https://quay.io/repository/biocontainers/workspace/status
   :target: https://quay.io/repository/biocontainers/workspace
.. _`workspace/tags`: https://quay.io/repository/biocontainers/workspace?tab=tags


.. raw:: html

    <script>
        var package = "workspace";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/workspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/workspace/README.html