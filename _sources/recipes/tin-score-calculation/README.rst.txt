:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tin-score-calculation'
.. highlight: bash

tin-score-calculation
=====================

.. conda:recipe:: tin-score-calculation
   :replaces_section_title:
   :noindex:

   Given a set of BAM files and a gene annotation BED file\, calculates the Transcript Integrity Number \(TIN\) for each transcript.

   :homepage: The package home page
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`tin-score-calculation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tin-score-calculation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tin-score-calculation/meta.yaml>`_

   


.. conda:package:: tin-score-calculation

   |downloads_tin-score-calculation| |docker_tin-score-calculation|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends bx-python: ``>=0.8.10``
   :depends guppy3: ``>=3``
   :depends matplotlib-base: 
   :depends pandas: ``>=0.25``
   :depends psutil: ``>=5.8.0``
   :depends pysam: ``>=0.16``
   :depends python: 
   :depends rseqc: ``>=3``
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

      mamba install tin-score-calculation

   and update with::

      mamba update tin-score-calculation

  To create a new environment, run::

      mamba create --name myenvname tin-score-calculation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tin-score-calculation:<tag>

   (see `tin-score-calculation/tags`_ for valid values for ``<tag>``)


.. |downloads_tin-score-calculation| image:: https://img.shields.io/conda/dn/bioconda/tin-score-calculation.svg?style=flat
   :target: https://anaconda.org/bioconda/tin-score-calculation
   :alt:   (downloads)
.. |docker_tin-score-calculation| image:: https://quay.io/repository/biocontainers/tin-score-calculation/status
   :target: https://quay.io/repository/biocontainers/tin-score-calculation
.. _`tin-score-calculation/tags`: https://quay.io/repository/biocontainers/tin-score-calculation?tab=tags


.. raw:: html

    <script>
        var package = "tin-score-calculation";
        var versions = ["0.6.3","0.6.2","0.6.0","0.5.1","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tin-score-calculation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tin-score-calculation/README.html