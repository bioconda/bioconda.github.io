:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qgrs-cpp'
.. highlight: bash

qgrs-cpp
========

.. conda:recipe:: qgrs-cpp
   :replaces_section_title:
   :noindex:

   C\+\+ implementation of QGRS mapping.

   :homepage: https://github.com/freezer333/qgrs-cpp
   :license: MIT / MIT
   :recipe: /`qgrs-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qgrs-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qgrs-cpp/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gks422`, doi: :doi:`10.1186/1479-7364-8-8`

   


.. conda:package:: qgrs-cpp

   |downloads_qgrs-cpp| |docker_qgrs-cpp|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.0.2017.08.25-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install qgrs-cpp

   and update with::

      mamba update qgrs-cpp

  To create a new environment, run::

      mamba create --name myenvname qgrs-cpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qgrs-cpp:<tag>

   (see `qgrs-cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_qgrs-cpp| image:: https://img.shields.io/conda/dn/bioconda/qgrs-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/qgrs-cpp
   :alt:   (downloads)
.. |docker_qgrs-cpp| image:: https://quay.io/repository/biocontainers/qgrs-cpp/status
   :target: https://quay.io/repository/biocontainers/qgrs-cpp
.. _`qgrs-cpp/tags`: https://quay.io/repository/biocontainers/qgrs-cpp?tab=tags


.. raw:: html

    <script>
        var package = "qgrs-cpp";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qgrs-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qgrs-cpp/README.html