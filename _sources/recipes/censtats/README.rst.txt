:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'censtats'
.. highlight: bash

censtats
========

.. conda:recipe:: censtats
   :replaces_section_title:
   :noindex:

   Centromere statistics toolkit.

   :homepage: https://github.com/logsdon-lab/CenStats
   :license: MIT
   :recipe: /`censtats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/censtats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/censtats/meta.yaml>`_

   


.. conda:package:: censtats

   |downloads_censtats| |docker_censtats|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends intervaltree: ``>=3.1.0``
   :depends loguru: ``>=0.7.2``
   :depends matplotlib-base: ``>=3.10.0``
   :depends mmh3: ``>=5.0.1``
   :depends numpy: ``>=2.2.1``
   :depends polars: ``>=1.19.0``
   :depends pyfaidx: ``>=0.8.1.4``
   :depends python: ``>=3.12``
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

      mamba install censtats

   and update with::

      mamba update censtats

  To create a new environment, run::

      mamba create --name myenvname censtats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/censtats:<tag>

   (see `censtats/tags`_ for valid values for ``<tag>``)


.. |downloads_censtats| image:: https://img.shields.io/conda/dn/bioconda/censtats.svg?style=flat
   :target: https://anaconda.org/bioconda/censtats
   :alt:   (downloads)
.. |docker_censtats| image:: https://quay.io/repository/biocontainers/censtats/status
   :target: https://quay.io/repository/biocontainers/censtats
.. _`censtats/tags`: https://quay.io/repository/biocontainers/censtats?tab=tags


.. raw:: html

    <script>
        var package = "censtats";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/censtats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/censtats/README.html