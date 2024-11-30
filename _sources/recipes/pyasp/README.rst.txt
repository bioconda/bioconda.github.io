:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyasp'
.. highlight: bash

pyasp
=====

.. conda:recipe:: pyasp
   :replaces_section_title:
   :noindex:

   A convenience wrapper for the ASP tools gringo\, gringo4 and clasp.

   :homepage: http://pypi.python.org/pypi/pyasp/
   :license: GPLv3+
   :recipe: /`pyasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp/meta.yaml>`_

   


.. conda:package:: pyasp

   |downloads_pyasp| |docker_pyasp|

   :versions:
      
      

      ``1.4.3-1``,  ``1.4.3-0``

      

   
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

      mamba install pyasp

   and update with::

      mamba update pyasp

  To create a new environment, run::

      mamba create --name myenvname pyasp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyasp:<tag>

   (see `pyasp/tags`_ for valid values for ``<tag>``)


.. |downloads_pyasp| image:: https://img.shields.io/conda/dn/bioconda/pyasp.svg?style=flat
   :target: https://anaconda.org/bioconda/pyasp
   :alt:   (downloads)
.. |docker_pyasp| image:: https://quay.io/repository/biocontainers/pyasp/status
   :target: https://quay.io/repository/biocontainers/pyasp
.. _`pyasp/tags`: https://quay.io/repository/biocontainers/pyasp?tab=tags


.. raw:: html

    <script>
        var package = "pyasp";
        var versions = ["1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyasp/README.html