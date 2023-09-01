:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytest-marks'
.. highlight: bash

pytest-marks
============

.. conda:recipe:: pytest-marks
   :replaces_section_title:
   :noindex:

   set marks on py.test test methods

   :homepage: https://github.com/adamgoucher/pytest-marks
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`pytest-marks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks/meta.yaml>`_

   


.. conda:package:: pytest-marks

   |downloads_pytest-marks| |docker_pytest-marks|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends pytest: ``>2.0.2``
   :depends python: ``2.7*``
   :depends setuptools: 
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

      mamba install pytest-marks

   and update with::

      mamba update pytest-marks

  To create a new environment, run::

      mamba create --name myenvname pytest-marks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytest-marks:<tag>

   (see `pytest-marks/tags`_ for valid values for ``<tag>``)


.. |downloads_pytest-marks| image:: https://img.shields.io/conda/dn/bioconda/pytest-marks.svg?style=flat
   :target: https://anaconda.org/bioconda/pytest-marks
   :alt:   (downloads)
.. |docker_pytest-marks| image:: https://quay.io/repository/biocontainers/pytest-marks/status
   :target: https://quay.io/repository/biocontainers/pytest-marks
.. _`pytest-marks/tags`: https://quay.io/repository/biocontainers/pytest-marks?tab=tags


.. raw:: html

    <script>
        var package = "pytest-marks";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-marks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-marks/README.html