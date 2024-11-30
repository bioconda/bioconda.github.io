:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsrq'
.. highlight: bash

rsrq
====

.. conda:recipe:: rsrq
   :replaces_section_title:
   :noindex:

   A minimal Redis\-backed queue system.

   :homepage: https://github.com/aaronmussig/rsrq
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`rsrq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsrq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsrq/meta.yaml>`_

   


.. conda:package:: rsrq

   |downloads_rsrq| |docker_rsrq|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
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

      mamba install rsrq

   and update with::

      mamba update rsrq

  To create a new environment, run::

      mamba create --name myenvname rsrq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rsrq:<tag>

   (see `rsrq/tags`_ for valid values for ``<tag>``)


.. |downloads_rsrq| image:: https://img.shields.io/conda/dn/bioconda/rsrq.svg?style=flat
   :target: https://anaconda.org/bioconda/rsrq
   :alt:   (downloads)
.. |docker_rsrq| image:: https://quay.io/repository/biocontainers/rsrq/status
   :target: https://quay.io/repository/biocontainers/rsrq
.. _`rsrq/tags`: https://quay.io/repository/biocontainers/rsrq?tab=tags


.. raw:: html

    <script>
        var package = "rsrq";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsrq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsrq/README.html