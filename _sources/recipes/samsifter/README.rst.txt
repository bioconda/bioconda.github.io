:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsifter'
.. highlight: bash

samsifter
=========

.. conda:recipe:: samsifter
   :replaces_section_title:
   :noindex:

   Workflow editor for metagenomic analysis

   :homepage: http://pypi.python.org/pypi/SamSifter/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`samsifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter/meta.yaml>`_

   


.. conda:package:: samsifter

   |downloads_samsifter| |docker_samsifter|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends matplotlib: ``>=1.3.1``
   :depends numpy: ``>=1.6.1``
   :depends pandas: ``>=0.14.1``
   :depends pyqt: ``>=4.11.4,<4.12.0a0``
   :depends python: ``>=3.5,<3.6.0a0``
   :depends python-dateutil: 
   :depends pytz: 
   :depends xorg-libsm: 
   :depends xorg-libxrender: 
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

      mamba install samsifter

   and update with::

      mamba update samsifter

  To create a new environment, run::

      mamba create --name myenvname samsifter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samsifter:<tag>

   (see `samsifter/tags`_ for valid values for ``<tag>``)


.. |downloads_samsifter| image:: https://img.shields.io/conda/dn/bioconda/samsifter.svg?style=flat
   :target: https://anaconda.org/bioconda/samsifter
   :alt:   (downloads)
.. |docker_samsifter| image:: https://quay.io/repository/biocontainers/samsifter/status
   :target: https://quay.io/repository/biocontainers/samsifter
.. _`samsifter/tags`: https://quay.io/repository/biocontainers/samsifter?tab=tags


.. raw:: html

    <script>
        var package = "samsifter";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsifter/README.html