:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minipolish'
.. highlight: bash

minipolish
==========

.. conda:recipe:: minipolish
   :replaces_section_title:
   :noindex:

   A tool for Racon polishing miniasm assemblies.

   :homepage: https://github.com/rrwick/Minipolish
   :documentation: https://github.com/rrwick/Minipolish/blob/v0.2.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`minipolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minipolish/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.21782.4`, biotools: :biotools:`minipolish`, usegalaxy-eu: :usegalaxy-eu:`minipolish`

   


.. conda:package:: minipolish

   |downloads_minipolish| |docker_minipolish|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends minimap2: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends racon: 
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

      mamba install minipolish

   and update with::

      mamba update minipolish

  To create a new environment, run::

      mamba create --name myenvname minipolish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minipolish:<tag>

   (see `minipolish/tags`_ for valid values for ``<tag>``)


.. |downloads_minipolish| image:: https://img.shields.io/conda/dn/bioconda/minipolish.svg?style=flat
   :target: https://anaconda.org/bioconda/minipolish
   :alt:   (downloads)
.. |docker_minipolish| image:: https://quay.io/repository/biocontainers/minipolish/status
   :target: https://quay.io/repository/biocontainers/minipolish
.. _`minipolish/tags`: https://quay.io/repository/biocontainers/minipolish?tab=tags


.. raw:: html

    <script>
        var package = "minipolish";
        var versions = ["0.2.0","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minipolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minipolish/README.html