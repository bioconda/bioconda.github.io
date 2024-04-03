:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplicon_coverage_plot'
.. highlight: bash

amplicon_coverage_plot
======================

.. conda:recipe:: amplicon_coverage_plot
   :replaces_section_title:
   :noindex:

   Generate an amplicon coverage plot

   :homepage: https://github.com/chienchi/amplicon_coverage_plot
   :license: GPLv3
   :recipe: /`amplicon_coverage_plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicon_coverage_plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicon_coverage_plot/meta.yaml>`_

   generate an interactive barplot given amplicon info in bed\/bedpe format and coverage information in cov\/bam file.



.. conda:package:: amplicon_coverage_plot

   |downloads_amplicon_coverage_plot| |docker_amplicon_coverage_plot|

   :versions:
      
      

      ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends numpy: ``>=1.15.1``
   :depends plotly: ``>=4.7.1``
   :depends pysam: ``>=0.15.4``
   :depends python: ``>=3.7``
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

      mamba install amplicon_coverage_plot

   and update with::

      mamba update amplicon_coverage_plot

  To create a new environment, run::

      mamba create --name myenvname amplicon_coverage_plot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amplicon_coverage_plot:<tag>

   (see `amplicon_coverage_plot/tags`_ for valid values for ``<tag>``)


.. |downloads_amplicon_coverage_plot| image:: https://img.shields.io/conda/dn/bioconda/amplicon_coverage_plot.svg?style=flat
   :target: https://anaconda.org/bioconda/amplicon_coverage_plot
   :alt:   (downloads)
.. |docker_amplicon_coverage_plot| image:: https://quay.io/repository/biocontainers/amplicon_coverage_plot/status
   :target: https://quay.io/repository/biocontainers/amplicon_coverage_plot
.. _`amplicon_coverage_plot/tags`: https://quay.io/repository/biocontainers/amplicon_coverage_plot?tab=tags


.. raw:: html

    <script>
        var package = "amplicon_coverage_plot";
        var versions = ["0.3.3","0.3.3","0.3.2","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplicon_coverage_plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplicon_coverage_plot/README.html