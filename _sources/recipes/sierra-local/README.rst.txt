:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sierra-local'
.. highlight: bash

sierra-local
============

.. conda:recipe:: sierra-local
   :replaces_section_title:
   :noindex:

   sierra\-local is a Python3 implementation of the Stanford HIVdb Sierra service for generating drug resistance predictions from HIV\-1 sequences.

   :homepage: https://github.com/PoonLab/sierra-local
   :license: GPL3 / GPLv3
   :recipe: /`sierra-local <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierra-local>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierra-local/meta.yaml>`_

   


.. conda:package:: sierra-local

   |downloads_sierra-local| |docker_sierra-local|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends requests: 
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

      mamba install sierra-local

   and update with::

      mamba update sierra-local

  To create a new environment, run::

      mamba create --name myenvname sierra-local

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sierra-local:<tag>

   (see `sierra-local/tags`_ for valid values for ``<tag>``)


.. |downloads_sierra-local| image:: https://img.shields.io/conda/dn/bioconda/sierra-local.svg?style=flat
   :target: https://anaconda.org/bioconda/sierra-local
   :alt:   (downloads)
.. |docker_sierra-local| image:: https://quay.io/repository/biocontainers/sierra-local/status
   :target: https://quay.io/repository/biocontainers/sierra-local
.. _`sierra-local/tags`: https://quay.io/repository/biocontainers/sierra-local?tab=tags


.. raw:: html

    <script>
        var package = "sierra-local";
        var versions = ["0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sierra-local/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sierra-local/README.html