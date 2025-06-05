:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'giatools'
.. highlight: bash

giatools
========

.. conda:recipe:: giatools
   :replaces_section_title:
   :noindex:

   Tools required for Galaxy Image Analysis

   :homepage: https://github.com/BMCV/giatools
   :license: MIT
   :recipe: /`giatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/giatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/giatools/meta.yaml>`_

   


.. conda:package:: giatools

   |downloads_giatools| |docker_giatools|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends numpy: ``>=1.18``
   :depends python: ``>=3.8,<3.12``
   :depends scikit-image: ``>=0.18``
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

      mamba install giatools

   and update with::

      mamba update giatools

  To create a new environment, run::

      mamba create --name myenvname giatools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/giatools:<tag>

   (see `giatools/tags`_ for valid values for ``<tag>``)


.. |downloads_giatools| image:: https://img.shields.io/conda/dn/bioconda/giatools.svg?style=flat
   :target: https://anaconda.org/bioconda/giatools
   :alt:   (downloads)
.. |docker_giatools| image:: https://quay.io/repository/biocontainers/giatools/status
   :target: https://quay.io/repository/biocontainers/giatools
.. _`giatools/tags`: https://quay.io/repository/biocontainers/giatools?tab=tags


.. raw:: html

    <script>
        var package = "giatools";
        var versions = ["0.4.1","0.4.0","0.3.2","0.3.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/giatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/giatools/README.html