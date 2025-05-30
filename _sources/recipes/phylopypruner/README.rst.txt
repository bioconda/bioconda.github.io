:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylopypruner'
.. highlight: bash

phylopypruner
=============

.. conda:recipe:: phylopypruner
   :replaces_section_title:
   :noindex:

   Tree\-based orthology inference.

   :homepage: https://github.com/fethalen/phylopypruner
   :documentation: https://gitlab.com/fethalen/phylopypruner/-/wikis/home
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phylopypruner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopypruner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopypruner/meta.yaml>`_

   


.. conda:package:: phylopypruner

   |downloads_phylopypruner| |docker_phylopypruner|

   :versions:
      
      

      ``1.2.6-0``

      

   
   :depends python: ``>=3.6``
   :depends setuptools: 
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

      mamba install phylopypruner

   and update with::

      mamba update phylopypruner

  To create a new environment, run::

      mamba create --name myenvname phylopypruner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylopypruner:<tag>

   (see `phylopypruner/tags`_ for valid values for ``<tag>``)


.. |downloads_phylopypruner| image:: https://img.shields.io/conda/dn/bioconda/phylopypruner.svg?style=flat
   :target: https://anaconda.org/bioconda/phylopypruner
   :alt:   (downloads)
.. |docker_phylopypruner| image:: https://quay.io/repository/biocontainers/phylopypruner/status
   :target: https://quay.io/repository/biocontainers/phylopypruner
.. _`phylopypruner/tags`: https://quay.io/repository/biocontainers/phylopypruner?tab=tags


.. raw:: html

    <script>
        var package = "phylopypruner";
        var versions = ["1.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylopypruner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylopypruner/README.html