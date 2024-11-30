:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmap'
.. highlight: bash

rmap
====

.. conda:recipe:: rmap
   :replaces_section_title:
   :noindex:

   rmap is a short reads mapper for next\-generation sequencing data

   :homepage: http://smithlabresearch.org/software/rmap/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap/meta.yaml>`_
   :links: biotools: :biotools:`rmap`

   


.. conda:package:: rmap

   |downloads_rmap| |docker_rmap|

   :versions:
      
      

      ``2.1-1``,  ``2.1-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install rmap

   and update with::

      mamba update rmap

  To create a new environment, run::

      mamba create --name myenvname rmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmap:<tag>

   (see `rmap/tags`_ for valid values for ``<tag>``)


.. |downloads_rmap| image:: https://img.shields.io/conda/dn/bioconda/rmap.svg?style=flat
   :target: https://anaconda.org/bioconda/rmap
   :alt:   (downloads)
.. |docker_rmap| image:: https://quay.io/repository/biocontainers/rmap/status
   :target: https://quay.io/repository/biocontainers/rmap
.. _`rmap/tags`: https://quay.io/repository/biocontainers/rmap?tab=tags


.. raw:: html

    <script>
        var package = "rmap";
        var versions = ["2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmap/README.html