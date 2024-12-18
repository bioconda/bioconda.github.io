:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexmadata'
.. highlight: bash

bioconductor-dexmadata
======================

.. conda:recipe:: bioconductor-dexmadata
   :replaces_section_title:
   :noindex:

   Data package for DExMA package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/DExMAdata.html
   :license: GPL-2
   :recipe: /`bioconductor-dexmadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata/meta.yaml>`_

   Data objects needed to allSameID\(\) function of DExMA package. There are also some objects that are necessary to be able to apply the examples of the DExMA package\, which illustrate package functionality.


.. conda:package:: bioconductor-dexmadata

   |downloads_bioconductor-dexmadata| |docker_bioconductor-dexmadata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-dexmadata

   and update with::

      mamba update bioconductor-dexmadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dexmadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexmadata:<tag>

   (see `bioconductor-dexmadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexmadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexmadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexmadata
   :alt:   (downloads)
.. |docker_bioconductor-dexmadata| image:: https://quay.io/repository/biocontainers/bioconductor-dexmadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexmadata
.. _`bioconductor-dexmadata/tags`: https://quay.io/repository/biocontainers/bioconductor-dexmadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexmadata";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html