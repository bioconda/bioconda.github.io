:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skewer'
.. highlight: bash

skewer
======

.. conda:recipe:: skewer
   :replaces_section_title:
   :noindex:

   A fast and accurate adapter trimmer for paired\-end reads.

   :homepage: https://github.com/relipmoc/skewer.git
   :license: MIT
   :recipe: /`skewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skewer/meta.yaml>`_
   :links: biotools: :biotools:`skewer`

   


.. conda:package:: skewer

   |downloads_skewer| |docker_skewer|

   :versions:
      
      

      ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.126-2``,  ``0.1.126-1``,  ``0.1.126-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
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

      mamba install skewer

   and update with::

      mamba update skewer

  To create a new environment, run::

      mamba create --name myenvname skewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skewer:<tag>

   (see `skewer/tags`_ for valid values for ``<tag>``)


.. |downloads_skewer| image:: https://img.shields.io/conda/dn/bioconda/skewer.svg?style=flat
   :target: https://anaconda.org/bioconda/skewer
   :alt:   (downloads)
.. |docker_skewer| image:: https://quay.io/repository/biocontainers/skewer/status
   :target: https://quay.io/repository/biocontainers/skewer
.. _`skewer/tags`: https://quay.io/repository/biocontainers/skewer?tab=tags


.. raw:: html

    <script>
        var package = "skewer";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.2","0.1.126"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skewer/README.html