:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stereogene'
.. highlight: bash

stereogene
==========

.. conda:recipe:: stereogene
   :replaces_section_title:
   :noindex:

   StereoGene\: Rapid Estimation of Genomewide Correlation of Continuous or Interval Feature Data.

   :homepage: http://stereogene.bioinf.fbb.msu.ru
   :license: MIT / Artistic-2.0
   :recipe: /`stereogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stereogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stereogene/meta.yaml>`_
   :links: doi: :doi:`10.1101/059584`

   


.. conda:package:: stereogene

   |downloads_stereogene| |docker_stereogene|

   :versions:
      
      

      ``2.20-8``,  ``2.20-7``,  ``2.20-6``,  ``2.20-5``,  ``2.20-4``,  ``2.20-3``,  ``2.20-2``,  ``2.20-1``,  ``2.20-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install stereogene

   and update with::

      mamba update stereogene

  To create a new environment, run::

      mamba create --name myenvname stereogene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stereogene:<tag>

   (see `stereogene/tags`_ for valid values for ``<tag>``)


.. |downloads_stereogene| image:: https://img.shields.io/conda/dn/bioconda/stereogene.svg?style=flat
   :target: https://anaconda.org/bioconda/stereogene
   :alt:   (downloads)
.. |docker_stereogene| image:: https://quay.io/repository/biocontainers/stereogene/status
   :target: https://quay.io/repository/biocontainers/stereogene
.. _`stereogene/tags`: https://quay.io/repository/biocontainers/stereogene?tab=tags


.. raw:: html

    <script>
        var package = "stereogene";
        var versions = ["2.20","2.20","2.20","2.20","2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stereogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stereogene/README.html