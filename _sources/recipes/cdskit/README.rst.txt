:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdskit'
.. highlight: bash

cdskit
======

.. conda:recipe:: cdskit
   :replaces_section_title:
   :noindex:

   A toolkit for processing protein\-coding sequences \(CDS\).

   :homepage: https://github.com/kfuku52/cdskit
   :license: BSD-3-Clause
   :recipe: /`cdskit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdskit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdskit/meta.yaml>`_

   CDSKIT is a Python program that processes DNA sequences\,
   especially protein\-coding sequences. Many functions of this program are
   designed to handle DNA sequences using codons \(sets of three nucleotides\)
   as the unit\, and therefore\, edits the coding sequences without causing a
   frameshift. All sequence formats supported by Biopython are available in
   this tool for both inputs and outputs.



.. conda:package:: cdskit

   |downloads_cdskit| |docker_cdskit|

   :versions:
      
      

      ``0.14.5-0``,  ``0.14.4-1``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``

      

   
   :depends biopython: ``>=1.77``
   :depends numpy: 
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

      mamba install cdskit

   and update with::

      mamba update cdskit

  To create a new environment, run::

      mamba create --name myenvname cdskit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cdskit:<tag>

   (see `cdskit/tags`_ for valid values for ``<tag>``)


.. |downloads_cdskit| image:: https://img.shields.io/conda/dn/bioconda/cdskit.svg?style=flat
   :target: https://anaconda.org/bioconda/cdskit
   :alt:   (downloads)
.. |docker_cdskit| image:: https://quay.io/repository/biocontainers/cdskit/status
   :target: https://quay.io/repository/biocontainers/cdskit
.. _`cdskit/tags`: https://quay.io/repository/biocontainers/cdskit?tab=tags


.. raw:: html

    <script>
        var package = "cdskit";
        var versions = ["0.14.5","0.14.4","0.14.4","0.14.3","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdskit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdskit/README.html