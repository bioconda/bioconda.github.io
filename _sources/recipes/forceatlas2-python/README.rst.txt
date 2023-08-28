:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forceatlas2-python'
.. highlight: bash

forceatlas2-python
==================

.. conda:recipe:: forceatlas2-python
   :replaces_section_title:
   :noindex:

   Multithreaded Gephi Force Atlas2 Layout algorithm in 2D and 3D.

   :homepage: https://github.com/klarman-cell-observatory/forceatlas2-python
   :developer docs: https://github.com/klarman-cell-observatory/forceatlas2
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`forceatlas2-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forceatlas2-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forceatlas2-python/meta.yaml>`_

   This tool is used to calculate the pseudo\-temporal development trajectory of single\-cell data.



.. conda:package:: forceatlas2-python

   |downloads_forceatlas2-python| |docker_forceatlas2-python|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends importlib_metadata: ``>=0.7``
   :depends openjdk: ``>=8``
   :depends pandas: ``>=0.21``
   :depends python: ``>=3.6``
   :depends setuptools: 
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

      mamba install forceatlas2-python

   and update with::

      mamba update forceatlas2-python

  To create a new environment, run::

      mamba create --name myenvname forceatlas2-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/forceatlas2-python:<tag>

   (see `forceatlas2-python/tags`_ for valid values for ``<tag>``)


.. |downloads_forceatlas2-python| image:: https://img.shields.io/conda/dn/bioconda/forceatlas2-python.svg?style=flat
   :target: https://anaconda.org/bioconda/forceatlas2-python
   :alt:   (downloads)
.. |docker_forceatlas2-python| image:: https://quay.io/repository/biocontainers/forceatlas2-python/status
   :target: https://quay.io/repository/biocontainers/forceatlas2-python
.. _`forceatlas2-python/tags`: https://quay.io/repository/biocontainers/forceatlas2-python?tab=tags


.. raw:: html

    <script>
        var package = "forceatlas2-python";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forceatlas2-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forceatlas2-python/README.html