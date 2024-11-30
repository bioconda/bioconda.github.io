:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circle-map-cpp'
.. highlight: bash

circle-map-cpp
==============

.. conda:recipe:: circle-map-cpp
   :replaces_section_title:
   :noindex:

   Circle\-Map\-cpp is the C\+\+ version of Circle\-Map

   :homepage: https://github.com/BGI-Qingdao/Circle-Map-cpp
   :license: GPL-3.0-only
   :recipe: /`circle-map-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp/meta.yaml>`_

   


.. conda:package:: circle-map-cpp

   |downloads_circle-map-cpp| |docker_circle-map-cpp|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends bedtools: 
   :depends htslib: ``>=1.17,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends pysam: ``>=0.20.0``
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

      mamba install circle-map-cpp

   and update with::

      mamba update circle-map-cpp

  To create a new environment, run::

      mamba create --name myenvname circle-map-cpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circle-map-cpp:<tag>

   (see `circle-map-cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_circle-map-cpp| image:: https://img.shields.io/conda/dn/bioconda/circle-map-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/circle-map-cpp
   :alt:   (downloads)
.. |docker_circle-map-cpp| image:: https://quay.io/repository/biocontainers/circle-map-cpp/status
   :target: https://quay.io/repository/biocontainers/circle-map-cpp
.. _`circle-map-cpp/tags`: https://quay.io/repository/biocontainers/circle-map-cpp?tab=tags


.. raw:: html

    <script>
        var package = "circle-map-cpp";
        var versions = ["0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circle-map-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circle-map-cpp/README.html