:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smalt'
.. highlight: bash

smalt
=====

.. conda:recipe:: smalt
   :replaces_section_title:
   :noindex:

   SMALT aligns DNA sequencing reads with a reference genome.

   :homepage: http://www.sanger.ac.uk/science/tools/smalt-0
   :license: GPLv3
   :recipe: /`smalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smalt/meta.yaml>`_
   :links: biotools: :biotools:`Smalt`

   


.. conda:package:: smalt

   |downloads_smalt| |docker_smalt|

   :versions:
      
      

      ``0.7.6-1``,  ``0.7.6-0``

      

   
   :depends bambamc: 
   :depends libgcc: 
   :depends zlib: ``1.2.11*``
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

      mamba install smalt

   and update with::

      mamba update smalt

  To create a new environment, run::

      mamba create --name myenvname smalt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smalt:<tag>

   (see `smalt/tags`_ for valid values for ``<tag>``)


.. |downloads_smalt| image:: https://img.shields.io/conda/dn/bioconda/smalt.svg?style=flat
   :target: https://anaconda.org/bioconda/smalt
   :alt:   (downloads)
.. |docker_smalt| image:: https://quay.io/repository/biocontainers/smalt/status
   :target: https://quay.io/repository/biocontainers/smalt
.. _`smalt/tags`: https://quay.io/repository/biocontainers/smalt?tab=tags


.. raw:: html

    <script>
        var package = "smalt";
        var versions = ["0.7.6","0.7.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smalt/README.html