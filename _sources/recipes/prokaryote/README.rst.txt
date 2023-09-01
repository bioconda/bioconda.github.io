:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokaryote'
.. highlight: bash

prokaryote
==========

.. conda:recipe:: prokaryote
   :replaces_section_title:
   :noindex:

   CellProfiler\'s Java dependencies

   :homepage: https://github.com/CellProfiler/prokaryote
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`prokaryote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokaryote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokaryote/meta.yaml>`_

   


.. conda:package:: prokaryote

   |downloads_prokaryote| |docker_prokaryote|

   :versions:
      
      

      ``2.4.4-0``,  ``2.4.2-0``,  ``2.4.1-1``,  ``2.4.1-0``

      

   
   :depends python: 
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

      mamba install prokaryote

   and update with::

      mamba update prokaryote

  To create a new environment, run::

      mamba create --name myenvname prokaryote

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prokaryote:<tag>

   (see `prokaryote/tags`_ for valid values for ``<tag>``)


.. |downloads_prokaryote| image:: https://img.shields.io/conda/dn/bioconda/prokaryote.svg?style=flat
   :target: https://anaconda.org/bioconda/prokaryote
   :alt:   (downloads)
.. |docker_prokaryote| image:: https://quay.io/repository/biocontainers/prokaryote/status
   :target: https://quay.io/repository/biocontainers/prokaryote
.. _`prokaryote/tags`: https://quay.io/repository/biocontainers/prokaryote?tab=tags


.. raw:: html

    <script>
        var package = "prokaryote";
        var versions = ["2.4.4","2.4.2","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokaryote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokaryote/README.html