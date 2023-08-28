:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobtreer'
.. highlight: bash

bioconductor-biobtreer
======================

.. conda:recipe:: bioconductor-biobtreer
   :replaces_section_title:
   :noindex:

   Using biobtree tool from R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biobtreeR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biobtreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobtreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobtreer/meta.yaml>`_

   The biobtreeR package provides an interface to \[biobtree\]\(https\:\/\/github.com\/tamerh\/biobtree\) tool which covers large set of bioinformatics datasets and allows search and chain mappings functionalities.


.. conda:package:: bioconductor-biobtreer

   |downloads_bioconductor-biobtreer| |docker_bioconductor-biobtreer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httpuv: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-biobtreer

   and update with::

      mamba update bioconductor-biobtreer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biobtreer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobtreer:<tag>

   (see `bioconductor-biobtreer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobtreer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobtreer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobtreer
   :alt:   (downloads)
.. |docker_bioconductor-biobtreer| image:: https://quay.io/repository/biocontainers/bioconductor-biobtreer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobtreer
.. _`bioconductor-biobtreer/tags`: https://quay.io/repository/biocontainers/bioconductor-biobtreer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biobtreer";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobtreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobtreer/README.html