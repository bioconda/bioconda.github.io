:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadsorted.saliva.epic'
.. highlight: bash

bioconductor-beadsorted.saliva.epic
===================================

.. conda:recipe:: bioconductor-beadsorted.saliva.epic
   :replaces_section_title:
   :noindex:

   Illumina EPIC data on BeadSorted child saliva cells

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/BeadSorted.Saliva.EPIC.html
   :license: GPL-3
   :recipe: /`bioconductor-beadsorted.saliva.epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic/meta.yaml>`_

   Raw data objects used to estimate saliva cell proportion estimates in ewastools. The FlowSorted.Saliva.EPIC object is constructed from samples assayed by Lauren Middleton et. al. \(2021\).


.. conda:package:: bioconductor-beadsorted.saliva.epic

   |downloads_bioconductor-beadsorted.saliva.epic| |docker_bioconductor-beadsorted.saliva.epic|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-beadsorted.saliva.epic

   and update with::

      mamba update bioconductor-beadsorted.saliva.epic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beadsorted.saliva.epic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadsorted.saliva.epic:<tag>

   (see `bioconductor-beadsorted.saliva.epic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadsorted.saliva.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadsorted.saliva.epic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadsorted.saliva.epic
   :alt:   (downloads)
.. |docker_bioconductor-beadsorted.saliva.epic| image:: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic
.. _`bioconductor-beadsorted.saliva.epic/tags`: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadsorted.saliva.epic";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html