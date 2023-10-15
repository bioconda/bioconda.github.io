:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tcdemux'
.. highlight: bash

tcdemux
=======

.. conda:recipe:: tcdemux
   :replaces_section_title:
   :noindex:

   Demultiplex files and prepare reads for the target capture analysis pipeline.

   :homepage: https://github.com/TomHarrop/tcdemux
   :license: GPL-3
   :recipe: /`tcdemux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcdemux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcdemux/meta.yaml>`_

   


.. conda:package:: tcdemux

   |downloads_tcdemux| |docker_tcdemux|

   :versions:
      
      

      ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``

      

   
   :depends bbmap: 
   :depends biopython: ``>=1.81``
   :depends cutadapt: ``>=4.4``
   :depends pandas: ``>=2.0.3``
   :depends pigz: 
   :depends python: ``>=3.10``
   :depends r-bit64: ``>=4.0.5``
   :depends r-data.table: ``>=1.14.8``
   :depends r-ggplot2: ``>=3.4.3``
   :depends r-viridis: ``>=0.6.4``
   :depends snakemake: ``>=7.31.0``
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

      mamba install tcdemux

   and update with::

      mamba update tcdemux

  To create a new environment, run::

      mamba create --name myenvname tcdemux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tcdemux:<tag>

   (see `tcdemux/tags`_ for valid values for ``<tag>``)


.. |downloads_tcdemux| image:: https://img.shields.io/conda/dn/bioconda/tcdemux.svg?style=flat
   :target: https://anaconda.org/bioconda/tcdemux
   :alt:   (downloads)
.. |docker_tcdemux| image:: https://quay.io/repository/biocontainers/tcdemux/status
   :target: https://quay.io/repository/biocontainers/tcdemux
.. _`tcdemux/tags`: https://quay.io/repository/biocontainers/tcdemux?tab=tags


.. raw:: html

    <script>
        var package = "tcdemux";
        var versions = ["0.0.22","0.0.21","0.0.20","0.0.18","0.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tcdemux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tcdemux/README.html