:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyonsite'
.. highlight: bash

pyonsite
========

.. conda:recipe:: pyonsite
   :replaces_section_title:
   :noindex:

   onsite\: mass spectrometry post\-translational localization tool

   :homepage: https://www.github.com/bigbio/onsite
   :license: MIT
   :recipe: /`pyonsite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyonsite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyonsite/meta.yaml>`_

   


.. conda:package:: pyonsite

   |downloads_pyonsite| |docker_pyonsite|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends click: ``>=8.0.0``
   :depends eigen: ``>=3.4.0``
   :depends numpy: ``>=1.26.0``
   :depends pyopenms: ``>=3.4.0``
   :depends python: ``>=3.11,<3.13``
   :depends scipy: ``>=1.16.0``
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

      mamba install pyonsite

   and update with::

      mamba update pyonsite

  To create a new environment, run::

      mamba create --name myenvname pyonsite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyonsite:<tag>

   (see `pyonsite/tags`_ for valid values for ``<tag>``)


.. |downloads_pyonsite| image:: https://img.shields.io/conda/dn/bioconda/pyonsite.svg?style=flat
   :target: https://anaconda.org/bioconda/pyonsite
   :alt:   (downloads)
.. |docker_pyonsite| image:: https://quay.io/repository/biocontainers/pyonsite/status
   :target: https://quay.io/repository/biocontainers/pyonsite
.. _`pyonsite/tags`: https://quay.io/repository/biocontainers/pyonsite?tab=tags


.. raw:: html

    <script>
        var package = "pyonsite";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyonsite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyonsite/README.html