:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkage2allegro'
.. highlight: bash

linkage2allegro
===============

.. conda:recipe:: linkage2allegro
   :replaces_section_title:
   :noindex:

   Converts between the output linkage formats of Merlin\, Simwalk\, Genehunter\, and Swiftlink into Allegro.

   :homepage: https://github.com/BioTools-Tek/linkage-converter
   :license: GPL3
   :recipe: /`linkage2allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro/meta.yaml>`_

   


.. conda:package:: linkage2allegro

   |downloads_linkage2allegro| |docker_linkage2allegro|

   :versions:
      
      

      ``2017.3-1``,  ``2017.3-0``,  ``2017.2-0``,  ``2017.1-0``

      

   
   :depends python: 
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

      mamba install linkage2allegro

   and update with::

      mamba update linkage2allegro

  To create a new environment, run::

      mamba create --name myenvname linkage2allegro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/linkage2allegro:<tag>

   (see `linkage2allegro/tags`_ for valid values for ``<tag>``)


.. |downloads_linkage2allegro| image:: https://img.shields.io/conda/dn/bioconda/linkage2allegro.svg?style=flat
   :target: https://anaconda.org/bioconda/linkage2allegro
   :alt:   (downloads)
.. |docker_linkage2allegro| image:: https://quay.io/repository/biocontainers/linkage2allegro/status
   :target: https://quay.io/repository/biocontainers/linkage2allegro
.. _`linkage2allegro/tags`: https://quay.io/repository/biocontainers/linkage2allegro?tab=tags


.. raw:: html

    <script>
        var package = "linkage2allegro";
        var versions = ["2017.3","2017.3","2017.2","2017.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkage2allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkage2allegro/README.html