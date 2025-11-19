:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polyat'
.. highlight: bash

polyat
======

.. conda:recipe:: polyat
   :replaces_section_title:
   :noindex:

   Command\-line tool to quantify poly\-A\/T homopolymers within FASTQ sequencing reads.

   :homepage: https://github.com/DaanJansen94/polyat
   :documentation: https://github.com/DaanJansen94/polyat/blob/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`polyat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polyat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polyat/meta.yaml>`_

   polyat counts poly\-A\/T homopolymers across FASTQ reads \(\>\=10\/15\/20 nt\)\,
   summarizes per sample\, and writes both TSV and HTML reports with interactive filters.



.. conda:package:: polyat

   |downloads_polyat| |docker_polyat|

   :versions:
      
      

      ``0.1.2-0``

      

   
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

      mamba install polyat

   and update with::

      mamba update polyat

  To create a new environment, run::

      mamba create --name myenvname polyat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/polyat:<tag>

   (see `polyat/tags`_ for valid values for ``<tag>``)


.. |downloads_polyat| image:: https://img.shields.io/conda/dn/bioconda/polyat.svg?style=flat
   :target: https://anaconda.org/bioconda/polyat
   :alt:   (downloads)
.. |docker_polyat| image:: https://quay.io/repository/biocontainers/polyat/status
   :target: https://quay.io/repository/biocontainers/polyat
.. _`polyat/tags`: https://quay.io/repository/biocontainers/polyat?tab=tags


.. raw:: html

    <script>
        var package = "polyat";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polyat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polyat/README.html