:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squizz'
.. highlight: bash

squizz
======

.. conda:recipe:: squizz
   :replaces_section_title:
   :noindex:

   Squizz is a sequence\/alignment format checker\, but it has some conversion capabilities too.

   :homepage: http://ftp.pasteur.fr/pub/gensoft/projects/squizz/
   :license: GPL 2
   :recipe: /`squizz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squizz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squizz/meta.yaml>`_

   


.. conda:package:: squizz

   |downloads_squizz| |docker_squizz|

   :versions:
      
      

      ``0.99d-6``,  ``0.99d-5``,  ``0.99d-4``,  ``0.99d-3``,  ``0.99d-2``,  ``0.99d-1``,  ``0.99d-0``

      

   
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

      mamba install squizz

   and update with::

      mamba update squizz

  To create a new environment, run::

      mamba create --name myenvname squizz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squizz:<tag>

   (see `squizz/tags`_ for valid values for ``<tag>``)


.. |downloads_squizz| image:: https://img.shields.io/conda/dn/bioconda/squizz.svg?style=flat
   :target: https://anaconda.org/bioconda/squizz
   :alt:   (downloads)
.. |docker_squizz| image:: https://quay.io/repository/biocontainers/squizz/status
   :target: https://quay.io/repository/biocontainers/squizz
.. _`squizz/tags`: https://quay.io/repository/biocontainers/squizz?tab=tags


.. raw:: html

    <script>
        var package = "squizz";
        var versions = ["0.99d","0.99d","0.99d","0.99d","0.99d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squizz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squizz/README.html