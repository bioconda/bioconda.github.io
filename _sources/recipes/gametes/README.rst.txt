:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gametes'
.. highlight: bash

gametes
=======

.. conda:recipe:: gametes
   :replaces_section_title:
   :noindex:

   Tool for the generation of complex single SNP models

   :homepage: https://sourceforge.net/projects/gametes/
   :license: GPL-2.0-only
   :recipe: /`gametes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gametes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gametes/meta.yaml>`_

   


.. conda:package:: gametes

   |downloads_gametes| |docker_gametes|

   :versions:
      
      

      ``2.1-1``,  ``2.1-0``

      

   
   :depends openjdk: ``>=17``
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

      mamba install gametes

   and update with::

      mamba update gametes

  To create a new environment, run::

      mamba create --name myenvname gametes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gametes:<tag>

   (see `gametes/tags`_ for valid values for ``<tag>``)


.. |downloads_gametes| image:: https://img.shields.io/conda/dn/bioconda/gametes.svg?style=flat
   :target: https://anaconda.org/bioconda/gametes
   :alt:   (downloads)
.. |docker_gametes| image:: https://quay.io/repository/biocontainers/gametes/status
   :target: https://quay.io/repository/biocontainers/gametes
.. _`gametes/tags`: https://quay.io/repository/biocontainers/gametes?tab=tags


.. raw:: html

    <script>
        var package = "gametes";
        var versions = ["2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gametes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gametes/README.html