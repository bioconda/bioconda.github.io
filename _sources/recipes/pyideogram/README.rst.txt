:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyideogram'
.. highlight: bash

pyideogram
==========

.. conda:recipe:: pyideogram
   :replaces_section_title:
   :noindex:

   plot ideograms in matplotlib

   :homepage: https://github.com/Balthasar-eu/pyideogram
   :license: LGPL-3.0-only
   :recipe: /`pyideogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyideogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyideogram/meta.yaml>`_

   


.. conda:package:: pyideogram

   |downloads_pyideogram| |docker_pyideogram|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.10``
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

      mamba install pyideogram

   and update with::

      mamba update pyideogram

  To create a new environment, run::

      mamba create --name myenvname pyideogram

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyideogram:<tag>

   (see `pyideogram/tags`_ for valid values for ``<tag>``)


.. |downloads_pyideogram| image:: https://img.shields.io/conda/dn/bioconda/pyideogram.svg?style=flat
   :target: https://anaconda.org/bioconda/pyideogram
   :alt:   (downloads)
.. |docker_pyideogram| image:: https://quay.io/repository/biocontainers/pyideogram/status
   :target: https://quay.io/repository/biocontainers/pyideogram
.. _`pyideogram/tags`: https://quay.io/repository/biocontainers/pyideogram?tab=tags


.. raw:: html

    <script>
        var package = "pyideogram";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyideogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyideogram/README.html