:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prequal'
.. highlight: bash

prequal
=======

.. conda:recipe:: prequal
   :replaces_section_title:
   :noindex:

   a pre\-alignment quality filter for comparative sequence analyses

   :homepage: https://github.com/simonwhelan/prequal
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`prequal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prequal/meta.yaml>`_

   


.. conda:package:: prequal

   |downloads_prequal| |docker_prequal|

   :versions:
      
      

      ``1.02-6``,  ``1.02-5``,  ``1.02-4``,  ``1.02-3``,  ``1.02-2``,  ``1.02-1``,  ``1.02-0``

      

   
   :depends boost-cpp: 
   :depends zlib: ``1.2.*``
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

      mamba install prequal

   and update with::

      mamba update prequal

  To create a new environment, run::

      mamba create --name myenvname prequal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prequal:<tag>

   (see `prequal/tags`_ for valid values for ``<tag>``)


.. |downloads_prequal| image:: https://img.shields.io/conda/dn/bioconda/prequal.svg?style=flat
   :target: https://anaconda.org/bioconda/prequal
   :alt:   (downloads)
.. |docker_prequal| image:: https://quay.io/repository/biocontainers/prequal/status
   :target: https://quay.io/repository/biocontainers/prequal
.. _`prequal/tags`: https://quay.io/repository/biocontainers/prequal?tab=tags


.. raw:: html

    <script>
        var package = "prequal";
        var versions = ["1.02","1.02","1.02","1.02","1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prequal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prequal/README.html