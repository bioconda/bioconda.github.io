:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsearch'
.. highlight: bash

gsearch
=======

.. conda:recipe:: gsearch
   :replaces_section_title:
   :noindex:

   gsearch is an ultra\-fast and scalable microbial genome search program based on MinHash\-like metrics and graph\-based approximate nearest neighbor search

   :homepage: https://github.com/jean-pierreBoth/gsearch
   :license: MIT
   :recipe: /`gsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch/meta.yaml>`_

   


.. conda:package:: gsearch

   |downloads_gsearch| |docker_gsearch|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-0``,  ``0.0.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gsearch

   and update with::

      mamba update gsearch

  To create a new environment, run::

      mamba create --name myenvname gsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gsearch:<tag>

   (see `gsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_gsearch| image:: https://img.shields.io/conda/dn/bioconda/gsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/gsearch
   :alt:   (downloads)
.. |docker_gsearch| image:: https://quay.io/repository/biocontainers/gsearch/status
   :target: https://quay.io/repository/biocontainers/gsearch
.. _`gsearch/tags`: https://quay.io/repository/biocontainers/gsearch?tab=tags


.. raw:: html

    <script>
        var package = "gsearch";
        var versions = ["0.1.5","0.1.4","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsearch/README.html