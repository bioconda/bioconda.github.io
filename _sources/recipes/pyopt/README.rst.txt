:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopt'
.. highlight: bash

pyopt
=====

.. conda:recipe:: pyopt
   :replaces_section_title:
   :noindex:

   a Python\-based package for formulating and solving nonlinear constrained optimization problems in an efficient\, reusable and portable manner.

   :homepage: http://www.pyopt.org/index.html
   :license: LGPLv3
   :recipe: /`pyopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopt/meta.yaml>`_

   


.. conda:package:: pyopt

   |downloads_pyopt| |docker_pyopt|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends mpi4py: 
   :depends numpy: ``>=1.0``
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install pyopt

   and update with::

      mamba update pyopt

  To create a new environment, run::

      mamba create --name myenvname pyopt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyopt:<tag>

   (see `pyopt/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopt| image:: https://img.shields.io/conda/dn/bioconda/pyopt.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopt
   :alt:   (downloads)
.. |docker_pyopt| image:: https://quay.io/repository/biocontainers/pyopt/status
   :target: https://quay.io/repository/biocontainers/pyopt
.. _`pyopt/tags`: https://quay.io/repository/biocontainers/pyopt?tab=tags


.. raw:: html

    <script>
        var package = "pyopt";
        var versions = ["1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopt/README.html