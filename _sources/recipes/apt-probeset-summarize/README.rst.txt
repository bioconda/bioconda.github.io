:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apt-probeset-summarize'
.. highlight: bash

apt-probeset-summarize
======================

.. conda:recipe:: apt-probeset-summarize
   :replaces_section_title:
   :noindex:

   From Affymetrix Power Tools package. apt\-probeset\-summarize is program for analyzing expression arrays including 3\' IVT and exon arrays. Supports background correction \(MAS5\,RMA\)\, normalization \(linear scaling\, quantile\, sketch\)\, and summarization \(PLIER\, RMA\, MAS5\) methods.

   :homepage: https://downloads.thermofisher.com
   :license: GNU GENERAL PUBLIC LICENSE Version 2
   :recipe: /`apt-probeset-summarize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apt-probeset-summarize/meta.yaml>`_

   


.. conda:package:: apt-probeset-summarize

   |downloads_apt-probeset-summarize| |docker_apt-probeset-summarize|

   :versions:
      
      

      ``2.10.0-6``,  ``2.10.0-5``,  ``2.10.0-4``,  ``2.10.0-3``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install apt-probeset-summarize

   and update with::

      mamba update apt-probeset-summarize

  To create a new environment, run::

      mamba create --name myenvname apt-probeset-summarize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apt-probeset-summarize:<tag>

   (see `apt-probeset-summarize/tags`_ for valid values for ``<tag>``)


.. |downloads_apt-probeset-summarize| image:: https://img.shields.io/conda/dn/bioconda/apt-probeset-summarize.svg?style=flat
   :target: https://anaconda.org/bioconda/apt-probeset-summarize
   :alt:   (downloads)
.. |docker_apt-probeset-summarize| image:: https://quay.io/repository/biocontainers/apt-probeset-summarize/status
   :target: https://quay.io/repository/biocontainers/apt-probeset-summarize
.. _`apt-probeset-summarize/tags`: https://quay.io/repository/biocontainers/apt-probeset-summarize?tab=tags


.. raw:: html

    <script>
        var package = "apt-probeset-summarize";
        var versions = ["2.10.0","2.10.0","2.10.0","2.10.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apt-probeset-summarize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apt-probeset-summarize/README.html