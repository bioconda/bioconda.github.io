:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spatyper'
.. highlight: bash

spatyper
========

.. conda:recipe:: spatyper
   :replaces_section_title:
   :noindex:

   Computational method for finding spa types.

   :homepage: https://github.com/HCGB-IGTP/spaTyper
   :license: LGPL-3
   :recipe: /`spatyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spatyper/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4063625`

   


.. conda:package:: spatyper

   |downloads_spatyper| |docker_spatyper|

   :versions:
      
      

      ``0.3.3-3``,  ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.1-0``

      

   
   :depends python: ``>=3.6``
   :depends wget: 
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

      mamba install spatyper

   and update with::

      mamba update spatyper

  To create a new environment, run::

      mamba create --name myenvname spatyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spatyper:<tag>

   (see `spatyper/tags`_ for valid values for ``<tag>``)


.. |downloads_spatyper| image:: https://img.shields.io/conda/dn/bioconda/spatyper.svg?style=flat
   :target: https://anaconda.org/bioconda/spatyper
   :alt:   (downloads)
.. |docker_spatyper| image:: https://quay.io/repository/biocontainers/spatyper/status
   :target: https://quay.io/repository/biocontainers/spatyper
.. _`spatyper/tags`: https://quay.io/repository/biocontainers/spatyper?tab=tags


.. raw:: html

    <script>
        var package = "spatyper";
        var versions = ["0.3.3","0.3.3","0.3.3","0.3.3","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spatyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spatyper/README.html