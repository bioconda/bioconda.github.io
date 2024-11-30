:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadarida-c'
.. highlight: bash

tadarida-c
==========

.. conda:recipe:: tadarida-c
   :replaces_section_title:
   :noindex:

   Tadarida\-C \(Toolbox for Animal Detection on Acoustic Recordings \- Classification part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-C
   :license: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
   :recipe: /`tadarida-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c/meta.yaml>`_

   


.. conda:package:: tadarida-c

   |downloads_tadarida-c| |docker_tadarida-c|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends r-data.table: 
   :depends r-randomforest: 
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

      mamba install tadarida-c

   and update with::

      mamba update tadarida-c

  To create a new environment, run::

      mamba create --name myenvname tadarida-c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tadarida-c:<tag>

   (see `tadarida-c/tags`_ for valid values for ``<tag>``)


.. |downloads_tadarida-c| image:: https://img.shields.io/conda/dn/bioconda/tadarida-c.svg?style=flat
   :target: https://anaconda.org/bioconda/tadarida-c
   :alt:   (downloads)
.. |docker_tadarida-c| image:: https://quay.io/repository/biocontainers/tadarida-c/status
   :target: https://quay.io/repository/biocontainers/tadarida-c
.. _`tadarida-c/tags`: https://quay.io/repository/biocontainers/tadarida-c?tab=tags


.. raw:: html

    <script>
        var package = "tadarida-c";
        var versions = ["1.2","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-c/README.html