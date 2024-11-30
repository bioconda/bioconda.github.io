:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2plot'
.. highlight: bash

bam2plot
========

.. conda:recipe:: bam2plot
   :replaces_section_title:
   :noindex:

   Plot of coverage from bam file

   :homepage: https://github.com/willros/bam2plot
   :license: GPL-3.0-only
   :recipe: /`bam2plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2plot/meta.yaml>`_

   


.. conda:package:: bam2plot

   |downloads_bam2plot| |docker_bam2plot|

   :versions:
      
      

      ``0.3.6-0``

      

   
   :depends mappy: ``>=2.28``
   :depends mosdepth: 
   :depends polars: ``>=0.20.15``
   :depends pyarrow: 
   :depends pyfastx: 
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.10``
   :depends seaborn: ``>=0.13.2``
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

      mamba install bam2plot

   and update with::

      mamba update bam2plot

  To create a new environment, run::

      mamba create --name myenvname bam2plot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bam2plot:<tag>

   (see `bam2plot/tags`_ for valid values for ``<tag>``)


.. |downloads_bam2plot| image:: https://img.shields.io/conda/dn/bioconda/bam2plot.svg?style=flat
   :target: https://anaconda.org/bioconda/bam2plot
   :alt:   (downloads)
.. |docker_bam2plot| image:: https://quay.io/repository/biocontainers/bam2plot/status
   :target: https://quay.io/repository/biocontainers/bam2plot
.. _`bam2plot/tags`: https://quay.io/repository/biocontainers/bam2plot?tab=tags


.. raw:: html

    <script>
        var package = "bam2plot";
        var versions = ["0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2plot/README.html