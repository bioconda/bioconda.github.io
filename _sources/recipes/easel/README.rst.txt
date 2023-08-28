:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'easel'
.. highlight: bash

easel
=====

.. conda:recipe:: easel
   :replaces_section_title:
   :noindex:

   Easel is an ANSI C code library for computational analysis of biological sequences using probabilistic models.

   :homepage: https://github.com/EddyRivasLab/easel
   :license: BSD / BSD
   :recipe: /`easel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easel/meta.yaml>`_

   


.. conda:package:: easel

   |downloads_easel| |docker_easel|

   :versions:
      
      

      ``0.49-0``,  ``0.48-3``,  ``0.48-2``,  ``0.48-1``,  ``0.48-0``,  ``0.47-0``,  ``0.45-1``,  ``0.45-0``

      

   
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

      mamba install easel

   and update with::

      mamba update easel

  To create a new environment, run::

      mamba create --name myenvname easel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/easel:<tag>

   (see `easel/tags`_ for valid values for ``<tag>``)


.. |downloads_easel| image:: https://img.shields.io/conda/dn/bioconda/easel.svg?style=flat
   :target: https://anaconda.org/bioconda/easel
   :alt:   (downloads)
.. |docker_easel| image:: https://quay.io/repository/biocontainers/easel/status
   :target: https://quay.io/repository/biocontainers/easel
.. _`easel/tags`: https://quay.io/repository/biocontainers/easel?tab=tags


.. raw:: html

    <script>
        var package = "easel";
        var versions = ["0.49","0.48","0.48","0.48","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/easel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/easel/README.html