:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gentle'
.. highlight: bash

gentle
======

.. conda:recipe:: gentle
   :replaces_section_title:
   :noindex:

   Software suite for DNA cloning.

   :homepage: https://github.com/GENtle-persons/gentle-m
   :license: GPL / GPL-2.0-or-later
   :recipe: /`gentle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gentle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gentle/meta.yaml>`_
   :links: debian: :debian:`gentle`, biotools: :biotools:`gentle`

   GENtle provides a GUI for amino acid editing\, plasmid maps\,
   restriction and ligation\, alignments\, sequencer data import\,
   calculators\, gel image display\, PCR\, and much more.



.. conda:package:: gentle

   |downloads_gentle| |docker_gentle|

   :versions:
      
      

      ``1.9.5.alpha1-2``,  ``1.9.5.alpha1-0``

      

   
   :depends clustalw: ``>=2.1,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libsqlite: ``>=3.50.4,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends mysql: 
   :depends sqlite: 
   :depends tinyxml: 
   :depends wxwidgets: ``>=3.2.8.1,<3.2.9.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gentle

   and update with::

      mamba update gentle

  To create a new environment, run::

      mamba create --name myenvname gentle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gentle:<tag>

   (see `gentle/tags`_ for valid values for ``<tag>``)


.. |downloads_gentle| image:: https://img.shields.io/conda/dn/bioconda/gentle.svg?style=flat
   :target: https://anaconda.org/bioconda/gentle
   :alt:   (downloads)
.. |docker_gentle| image:: https://quay.io/repository/biocontainers/gentle/status
   :target: https://quay.io/repository/biocontainers/gentle
.. _`gentle/tags`: https://quay.io/repository/biocontainers/gentle?tab=tags


.. raw:: html

    <script>
        var package = "gentle";
        var versions = ["1.9.5.alpha1","1.9.5.alpha1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gentle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gentle/README.html