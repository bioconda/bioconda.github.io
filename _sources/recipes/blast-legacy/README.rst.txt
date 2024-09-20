:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast-legacy'
.. highlight: bash

blast-legacy
============

.. conda:recipe:: blast-legacy/2.2.19
   :replaces_section_title:
   :noindex:

   The Basic Local Alignment Search Tool \(BLAST\) finds regions of local similarity between sequences.

   :homepage: http://blast.ncbi.nlm.nih.gov
   :license: Public Domain
   :recipe: /`blast-legacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy>`_/`2.2.19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy/2.2.19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy/2.2.19/meta.yaml>`_

   


.. conda:package:: blast-legacy

   |downloads_blast-legacy| |docker_blast-legacy|

   :versions:
      
      

      ``2.2.26-4``,  ``2.2.26-3``,  ``2.2.26-2``,  ``2.2.26-1``,  ``2.2.26-0``,  ``2.2.22-1``,  ``2.2.22-0``,  ``2.2.19-0``

      

   
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

      mamba install blast-legacy

   and update with::

      mamba update blast-legacy

  To create a new environment, run::

      mamba create --name myenvname blast-legacy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blast-legacy:<tag>

   (see `blast-legacy/tags`_ for valid values for ``<tag>``)


.. |downloads_blast-legacy| image:: https://img.shields.io/conda/dn/bioconda/blast-legacy.svg?style=flat
   :target: https://anaconda.org/bioconda/blast-legacy
   :alt:   (downloads)
.. |docker_blast-legacy| image:: https://quay.io/repository/biocontainers/blast-legacy/status
   :target: https://quay.io/repository/biocontainers/blast-legacy
.. _`blast-legacy/tags`: https://quay.io/repository/biocontainers/blast-legacy?tab=tags


.. raw:: html

    <script>
        var package = "blast-legacy";
        var versions = ["2.2.26","2.2.26","2.2.26","2.2.26","2.2.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast-legacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast-legacy/README.html