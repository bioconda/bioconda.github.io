:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff3sort'
.. highlight: bash

gff3sort
========

.. conda:recipe:: gff3sort
   :replaces_section_title:
   :noindex:

   A Perl Script to sort gff3 files and produce suitable results for tabix tools

   :homepage: https://github.com/billzt/gff3sort
   :license: GNU General Public License v3.0
   :recipe: /`gff3sort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort/meta.yaml>`_

   


.. conda:package:: gff3sort

   |downloads_gff3sort| |docker_gff3sort|

   :versions:
      
      

      ``0.1.a1a2bc9-2``,  ``0.1.a1a2bc9-1``,  ``0.1.a1a2bc9-0``

      

   
   :depends perl: 
   :depends perl-data-match: 
   :depends perl-sort-naturally: 
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

      mamba install gff3sort

   and update with::

      mamba update gff3sort

  To create a new environment, run::

      mamba create --name myenvname gff3sort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gff3sort:<tag>

   (see `gff3sort/tags`_ for valid values for ``<tag>``)


.. |downloads_gff3sort| image:: https://img.shields.io/conda/dn/bioconda/gff3sort.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3sort
   :alt:   (downloads)
.. |docker_gff3sort| image:: https://quay.io/repository/biocontainers/gff3sort/status
   :target: https://quay.io/repository/biocontainers/gff3sort
.. _`gff3sort/tags`: https://quay.io/repository/biocontainers/gff3sort?tab=tags


.. raw:: html

    <script>
        var package = "gff3sort";
        var versions = ["0.1.a1a2bc9","0.1.a1a2bc9","0.1.a1a2bc9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3sort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3sort/README.html