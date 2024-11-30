:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psascan'
.. highlight: bash

psascan
=======

.. conda:recipe:: psascan
   :replaces_section_title:
   :noindex:

   A parallel external memory suffix array construction algorithm

   :homepage: https://www.cs.helsinki.fi/group/pads/pSAscan.html
   :license: MIT
   :recipe: /`psascan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psascan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psascan/meta.yaml>`_

   


.. conda:package:: psascan

   |downloads_psascan| |docker_psascan|

   :versions:
      
      

      ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install psascan

   and update with::

      mamba update psascan

  To create a new environment, run::

      mamba create --name myenvname psascan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psascan:<tag>

   (see `psascan/tags`_ for valid values for ``<tag>``)


.. |downloads_psascan| image:: https://img.shields.io/conda/dn/bioconda/psascan.svg?style=flat
   :target: https://anaconda.org/bioconda/psascan
   :alt:   (downloads)
.. |docker_psascan| image:: https://quay.io/repository/biocontainers/psascan/status
   :target: https://quay.io/repository/biocontainers/psascan
.. _`psascan/tags`: https://quay.io/repository/biocontainers/psascan?tab=tags


.. raw:: html

    <script>
        var package = "psascan";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psascan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psascan/README.html