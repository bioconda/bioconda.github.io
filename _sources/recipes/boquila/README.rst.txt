:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'boquila'
.. highlight: bash

boquila
=======

.. conda:recipe:: boquila
   :replaces_section_title:
   :noindex:

   NGS read simulator to eliminate read nucleotide bias in sequence analysis.


   :homepage: https://github.com/CompGenomeLab/boquila
   :license: MIT
   :recipe: /`boquila <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boquila>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boquila/meta.yaml>`_

   


.. conda:package:: boquila

   |downloads_boquila| |docker_boquila|

   :versions:
      
      

      ``0.6.1-0``,  ``0.6.0-0``

      

   
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

      mamba install boquila

   and update with::

      mamba update boquila

  To create a new environment, run::

      mamba create --name myenvname boquila

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/boquila:<tag>

   (see `boquila/tags`_ for valid values for ``<tag>``)


.. |downloads_boquila| image:: https://img.shields.io/conda/dn/bioconda/boquila.svg?style=flat
   :target: https://anaconda.org/bioconda/boquila
   :alt:   (downloads)
.. |docker_boquila| image:: https://quay.io/repository/biocontainers/boquila/status
   :target: https://quay.io/repository/biocontainers/boquila
.. _`boquila/tags`: https://quay.io/repository/biocontainers/boquila?tab=tags


.. raw:: html

    <script>
        var package = "boquila";
        var versions = ["0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/boquila/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/boquila/README.html