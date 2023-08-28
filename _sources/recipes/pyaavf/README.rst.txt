:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyaavf'
.. highlight: bash

pyaavf
======

.. conda:recipe:: pyaavf
   :replaces_section_title:
   :noindex:

   An amino acid variant format parser for Python.

   :homepage: http://github.com/winhiv/PyAAVF
   :license: Apache License, Version 2.0
   :recipe: /`pyaavf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyaavf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyaavf/meta.yaml>`_

   


.. conda:package:: pyaavf

   |downloads_pyaavf| |docker_pyaavf|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends python: 
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

      mamba install pyaavf

   and update with::

      mamba update pyaavf

  To create a new environment, run::

      mamba create --name myenvname pyaavf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyaavf:<tag>

   (see `pyaavf/tags`_ for valid values for ``<tag>``)


.. |downloads_pyaavf| image:: https://img.shields.io/conda/dn/bioconda/pyaavf.svg?style=flat
   :target: https://anaconda.org/bioconda/pyaavf
   :alt:   (downloads)
.. |docker_pyaavf| image:: https://quay.io/repository/biocontainers/pyaavf/status
   :target: https://quay.io/repository/biocontainers/pyaavf
.. _`pyaavf/tags`: https://quay.io/repository/biocontainers/pyaavf?tab=tags


.. raw:: html

    <script>
        var package = "pyaavf";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyaavf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyaavf/README.html