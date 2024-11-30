:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peaksql'
.. highlight: bash

peaksql
=======

.. conda:recipe:: peaksql
   :replaces_section_title:
   :noindex:

   Dynamic machine learning database for genomics.

   :homepage: https://vanheeringen-lab.github.io/peaksql/
   :developer docs: https://github.com/vanheeringen-lab/peaksql
   :license: MIT / MIT
   :recipe: /`peaksql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaksql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaksql/meta.yaml>`_

   


.. conda:package:: peaksql

   |downloads_peaksql| |docker_peaksql|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends numba: ``>=0.48``
   :depends numpy: ``>=1.18``
   :depends pandas: ``>=1.0.1``
   :depends pyfaidx: ``>=0.5.1``
   :depends python: ``>=3.7``
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

      mamba install peaksql

   and update with::

      mamba update peaksql

  To create a new environment, run::

      mamba create --name myenvname peaksql

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peaksql:<tag>

   (see `peaksql/tags`_ for valid values for ``<tag>``)


.. |downloads_peaksql| image:: https://img.shields.io/conda/dn/bioconda/peaksql.svg?style=flat
   :target: https://anaconda.org/bioconda/peaksql
   :alt:   (downloads)
.. |docker_peaksql| image:: https://quay.io/repository/biocontainers/peaksql/status
   :target: https://quay.io/repository/biocontainers/peaksql
.. _`peaksql/tags`: https://quay.io/repository/biocontainers/peaksql?tab=tags


.. raw:: html

    <script>
        var package = "peaksql";
        var versions = ["0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peaksql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peaksql/README.html