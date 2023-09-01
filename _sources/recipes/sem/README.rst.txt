:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sem'
.. highlight: bash

sem
===

.. conda:recipe:: sem
   :replaces_section_title:
   :noindex:

   A nucleosome calling package for nucleosome subtype detection

   :homepage: https://github.com/YenLab/SEM
   :license: MIT
   :recipe: /`sem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sem/meta.yaml>`_

   


.. conda:package:: sem

   |downloads_sem| |docker_sem|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.2-0``

      

   
   :depends openjdk: ``>=11.0.1,<12.0.0``
   :depends python: 
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

      mamba install sem

   and update with::

      mamba update sem

  To create a new environment, run::

      mamba create --name myenvname sem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sem:<tag>

   (see `sem/tags`_ for valid values for ``<tag>``)


.. |downloads_sem| image:: https://img.shields.io/conda/dn/bioconda/sem.svg?style=flat
   :target: https://anaconda.org/bioconda/sem
   :alt:   (downloads)
.. |docker_sem| image:: https://quay.io/repository/biocontainers/sem/status
   :target: https://quay.io/repository/biocontainers/sem
.. _`sem/tags`: https://quay.io/repository/biocontainers/sem?tab=tags


.. raw:: html

    <script>
        var package = "sem";
        var versions = ["1.2.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sem/README.html