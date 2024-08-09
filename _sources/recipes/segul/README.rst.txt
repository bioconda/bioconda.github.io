:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segul'
.. highlight: bash

segul
=====

.. conda:recipe:: segul
   :replaces_section_title:
   :noindex:

   An ultrafast and memory efficient tool for phylogenomics

   :homepage: https://github.com/hhandika/segul
   :license: MIT / MIT
   :recipe: /`segul <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segul>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segul/meta.yaml>`_

   


.. conda:package:: segul

   |downloads_segul| |docker_segul|

   :versions:
      
      

      ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.3-0``

      

   
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

      mamba install segul

   and update with::

      mamba update segul

  To create a new environment, run::

      mamba create --name myenvname segul

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segul:<tag>

   (see `segul/tags`_ for valid values for ``<tag>``)


.. |downloads_segul| image:: https://img.shields.io/conda/dn/bioconda/segul.svg?style=flat
   :target: https://anaconda.org/bioconda/segul
   :alt:   (downloads)
.. |docker_segul| image:: https://quay.io/repository/biocontainers/segul/status
   :target: https://quay.io/repository/biocontainers/segul
.. _`segul/tags`: https://quay.io/repository/biocontainers/segul?tab=tags


.. raw:: html

    <script>
        var package = "segul";
        var versions = ["0.22.1","0.22.0","0.21.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segul/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segul/README.html