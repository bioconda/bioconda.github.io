:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hpsuissero'
.. highlight: bash

hpsuissero
==========

.. conda:recipe:: hpsuissero
   :replaces_section_title:
   :noindex:

   Rapid Haemophilus parasuis serotyping pipeline for Nanopore Data

   :homepage: https://github.com/jimmyliu1326/HpsuisSero
   :license: MIT
   :recipe: /`hpsuissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpsuissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpsuissero/meta.yaml>`_

   


.. conda:package:: hpsuissero

   |downloads_hpsuissero| |docker_hpsuissero|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast: ``>=2.6``
   :depends flye: ``>=2.7.1``
   :depends medaka: ``1.0.1``
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

      mamba install hpsuissero

   and update with::

      mamba update hpsuissero

  To create a new environment, run::

      mamba create --name myenvname hpsuissero

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hpsuissero:<tag>

   (see `hpsuissero/tags`_ for valid values for ``<tag>``)


.. |downloads_hpsuissero| image:: https://img.shields.io/conda/dn/bioconda/hpsuissero.svg?style=flat
   :target: https://anaconda.org/bioconda/hpsuissero
   :alt:   (downloads)
.. |docker_hpsuissero| image:: https://quay.io/repository/biocontainers/hpsuissero/status
   :target: https://quay.io/repository/biocontainers/hpsuissero
.. _`hpsuissero/tags`: https://quay.io/repository/biocontainers/hpsuissero?tab=tags


.. raw:: html

    <script>
        var package = "hpsuissero";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hpsuissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hpsuissero/README.html