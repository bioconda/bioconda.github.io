:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-assorthead'
.. highlight: bash

bioconductor-assorthead
=======================

.. conda:recipe:: bioconductor-assorthead
   :replaces_section_title:
   :noindex:

   Assorted Header\-Only C\+\+ Libraries

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/assorthead.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-assorthead <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assorthead>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assorthead/meta.yaml>`_

   Vendors an assortment of useful header\-only C\+\+ libraries. Bioconductor packages can use these libraries in their own C\+\+ code by LinkingTo this package without introducing any additional dependencies. The use of a central repository avoids duplicate vendoring of libraries across multiple R packages\, and enables better coordination of version updates across cohorts of interdependent C\+\+ libraries.


.. conda:package:: bioconductor-assorthead

   |downloads_bioconductor-assorthead| |docker_bioconductor-assorthead|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-assorthead

   and update with::

      mamba update bioconductor-assorthead

  To create a new environment, run::

      mamba create --name myenvname bioconductor-assorthead

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-assorthead:<tag>

   (see `bioconductor-assorthead/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-assorthead| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assorthead.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-assorthead
   :alt:   (downloads)
.. |docker_bioconductor-assorthead| image:: https://quay.io/repository/biocontainers/bioconductor-assorthead/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assorthead
.. _`bioconductor-assorthead/tags`: https://quay.io/repository/biocontainers/bioconductor-assorthead?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-assorthead";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assorthead/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assorthead/README.html