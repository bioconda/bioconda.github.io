:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pal2nal'
.. highlight: bash

pal2nal
=======

.. conda:recipe:: pal2nal
   :replaces_section_title:
   :noindex:

   robust conversion of protein sequence alignments into the corresponding codon alignments

   :homepage: http://www.bork.embl.de/pal2nal/
   :license: GPL / GPLv2.0
   :recipe: /`pal2nal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal/meta.yaml>`_
   :links: biotools: :biotools:`pal2nal`

   


.. conda:package:: pal2nal

   |downloads_pal2nal| |docker_pal2nal|

   :versions:
      
      

      ``14.1-3``,  ``14.1-2``,  ``14.1-1``,  ``14.1-0``,  ``14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-getopt-long: 
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

      mamba install pal2nal

   and update with::

      mamba update pal2nal

  To create a new environment, run::

      mamba create --name myenvname pal2nal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pal2nal:<tag>

   (see `pal2nal/tags`_ for valid values for ``<tag>``)


.. |downloads_pal2nal| image:: https://img.shields.io/conda/dn/bioconda/pal2nal.svg?style=flat
   :target: https://anaconda.org/bioconda/pal2nal
   :alt:   (downloads)
.. |docker_pal2nal| image:: https://quay.io/repository/biocontainers/pal2nal/status
   :target: https://quay.io/repository/biocontainers/pal2nal
.. _`pal2nal/tags`: https://quay.io/repository/biocontainers/pal2nal?tab=tags


.. raw:: html

    <script>
        var package = "pal2nal";
        var versions = ["14.1","14.1","14.1","14.1","14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pal2nal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pal2nal/README.html