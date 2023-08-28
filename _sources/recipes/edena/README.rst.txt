:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edena'
.. highlight: bash

edena
=====

.. conda:recipe:: edena
   :replaces_section_title:
   :noindex:

   de novo short reads assembler

   :homepage: http://www.genomic.ch/edena.php
   :license: GPL3
   :recipe: /`edena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edena/meta.yaml>`_
   :links: biotools: :biotools:`edena`

   


.. conda:package:: edena

   |downloads_edena| |docker_edena|

   :versions:
      
      

      ``3.131028-6``,  ``3.131028-5``,  ``3.131028-4``,  ``3.131028-3``,  ``3.131028-2``,  ``3.131028-1``,  ``3.131028-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install edena

   and update with::

      mamba update edena

  To create a new environment, run::

      mamba create --name myenvname edena

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/edena:<tag>

   (see `edena/tags`_ for valid values for ``<tag>``)


.. |downloads_edena| image:: https://img.shields.io/conda/dn/bioconda/edena.svg?style=flat
   :target: https://anaconda.org/bioconda/edena
   :alt:   (downloads)
.. |docker_edena| image:: https://quay.io/repository/biocontainers/edena/status
   :target: https://quay.io/repository/biocontainers/edena
.. _`edena/tags`: https://quay.io/repository/biocontainers/edena?tab=tags


.. raw:: html

    <script>
        var package = "edena";
        var versions = ["3.131028","3.131028","3.131028","3.131028","3.131028"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edena/README.html