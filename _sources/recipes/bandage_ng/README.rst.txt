:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage_ng'
.. highlight: bash

bandage_ng
==========

.. conda:recipe:: bandage_ng
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily

   :homepage: https://github.com/asl/BandageNG
   :license: GPL3 / GPL-3.0
   :recipe: /`bandage_ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage_ng

   |downloads_bandage_ng| |docker_bandage_ng|

   :versions:
      
      

      ``2022.09-4``,  ``2022.09-3``,  ``2022.09-2``,  ``2022.09-1``,  ``2022.09-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends qt6-main: ``>=6.7.1,<6.8.0a0``
   :depends xorg-libice: ``>=1.1.1,<2.0a0``
   :depends xorg-libsm: ``>=1.2.4,<2.0a0``
   :depends xorg-libx11: ``>=1.8.9,<2.0a0``
   :depends xorg-libxext: ``>=1.3.4,<2.0a0``
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

      mamba install bandage_ng

   and update with::

      mamba update bandage_ng

  To create a new environment, run::

      mamba create --name myenvname bandage_ng

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bandage_ng:<tag>

   (see `bandage_ng/tags`_ for valid values for ``<tag>``)


.. |downloads_bandage_ng| image:: https://img.shields.io/conda/dn/bioconda/bandage_ng.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage_ng
   :alt:   (downloads)
.. |docker_bandage_ng| image:: https://quay.io/repository/biocontainers/bandage_ng/status
   :target: https://quay.io/repository/biocontainers/bandage_ng
.. _`bandage_ng/tags`: https://quay.io/repository/biocontainers/bandage_ng?tab=tags


.. raw:: html

    <script>
        var package = "bandage_ng";
        var versions = ["2022.09","2022.09","2022.09","2022.09","2022.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage_ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage_ng/README.html