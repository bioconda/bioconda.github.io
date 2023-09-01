:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'revtrans'
.. highlight: bash

revtrans
========

.. conda:recipe:: revtrans
   :replaces_section_title:
   :noindex:

   revtrans \- performs a reverse translation of a peptide alignment.

   :homepage: http://www.cbs.dtu.dk/services/RevTrans-2.0/web/download.php
   :license: GPL / GPLv2
   :recipe: /`revtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/revtrans/meta.yaml>`_
   :links: biotools: :biotools:`revtrans`

   


.. conda:package:: revtrans

   |downloads_revtrans| |docker_revtrans|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``

      

   
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

      mamba install revtrans

   and update with::

      mamba update revtrans

  To create a new environment, run::

      mamba create --name myenvname revtrans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/revtrans:<tag>

   (see `revtrans/tags`_ for valid values for ``<tag>``)


.. |downloads_revtrans| image:: https://img.shields.io/conda/dn/bioconda/revtrans.svg?style=flat
   :target: https://anaconda.org/bioconda/revtrans
   :alt:   (downloads)
.. |docker_revtrans| image:: https://quay.io/repository/biocontainers/revtrans/status
   :target: https://quay.io/repository/biocontainers/revtrans
.. _`revtrans/tags`: https://quay.io/repository/biocontainers/revtrans?tab=tags


.. raw:: html

    <script>
        var package = "revtrans";
        var versions = ["1.4","1.4"];
    </script>





Notes
-----
This package includes a modified version of the program named \'revtrans\_jarmo.py\' that works with peptide fragments instead of full length sequences.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/revtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/revtrans/README.html