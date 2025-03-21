:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypolca'
.. highlight: bash

pypolca
=======

.. conda:recipe:: pypolca
   :replaces_section_title:
   :noindex:

   Standalone Python re\-implementation of the POLCA polisher from MaSuRCA

   :homepage: https://github.com/gbouras13/pypolca
   :license: MIT / MIT
   :recipe: /`pypolca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypolca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypolca/meta.yaml>`_

   


.. conda:package:: pypolca

   |downloads_pypolca| |docker_pypolca|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.76``
   :depends bwa: ``>=0.7.17``
   :depends click: ``>=8.0.0``
   :depends freebayes: ``>=1.3.9``
   :depends loguru: ``>=0.5.3``
   :depends pandas: ``>=1.4.2``
   :depends python: ``>=3.8,<4.0``
   :depends pyyaml: ``>=6.0``
   :depends samtools: ``>=1.18``
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

      mamba install pypolca

   and update with::

      mamba update pypolca

  To create a new environment, run::

      mamba create --name myenvname pypolca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypolca:<tag>

   (see `pypolca/tags`_ for valid values for ``<tag>``)


.. |downloads_pypolca| image:: https://img.shields.io/conda/dn/bioconda/pypolca.svg?style=flat
   :target: https://anaconda.org/bioconda/pypolca
   :alt:   (downloads)
.. |docker_pypolca| image:: https://quay.io/repository/biocontainers/pypolca/status
   :target: https://quay.io/repository/biocontainers/pypolca
.. _`pypolca/tags`: https://quay.io/repository/biocontainers/pypolca?tab=tags


.. raw:: html

    <script>
        var package = "pypolca";
        var versions = ["0.3.1","0.3.1","0.3.0","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypolca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypolca/README.html