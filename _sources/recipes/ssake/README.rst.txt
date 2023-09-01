:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssake'
.. highlight: bash

ssake
=====

.. conda:recipe:: ssake
   :replaces_section_title:
   :noindex:

   SSAKE is a genomics application for de novo assembly of millions of very short DNA sequences.

   :homepage: https://github.com/warrenlr/SSAKE
   :license: GPL / GPL-2.0
   :recipe: /`ssake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake/meta.yaml>`_
   :links: biotools: :biotools:`ssake`, doi: :doi:`10.1093/bioinformatics/btl629`

   


.. conda:package:: ssake

   |downloads_ssake| |docker_ssake|

   :versions:
      
      

      ``4.0-5``,  ``4.0-4``,  ``4.0-2``,  ``4.0-1``

      

   
   :depends perl: 
   :depends perl-statistics-descriptive: 
   :depends python: ``<3``
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

      mamba install ssake

   and update with::

      mamba update ssake

  To create a new environment, run::

      mamba create --name myenvname ssake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssake:<tag>

   (see `ssake/tags`_ for valid values for ``<tag>``)


.. |downloads_ssake| image:: https://img.shields.io/conda/dn/bioconda/ssake.svg?style=flat
   :target: https://anaconda.org/bioconda/ssake
   :alt:   (downloads)
.. |docker_ssake| image:: https://quay.io/repository/biocontainers/ssake/status
   :target: https://quay.io/repository/biocontainers/ssake
.. _`ssake/tags`: https://quay.io/repository/biocontainers/ssake?tab=tags


.. raw:: html

    <script>
        var package = "ssake";
        var versions = ["4.0","4.0","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssake/README.html