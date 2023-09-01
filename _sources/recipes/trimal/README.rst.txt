:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimal'
.. highlight: bash

trimal
======

.. conda:recipe:: trimal
   :replaces_section_title:
   :noindex:

   A tool for the automated removal of spurious sequences or poorly aligned regions from a multiple sequence alignment

   :homepage: http://trimal.cgenomics.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`trimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimal/meta.yaml>`_
   :links: biotools: :biotools:`trimAl`

   


.. conda:package:: trimal

   |downloads_trimal| |docker_trimal|

   :versions:
      
      

      ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install trimal

   and update with::

      mamba update trimal

  To create a new environment, run::

      mamba create --name myenvname trimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimal:<tag>

   (see `trimal/tags`_ for valid values for ``<tag>``)


.. |downloads_trimal| image:: https://img.shields.io/conda/dn/bioconda/trimal.svg?style=flat
   :target: https://anaconda.org/bioconda/trimal
   :alt:   (downloads)
.. |docker_trimal| image:: https://quay.io/repository/biocontainers/trimal/status
   :target: https://quay.io/repository/biocontainers/trimal
.. _`trimal/tags`: https://quay.io/repository/biocontainers/trimal?tab=tags


.. raw:: html

    <script>
        var package = "trimal";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimal/README.html