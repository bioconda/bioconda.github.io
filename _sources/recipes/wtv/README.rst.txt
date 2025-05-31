:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtv'
.. highlight: bash

wtv
===

.. conda:recipe:: wtv
   :replaces_section_title:
   :noindex:

   A library and CLI for ion selection in mass spectrometry data.

   :homepage: https://recetox.github.io/wtv/
   :license: GPL-3.0-only
   :recipe: /`wtv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtv/meta.yaml>`_

   


.. conda:package:: wtv

   |downloads_wtv| |docker_wtv|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends matchms: ``>=0.27.0,<0.28.0``
   :depends numpy: ``>=1.26.4,<2.0.0``
   :depends pandas: ``>=2.2.3,<3.0.0``
   :depends python: ``>=3.9,<3.13``
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

      mamba install wtv

   and update with::

      mamba update wtv

  To create a new environment, run::

      mamba create --name myenvname wtv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wtv:<tag>

   (see `wtv/tags`_ for valid values for ``<tag>``)


.. |downloads_wtv| image:: https://img.shields.io/conda/dn/bioconda/wtv.svg?style=flat
   :target: https://anaconda.org/bioconda/wtv
   :alt:   (downloads)
.. |docker_wtv| image:: https://quay.io/repository/biocontainers/wtv/status
   :target: https://quay.io/repository/biocontainers/wtv
.. _`wtv/tags`: https://quay.io/repository/biocontainers/wtv?tab=tags


.. raw:: html

    <script>
        var package = "wtv";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtv/README.html