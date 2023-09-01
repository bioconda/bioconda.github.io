:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gefast'
.. highlight: bash

gefast
======

.. conda:recipe:: gefast
   :replaces_section_title:
   :noindex:

   Clustering tool using Swarm\'s clustering strategy and Pass\-Join\'s segment filter.

   :homepage: https://github.com/romueller/gefast
   :license: AGPL
   :recipe: /`gefast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gefast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gefast/meta.yaml>`_

   


.. conda:package:: gefast

   |downloads_gefast| |docker_gefast|

   :versions:
      
      

      ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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

      mamba install gefast

   and update with::

      mamba update gefast

  To create a new environment, run::

      mamba create --name myenvname gefast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gefast:<tag>

   (see `gefast/tags`_ for valid values for ``<tag>``)


.. |downloads_gefast| image:: https://img.shields.io/conda/dn/bioconda/gefast.svg?style=flat
   :target: https://anaconda.org/bioconda/gefast
   :alt:   (downloads)
.. |docker_gefast| image:: https://quay.io/repository/biocontainers/gefast/status
   :target: https://quay.io/repository/biocontainers/gefast
.. _`gefast/tags`: https://quay.io/repository/biocontainers/gefast?tab=tags


.. raw:: html

    <script>
        var package = "gefast";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gefast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gefast/README.html