:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amas'
.. highlight: bash

amas
====

.. conda:recipe:: amas
   :replaces_section_title:
   :noindex:

   Calculate various summary statistics on a multiple sequence alignment

   :homepage: https://github.com/marekborowiec/AMAS
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`amas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amas/meta.yaml>`_

   


.. conda:package:: amas

   |downloads_amas| |docker_amas|

   :versions:
      
      

      ``1.0-0``,  ``0.98-1``,  ``0.98-0``

      

   
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

      mamba install amas

   and update with::

      mamba update amas

  To create a new environment, run::

      mamba create --name myenvname amas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amas:<tag>

   (see `amas/tags`_ for valid values for ``<tag>``)


.. |downloads_amas| image:: https://img.shields.io/conda/dn/bioconda/amas.svg?style=flat
   :target: https://anaconda.org/bioconda/amas
   :alt:   (downloads)
.. |docker_amas| image:: https://quay.io/repository/biocontainers/amas/status
   :target: https://quay.io/repository/biocontainers/amas
.. _`amas/tags`: https://quay.io/repository/biocontainers/amas?tab=tags


.. raw:: html

    <script>
        var package = "amas";
        var versions = ["1.0","0.98","0.98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amas/README.html