:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apu-label-propagation'
.. highlight: bash

apu-label-propagation
=====================

.. conda:recipe:: apu-label-propagation
   :replaces_section_title:
   :noindex:

   Adaptive Positive\-Unlabelled label propagation

   :homepage: https://github.com/AndMastro/NIAPU
   :license: MIT
   :recipe: /`apu-label-propagation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apu-label-propagation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apu-label-propagation/meta.yaml>`_

   


.. conda:package:: apu-label-propagation

   |downloads_apu-label-propagation| |docker_apu-label-propagation|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install apu-label-propagation

   and update with::

      mamba update apu-label-propagation

  To create a new environment, run::

      mamba create --name myenvname apu-label-propagation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apu-label-propagation:<tag>

   (see `apu-label-propagation/tags`_ for valid values for ``<tag>``)


.. |downloads_apu-label-propagation| image:: https://img.shields.io/conda/dn/bioconda/apu-label-propagation.svg?style=flat
   :target: https://anaconda.org/bioconda/apu-label-propagation
   :alt:   (downloads)
.. |docker_apu-label-propagation| image:: https://quay.io/repository/biocontainers/apu-label-propagation/status
   :target: https://quay.io/repository/biocontainers/apu-label-propagation
.. _`apu-label-propagation/tags`: https://quay.io/repository/biocontainers/apu-label-propagation?tab=tags


.. raw:: html

    <script>
        var package = "apu-label-propagation";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apu-label-propagation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apu-label-propagation/README.html