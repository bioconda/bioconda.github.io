:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryptkeeper'
.. highlight: bash

cryptkeeper
===========

.. conda:recipe:: cryptkeeper
   :replaces_section_title:
   :noindex:

   A negative design tool for predicting and visualizing undesired gene expression

   :homepage: https://github.com/barricklab/cryptkeeper
   :license: GPL3 / GPL-3.0-only
   :recipe: /`cryptkeeper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptkeeper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptkeeper/meta.yaml>`_

   


.. conda:package:: cryptkeeper

   |downloads_cryptkeeper| |docker_cryptkeeper|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: 
   :depends bokeh: 
   :depends ostir: 
   :depends promotercalculator: 
   :depends python: ``>=3.9``
   :depends rhotermpredict: 
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

      mamba install cryptkeeper

   and update with::

      mamba update cryptkeeper

  To create a new environment, run::

      mamba create --name myenvname cryptkeeper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cryptkeeper:<tag>

   (see `cryptkeeper/tags`_ for valid values for ``<tag>``)


.. |downloads_cryptkeeper| image:: https://img.shields.io/conda/dn/bioconda/cryptkeeper.svg?style=flat
   :target: https://anaconda.org/bioconda/cryptkeeper
   :alt:   (downloads)
.. |docker_cryptkeeper| image:: https://quay.io/repository/biocontainers/cryptkeeper/status
   :target: https://quay.io/repository/biocontainers/cryptkeeper
.. _`cryptkeeper/tags`: https://quay.io/repository/biocontainers/cryptkeeper?tab=tags


.. raw:: html

    <script>
        var package = "cryptkeeper";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryptkeeper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryptkeeper/README.html