:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmelting'
.. highlight: bash

bioconductor-rmelting
=====================

.. conda:recipe:: bioconductor-rmelting
   :replaces_section_title:
   :noindex:

   R Interface to MELTING 5

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rmelting.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-rmelting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmelting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmelting/meta.yaml>`_

   R interface to the MELTING 5 program \(https\:\/\/www.ebi.ac.uk\/biomodels\/tools\/melting\/\) to compute melting temperatures of nucleic acid duplexes along with other thermodynamic parameters.


.. conda:package:: bioconductor-rmelting

   |downloads_bioconductor-rmelting| |docker_bioconductor-rmelting|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rdpack: 
   :depends r-rjava: ``>=0.9-8``
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

      mamba install bioconductor-rmelting

   and update with::

      mamba update bioconductor-rmelting

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rmelting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmelting:<tag>

   (see `bioconductor-rmelting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmelting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmelting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmelting
   :alt:   (downloads)
.. |docker_bioconductor-rmelting| image:: https://quay.io/repository/biocontainers/bioconductor-rmelting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmelting
.. _`bioconductor-rmelting/tags`: https://quay.io/repository/biocontainers/bioconductor-rmelting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmelting";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmelting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmelting/README.html