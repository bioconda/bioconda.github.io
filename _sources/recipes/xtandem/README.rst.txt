:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtandem'
.. highlight: bash

xtandem
=======

.. conda:recipe:: xtandem
   :replaces_section_title:
   :noindex:

   X\! Tandem open source is software that can match tandem mass spectra with peptide sequences\, in a process that has come to be known as protein identification

   :homepage: http://www.thegpm.org/TANDEM/index.html
   :license: Artistic License
   :recipe: /`xtandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem/meta.yaml>`_
   :links: biotools: :biotools:`xtandem`, doi: :doi:`10.1093/bioinformatics/bth092`

   


.. conda:package:: xtandem

   |downloads_xtandem| |docker_xtandem|

   :versions:
      
      

      ``15.12.15.2-8``,  ``15.12.15.2-7``,  ``15.12.15.2-6``,  ``15.12.15.2-5``,  ``15.12.15.2-4``,  ``15.12.15.2-3``,  ``15.12.15.2-2``,  ``15.12.15.2-1``,  ``15.12.15.2-0``

      

   
   :depends expat: 
   :depends libexpat: ``>=2.5.0,<3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install xtandem

   and update with::

      mamba update xtandem

  To create a new environment, run::

      mamba create --name myenvname xtandem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xtandem:<tag>

   (see `xtandem/tags`_ for valid values for ``<tag>``)


.. |downloads_xtandem| image:: https://img.shields.io/conda/dn/bioconda/xtandem.svg?style=flat
   :target: https://anaconda.org/bioconda/xtandem
   :alt:   (downloads)
.. |docker_xtandem| image:: https://quay.io/repository/biocontainers/xtandem/status
   :target: https://quay.io/repository/biocontainers/xtandem
.. _`xtandem/tags`: https://quay.io/repository/biocontainers/xtandem?tab=tags


.. raw:: html

    <script>
        var package = "xtandem";
        var versions = ["15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtandem/README.html