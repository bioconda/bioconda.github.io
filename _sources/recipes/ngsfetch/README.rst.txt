:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsfetch'
.. highlight: bash

ngsfetch
========

.. conda:recipe:: ngsfetch
   :replaces_section_title:
   :noindex:

   Fast retrieval of metadata and fastq files with ffq and aria2c

   :homepage: https://github.com/NaotoKubota/ngsfetch
   :license: MIT
   :recipe: /`ngsfetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsfetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsfetch/meta.yaml>`_

   Fast retrieval of metadata and fastq files with ffq and aria2c


.. conda:package:: ngsfetch

   |downloads_ngsfetch| |docker_ngsfetch|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends aria2: ``>=0.0.1b0``
   :depends ffq: ``>=0.3.1``
   :depends python: 
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

      mamba install ngsfetch

   and update with::

      mamba update ngsfetch

  To create a new environment, run::

      mamba create --name myenvname ngsfetch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsfetch:<tag>

   (see `ngsfetch/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsfetch| image:: https://img.shields.io/conda/dn/bioconda/ngsfetch.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsfetch
   :alt:   (downloads)
.. |docker_ngsfetch| image:: https://quay.io/repository/biocontainers/ngsfetch/status
   :target: https://quay.io/repository/biocontainers/ngsfetch
.. _`ngsfetch/tags`: https://quay.io/repository/biocontainers/ngsfetch?tab=tags


.. raw:: html

    <script>
        var package = "ngsfetch";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsfetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsfetch/README.html