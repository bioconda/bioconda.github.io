:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ete2'
.. highlight: bash

ete2
====

.. conda:recipe:: ete2
   :replaces_section_title:
   :noindex:

   Phylogenetic tree analyses and exploration

   :homepage: http://etetoolkit.org/
   :license: GPLv3
   :recipe: /`ete2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2/meta.yaml>`_

   


.. conda:package:: ete2

   |downloads_ete2| |docker_ete2|

   :versions:
      
      

      ``2.3.10-4``,  ``2.3.10-3``,  ``2.3.10-2``,  ``2.3.10-1``,  ``2.3.10-0``,  ``2.2.1072-2``

      

   
   :depends lxml: 
   :depends mysql-python: 
   :depends numpy: 
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

      mamba install ete2

   and update with::

      mamba update ete2

  To create a new environment, run::

      mamba create --name myenvname ete2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ete2:<tag>

   (see `ete2/tags`_ for valid values for ``<tag>``)


.. |downloads_ete2| image:: https://img.shields.io/conda/dn/bioconda/ete2.svg?style=flat
   :target: https://anaconda.org/bioconda/ete2
   :alt:   (downloads)
.. |docker_ete2| image:: https://quay.io/repository/biocontainers/ete2/status
   :target: https://quay.io/repository/biocontainers/ete2
.. _`ete2/tags`: https://quay.io/repository/biocontainers/ete2?tab=tags


.. raw:: html

    <script>
        var package = "ete2";
        var versions = ["2.3.10","2.3.10","2.3.10","2.3.10","2.3.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ete2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ete2/README.html