:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tetranscripts'
.. highlight: bash

tetranscripts
=============

.. conda:recipe:: tetranscripts
   :replaces_section_title:
   :noindex:

   A package for including transposable elements in differential enrichment analysis of sequencing datasets.

   :homepage: http://hammelllab.labsites.cshl.edu/software#TEToolkit
   :license: GPL3 / GPL-3.0-only
   :recipe: /`tetranscripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetranscripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetranscripts/meta.yaml>`_

   


.. conda:package:: tetranscripts

   |downloads_tetranscripts| |docker_tetranscripts|

   :versions:
      
      

      ``2.2.3-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``

      

   
   :depends bioconductor-deseq: ``>=1.38``
   :depends bioconductor-deseq2: ``>=1.26``
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends r-base: 
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

      mamba install tetranscripts

   and update with::

      mamba update tetranscripts

  To create a new environment, run::

      mamba create --name myenvname tetranscripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tetranscripts:<tag>

   (see `tetranscripts/tags`_ for valid values for ``<tag>``)


.. |downloads_tetranscripts| image:: https://img.shields.io/conda/dn/bioconda/tetranscripts.svg?style=flat
   :target: https://anaconda.org/bioconda/tetranscripts
   :alt:   (downloads)
.. |docker_tetranscripts| image:: https://quay.io/repository/biocontainers/tetranscripts/status
   :target: https://quay.io/repository/biocontainers/tetranscripts
.. _`tetranscripts/tags`: https://quay.io/repository/biocontainers/tetranscripts?tab=tags


.. raw:: html

    <script>
        var package = "tetranscripts";
        var versions = ["2.2.3","2.2.1","2.2.1","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tetranscripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tetranscripts/README.html