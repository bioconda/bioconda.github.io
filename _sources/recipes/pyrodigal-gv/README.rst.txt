:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrodigal-gv'
.. highlight: bash

pyrodigal-gv
============

.. conda:recipe:: pyrodigal-gv
   :replaces_section_title:
   :noindex:

   A Pyrodigal extension to predict genes in giant viruses and viruses with alternative genetic code.

   :homepage: https://github.com/althonos/pyrodigal-gv
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyrodigal-gv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal-gv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal-gv/meta.yaml>`_

   


.. conda:package:: pyrodigal-gv

   |downloads_pyrodigal-gv| |docker_pyrodigal-gv|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends pyrodigal: ``>=3.1,<4``
   :depends python: 
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

      mamba install pyrodigal-gv

   and update with::

      mamba update pyrodigal-gv

  To create a new environment, run::

      mamba create --name myenvname pyrodigal-gv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrodigal-gv:<tag>

   (see `pyrodigal-gv/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrodigal-gv| image:: https://img.shields.io/conda/dn/bioconda/pyrodigal-gv.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrodigal-gv
   :alt:   (downloads)
.. |docker_pyrodigal-gv| image:: https://quay.io/repository/biocontainers/pyrodigal-gv/status
   :target: https://quay.io/repository/biocontainers/pyrodigal-gv
.. _`pyrodigal-gv/tags`: https://quay.io/repository/biocontainers/pyrodigal-gv?tab=tags


.. raw:: html

    <script>
        var package = "pyrodigal-gv";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrodigal-gv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrodigal-gv/README.html