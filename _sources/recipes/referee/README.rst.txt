:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'referee'
.. highlight: bash

referee
=======

.. conda:recipe:: referee
   :replaces_section_title:
   :noindex:

   Quality scoring for reference genomes

   :homepage: https://github.com/gwct/referee
   :license: GPL-3.0-only
   :recipe: /`referee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referee/meta.yaml>`_
   :links: biotools: :biotools:`Referee`, doi: :doi:`10.1093/gbe/evz088`

   


.. conda:package:: referee

   |downloads_referee| |docker_referee|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends python: ``>=3``
   :depends samtools: 
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

      mamba install referee

   and update with::

      mamba update referee

  To create a new environment, run::

      mamba create --name myenvname referee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/referee:<tag>

   (see `referee/tags`_ for valid values for ``<tag>``)


.. |downloads_referee| image:: https://img.shields.io/conda/dn/bioconda/referee.svg?style=flat
   :target: https://anaconda.org/bioconda/referee
   :alt:   (downloads)
.. |docker_referee| image:: https://quay.io/repository/biocontainers/referee/status
   :target: https://quay.io/repository/biocontainers/referee
.. _`referee/tags`: https://quay.io/repository/biocontainers/referee?tab=tags


.. raw:: html

    <script>
        var package = "referee";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/referee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/referee/README.html