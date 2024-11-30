:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapsearch'
.. highlight: bash

rapsearch
=========

.. conda:recipe:: rapsearch
   :replaces_section_title:
   :noindex:

   RAPSearch2 is a tool for fast protein similarity searches.

   :homepage: http://omics.informatics.indiana.edu/mg/RAPSearch2/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rapsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch/meta.yaml>`_
   :links: biotools: :biotools:`rapsearch`

   


.. conda:package:: rapsearch

   |downloads_rapsearch| |docker_rapsearch|

   :versions:
      
      

      ``2.24-7``,  ``2.24-6``,  ``2.24-5``,  ``2.24-4``,  ``2.24-3``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install rapsearch

   and update with::

      mamba update rapsearch

  To create a new environment, run::

      mamba create --name myenvname rapsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapsearch:<tag>

   (see `rapsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_rapsearch| image:: https://img.shields.io/conda/dn/bioconda/rapsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rapsearch
   :alt:   (downloads)
.. |docker_rapsearch| image:: https://quay.io/repository/biocontainers/rapsearch/status
   :target: https://quay.io/repository/biocontainers/rapsearch
.. _`rapsearch/tags`: https://quay.io/repository/biocontainers/rapsearch?tab=tags


.. raw:: html

    <script>
        var package = "rapsearch";
        var versions = ["2.24","2.24","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapsearch/README.html