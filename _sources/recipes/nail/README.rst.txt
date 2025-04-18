:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nail'
.. highlight: bash

nail
====

.. conda:recipe:: nail
   :replaces_section_title:
   :noindex:

   Profile Hidden Markov Model \(pHMM\) biological sequence alignment tool

   :homepage: https://github.com/TravisWheelerLab/nail
   :license: BSD / BSD-3-Clause
   :recipe: /`nail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nail/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.01.27.577580`

   


.. conda:package:: nail

   |downloads_nail| |docker_nail|

   :versions:
      
      

      ``0.3.0-0``

      

   
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

      mamba install nail

   and update with::

      mamba update nail

  To create a new environment, run::

      mamba create --name myenvname nail

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nail:<tag>

   (see `nail/tags`_ for valid values for ``<tag>``)


.. |downloads_nail| image:: https://img.shields.io/conda/dn/bioconda/nail.svg?style=flat
   :target: https://anaconda.org/bioconda/nail
   :alt:   (downloads)
.. |docker_nail| image:: https://quay.io/repository/biocontainers/nail/status
   :target: https://quay.io/repository/biocontainers/nail
.. _`nail/tags`: https://quay.io/repository/biocontainers/nail?tab=tags


.. raw:: html

    <script>
        var package = "nail";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nail/README.html