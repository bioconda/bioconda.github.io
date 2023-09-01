:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage'
.. highlight: bash

bandage
=======

.. conda:recipe:: bandage
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily

   :homepage: https://github.com/rrwick/Bandage
   :license: GPL3 / GNU General Public License, version 3
   :recipe: /`bandage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage

   |downloads_bandage| |docker_bandage|

   :versions:
      
      

      ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends qt: ``>=5.12.5``
   :depends xorg-libxrender: 
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

      mamba install bandage

   and update with::

      mamba update bandage

  To create a new environment, run::

      mamba create --name myenvname bandage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bandage:<tag>

   (see `bandage/tags`_ for valid values for ``<tag>``)


.. |downloads_bandage| image:: https://img.shields.io/conda/dn/bioconda/bandage.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage
   :alt:   (downloads)
.. |docker_bandage| image:: https://quay.io/repository/biocontainers/bandage/status
   :target: https://quay.io/repository/biocontainers/bandage
.. _`bandage/tags`: https://quay.io/repository/biocontainers/bandage?tab=tags


.. raw:: html

    <script>
        var package = "bandage";
        var versions = ["0.8.1","0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage/README.html