:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxburst'
.. highlight: bash

taxburst
========

.. conda:recipe:: taxburst
   :replaces_section_title:
   :noindex:

   sunburst plots for taxonomy

   :homepage: https://github.com/taxburst/taxburst
   :license: BSD-3-Clause
   :recipe: /`taxburst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxburst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxburst/meta.yaml>`_

   


.. conda:package:: taxburst

   |downloads_taxburst| |docker_taxburst|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends jinja2: ``>=3.1.2,<4``
   :depends pytest: ``>=8.3.4,<9``
   :depends python: ``>=3.11``
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

      mamba install taxburst

   and update with::

      mamba update taxburst

  To create a new environment, run::

      mamba create --name myenvname taxburst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxburst:<tag>

   (see `taxburst/tags`_ for valid values for ``<tag>``)


.. |downloads_taxburst| image:: https://img.shields.io/conda/dn/bioconda/taxburst.svg?style=flat
   :target: https://anaconda.org/bioconda/taxburst
   :alt:   (downloads)
.. |docker_taxburst| image:: https://quay.io/repository/biocontainers/taxburst/status
   :target: https://quay.io/repository/biocontainers/taxburst
.. _`taxburst/tags`: https://quay.io/repository/biocontainers/taxburst?tab=tags


.. raw:: html

    <script>
        var package = "taxburst";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxburst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxburst/README.html