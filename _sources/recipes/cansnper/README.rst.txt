:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansnper'
.. highlight: bash

cansnper
========

.. conda:recipe:: cansnper
   :replaces_section_title:
   :noindex:

   A hierarchical genotype classifier of clonal pathogens.

   :homepage: https://github.com/adrlar/CanSNPer/
   :license: GPLv3
   :recipe: /`cansnper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper/meta.yaml>`_

   


.. conda:package:: cansnper

   |downloads_cansnper| |docker_cansnper|

   :versions:
      
      

      ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.8-1``,  ``1.0.8-0``

      

   
   :depends ete2: 
   :depends numpy: 
   :depends progressivemauve: 
   :depends pyqt: ``4.*``
   :depends python: ``<3``
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

      mamba install cansnper

   and update with::

      mamba update cansnper

  To create a new environment, run::

      mamba create --name myenvname cansnper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cansnper:<tag>

   (see `cansnper/tags`_ for valid values for ``<tag>``)


.. |downloads_cansnper| image:: https://img.shields.io/conda/dn/bioconda/cansnper.svg?style=flat
   :target: https://anaconda.org/bioconda/cansnper
   :alt:   (downloads)
.. |docker_cansnper| image:: https://quay.io/repository/biocontainers/cansnper/status
   :target: https://quay.io/repository/biocontainers/cansnper
.. _`cansnper/tags`: https://quay.io/repository/biocontainers/cansnper?tab=tags


.. raw:: html

    <script>
        var package = "cansnper";
        var versions = ["1.0.10","1.0.10","1.0.8","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansnper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansnper/README.html