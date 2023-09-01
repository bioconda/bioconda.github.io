:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optbuild'
.. highlight: bash

optbuild
========

.. conda:recipe:: optbuild
   :replaces_section_title:
   :noindex:

   build command lines for external programs

   :homepage: http://noble.gs.washington.edu/~mmh1/software/optbuild/
   :license: GNU GPLv2
   :recipe: /`optbuild <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optbuild>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optbuild/meta.yaml>`_

   


.. conda:package:: optbuild

   |downloads_optbuild| |docker_optbuild|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``,  ``0.2-0``,  ``0.1.11-2``,  ``0.1.11-0``

      

   
   :depends autolog: 
   :depends python: 
   :depends six: 
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

      mamba install optbuild

   and update with::

      mamba update optbuild

  To create a new environment, run::

      mamba create --name myenvname optbuild

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/optbuild:<tag>

   (see `optbuild/tags`_ for valid values for ``<tag>``)


.. |downloads_optbuild| image:: https://img.shields.io/conda/dn/bioconda/optbuild.svg?style=flat
   :target: https://anaconda.org/bioconda/optbuild
   :alt:   (downloads)
.. |docker_optbuild| image:: https://quay.io/repository/biocontainers/optbuild/status
   :target: https://quay.io/repository/biocontainers/optbuild
.. _`optbuild/tags`: https://quay.io/repository/biocontainers/optbuild?tab=tags


.. raw:: html

    <script>
        var package = "optbuild";
        var versions = ["0.2.1","0.2.1","0.2","0.1.11","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optbuild/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optbuild/README.html