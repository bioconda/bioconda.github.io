:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbwa'
.. highlight: bash

bioconductor-rbwa
=================

.. conda:recipe:: bioconductor-rbwa
   :replaces_section_title:
   :noindex:

   R wrapper for BWA\-backtrack and BWA\-MEM aligners

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rbwa.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rbwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa/meta.yaml>`_

   Provides an R wrapper for BWA alignment algorithms. Both BWA\-backtrack and BWA\-MEM are available. Convenience function to build a BWA index from a reference genome is also provided. Currently not supported for Windows machines.


.. conda:package:: bioconductor-rbwa

   |downloads_bioconductor-rbwa| |docker_bioconductor-rbwa|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-rbwa

   and update with::

      mamba update bioconductor-rbwa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbwa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbwa:<tag>

   (see `bioconductor-rbwa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbwa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbwa
   :alt:   (downloads)
.. |docker_bioconductor-rbwa| image:: https://quay.io/repository/biocontainers/bioconductor-rbwa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbwa
.. _`bioconductor-rbwa/tags`: https://quay.io/repository/biocontainers/bioconductor-rbwa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbwa";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbwa/README.html