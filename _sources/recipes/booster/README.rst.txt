:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'booster'
.. highlight: bash

booster
=======

.. conda:recipe:: booster
   :replaces_section_title:
   :noindex:

   BOOSTER is a new way of computing bootstrap supports in large phylogenies.

   :homepage: https://github.com/evolbioinfo/booster
   :license: GPL-2.0
   :recipe: /`booster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/booster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/booster/meta.yaml>`_

   


.. conda:package:: booster

   |downloads_booster| |docker_booster|

   :versions:
      
      

      ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install booster

   and update with::

      mamba update booster

  To create a new environment, run::

      mamba create --name myenvname booster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/booster:<tag>

   (see `booster/tags`_ for valid values for ``<tag>``)


.. |downloads_booster| image:: https://img.shields.io/conda/dn/bioconda/booster.svg?style=flat
   :target: https://anaconda.org/bioconda/booster
   :alt:   (downloads)
.. |docker_booster| image:: https://quay.io/repository/biocontainers/booster/status
   :target: https://quay.io/repository/biocontainers/booster
.. _`booster/tags`: https://quay.io/repository/biocontainers/booster?tab=tags


.. raw:: html

    <script>
        var package = "booster";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/booster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/booster/README.html