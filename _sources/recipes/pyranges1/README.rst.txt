:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyranges1'
.. highlight: bash

pyranges1
=========

.. conda:recipe:: pyranges1
   :replaces_section_title:
   :noindex:

   GenomicRanges for Python.

   :homepage: http://github.com/pyranges/pyranges_1.x
   :license: MIT
   :recipe: /`pyranges1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges1/meta.yaml>`_

   


.. conda:package:: pyranges1

   |downloads_pyranges1| |docker_pyranges1|

   :versions:
      
      

      ``1.3.0-0``,  ``1.1.6-0``

      

   
   :depends bamread: 
   :depends natsort: 
   :depends pandas: 
   :depends pybigwig: 
   :depends pyrle: ``>=0.0.41``
   :depends python: ``>=3.12``
   :depends ruranges: ``>=0.1.1``
   :depends tabulate: 
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

      mamba install pyranges1

   and update with::

      mamba update pyranges1

  To create a new environment, run::

      mamba create --name myenvname pyranges1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyranges1:<tag>

   (see `pyranges1/tags`_ for valid values for ``<tag>``)


.. |downloads_pyranges1| image:: https://img.shields.io/conda/dn/bioconda/pyranges1.svg?style=flat
   :target: https://anaconda.org/bioconda/pyranges1
   :alt:   (downloads)
.. |docker_pyranges1| image:: https://quay.io/repository/biocontainers/pyranges1/status
   :target: https://quay.io/repository/biocontainers/pyranges1
.. _`pyranges1/tags`: https://quay.io/repository/biocontainers/pyranges1?tab=tags


.. raw:: html

    <script>
        var package = "pyranges1";
        var versions = ["1.3.0","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyranges1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyranges1/README.html