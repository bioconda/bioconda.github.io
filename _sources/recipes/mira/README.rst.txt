:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira'
.. highlight: bash

mira
====

.. conda:recipe:: mira
   :replaces_section_title:
   :noindex:

   MIRA is a whole genome shotgun and EST sequence assembler for Sanger\, 454\, Solexa \(Illumina\)\, IonTorrent data and PacBio \(the later at the moment only CCS and error\-corrected CLR reads\)

   :homepage: https://sourceforge.net/p/mira-assembler/wiki/Home/
   :license: GNU General Public License v2 or later (GPLv2+)
   :recipe: /`mira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira/meta.yaml>`_
   :links: biotools: :biotools:`mira`

   


.. conda:package:: mira

   |downloads_mira| |docker_mira|

   :versions:
      
      

      ``4.9.6-1``,  ``4.9.6-0``,  ``4.9.5-1``,  ``4.9.5-0``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``3.4.1.1-1``,  ``3.4.1.1-0``

      

   
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

      mamba install mira

   and update with::

      mamba update mira

  To create a new environment, run::

      mamba create --name myenvname mira

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mira:<tag>

   (see `mira/tags`_ for valid values for ``<tag>``)


.. |downloads_mira| image:: https://img.shields.io/conda/dn/bioconda/mira.svg?style=flat
   :target: https://anaconda.org/bioconda/mira
   :alt:   (downloads)
.. |docker_mira| image:: https://quay.io/repository/biocontainers/mira/status
   :target: https://quay.io/repository/biocontainers/mira
.. _`mira/tags`: https://quay.io/repository/biocontainers/mira?tab=tags


.. raw:: html

    <script>
        var package = "mira";
        var versions = ["4.9.6","4.9.6","4.9.5","4.9.5","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira/README.html