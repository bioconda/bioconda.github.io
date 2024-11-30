:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverageanomalyscanner'
.. highlight: bash

coverageanomalyscanner
======================

.. conda:recipe:: coverageanomalyscanner
   :replaces_section_title:
   :noindex:

   Application to find local anomalies in read coverage and to predict putative SV events.

   :homepage: https://github.com/rki-mf1/CoverageAnomalyScanner
   :license: GPL-3.0 license
   :recipe: /`coverageanomalyscanner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverageanomalyscanner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverageanomalyscanner/meta.yaml>`_

   


.. conda:package:: coverageanomalyscanner

   |downloads_coverageanomalyscanner| |docker_coverageanomalyscanner|

   :versions:
      
      

      ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.8.0,<9.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install coverageanomalyscanner

   and update with::

      mamba update coverageanomalyscanner

  To create a new environment, run::

      mamba create --name myenvname coverageanomalyscanner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coverageanomalyscanner:<tag>

   (see `coverageanomalyscanner/tags`_ for valid values for ``<tag>``)


.. |downloads_coverageanomalyscanner| image:: https://img.shields.io/conda/dn/bioconda/coverageanomalyscanner.svg?style=flat
   :target: https://anaconda.org/bioconda/coverageanomalyscanner
   :alt:   (downloads)
.. |docker_coverageanomalyscanner| image:: https://quay.io/repository/biocontainers/coverageanomalyscanner/status
   :target: https://quay.io/repository/biocontainers/coverageanomalyscanner
.. _`coverageanomalyscanner/tags`: https://quay.io/repository/biocontainers/coverageanomalyscanner?tab=tags


.. raw:: html

    <script>
        var package = "coverageanomalyscanner";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverageanomalyscanner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverageanomalyscanner/README.html