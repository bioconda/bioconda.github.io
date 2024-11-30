:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifieval'
.. highlight: bash

hifieval
========

.. conda:recipe:: hifieval
   :replaces_section_title:
   :noindex:

   Evaluate long\-read error correction mainly with PacBio High\-Fidelity Reads \(HiFi reads\)

   :homepage: https://github.com/magspho/hifieval
   :license: MIT
   :recipe: /`hifieval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifieval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifieval/meta.yaml>`_

   


.. conda:package:: hifieval

   |downloads_hifieval| |docker_hifieval|

   :versions:
      
      

      ``0.4.0-0``

      

   
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

      mamba install hifieval

   and update with::

      mamba update hifieval

  To create a new environment, run::

      mamba create --name myenvname hifieval

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifieval:<tag>

   (see `hifieval/tags`_ for valid values for ``<tag>``)


.. |downloads_hifieval| image:: https://img.shields.io/conda/dn/bioconda/hifieval.svg?style=flat
   :target: https://anaconda.org/bioconda/hifieval
   :alt:   (downloads)
.. |docker_hifieval| image:: https://quay.io/repository/biocontainers/hifieval/status
   :target: https://quay.io/repository/biocontainers/hifieval
.. _`hifieval/tags`: https://quay.io/repository/biocontainers/hifieval?tab=tags


.. raw:: html

    <script>
        var package = "hifieval";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifieval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifieval/README.html