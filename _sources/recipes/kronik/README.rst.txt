:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kronik'
.. highlight: bash

kronik
======

.. conda:recipe:: kronik
   :replaces_section_title:
   :noindex:

   Utility for processing Hardklor features to find candidate peptides by chromatographic profiling

   :homepage: https://github.com/mhoopmann/kronik
   :license: Apache License, Version 2.0
   :recipe: /`kronik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: kronik

   |downloads_kronik| |docker_kronik|

   :versions:
      
      

      ``2.20-7``,  ``2.20-6``,  ``2.20-5``,  ``2.20-4``,  ``2.20-3``,  ``2.20-2``,  ``2.20-1``,  ``2.20-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install kronik

   and update with::

      mamba update kronik

  To create a new environment, run::

      mamba create --name myenvname kronik

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kronik:<tag>

   (see `kronik/tags`_ for valid values for ``<tag>``)


.. |downloads_kronik| image:: https://img.shields.io/conda/dn/bioconda/kronik.svg?style=flat
   :target: https://anaconda.org/bioconda/kronik
   :alt:   (downloads)
.. |docker_kronik| image:: https://quay.io/repository/biocontainers/kronik/status
   :target: https://quay.io/repository/biocontainers/kronik
.. _`kronik/tags`: https://quay.io/repository/biocontainers/kronik?tab=tags


.. raw:: html

    <script>
        var package = "kronik";
        var versions = ["2.20","2.20","2.20","2.20","2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kronik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kronik/README.html