:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauve'
.. highlight: bash

mauve
=====

.. conda:recipe:: mauve
   :replaces_section_title:
   :noindex:

   Mauve is a system for constructing multiple genome alignments in the presence of large\-scale evolutionary events such as rearrangement and inversion

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve/meta.yaml>`_

   


.. conda:package:: mauve

   |downloads_mauve| |docker_mauve|

   :versions:
      
      

      ``2.4.0.snapshot_2015_02_13-4``,  ``2.4.0.snapshot_2015_02_13-3``,  ``2.4.0.snapshot_2015_02_13-2``,  ``2.4.0.snapshot_2015_02_13-1``,  ``2.4.0.snapshot_2015_02_13-0``,  ``2.4.0.r4736-3``,  ``2.4.0.r4736-2``,  ``2.4.0.r4736-1``,  ``2.4.0.r4736-0``

      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends mauvealigner: 
   :depends openjdk: ``8.0.192.*``
   :depends xorg-libxi: 
   :depends xorg-libxrender: 
   :depends xorg-libxtst: 
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

      mamba install mauve

   and update with::

      mamba update mauve

  To create a new environment, run::

      mamba create --name myenvname mauve

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mauve:<tag>

   (see `mauve/tags`_ for valid values for ``<tag>``)


.. |downloads_mauve| image:: https://img.shields.io/conda/dn/bioconda/mauve.svg?style=flat
   :target: https://anaconda.org/bioconda/mauve
   :alt:   (downloads)
.. |docker_mauve| image:: https://quay.io/repository/biocontainers/mauve/status
   :target: https://quay.io/repository/biocontainers/mauve
.. _`mauve/tags`: https://quay.io/repository/biocontainers/mauve?tab=tags


.. raw:: html

    <script>
        var package = "mauve";
        var versions = ["2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13","2.4.0.snapshot_2015_02_13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauve/README.html