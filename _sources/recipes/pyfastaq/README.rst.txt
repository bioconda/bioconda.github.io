:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastaq'
.. highlight: bash

pyfastaq
========

.. conda:recipe:: pyfastaq
   :replaces_section_title:
   :noindex:

   Script to manipulate FASTA and FASTQ files\, plus API for developers.

   :homepage: https://github.com/sanger-pathogens/Fastaq
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyfastaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastaq/meta.yaml>`_

   


.. conda:package:: pyfastaq

   |downloads_pyfastaq| |docker_pyfastaq|

   :versions:
      
      

      ``3.18.0-0``,  ``3.17.0-2``,  ``3.17.0-1``,  ``3.17.0-0``,  ``3.14.0-0``,  ``3.11.0-1``,  ``3.11.0-0``

      

   
   :depends python: ``>=3.8``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pyfastaq

   and update with::

      mamba update pyfastaq

  To create a new environment, run::

      mamba create --name myenvname pyfastaq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfastaq:<tag>

   (see `pyfastaq/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastaq| image:: https://img.shields.io/conda/dn/bioconda/pyfastaq.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastaq
   :alt:   (downloads)
.. |docker_pyfastaq| image:: https://quay.io/repository/biocontainers/pyfastaq/status
   :target: https://quay.io/repository/biocontainers/pyfastaq
.. _`pyfastaq/tags`: https://quay.io/repository/biocontainers/pyfastaq?tab=tags


.. raw:: html

    <script>
        var package = "pyfastaq";
        var versions = ["3.18.0","3.17.0","3.17.0","3.17.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastaq/README.html