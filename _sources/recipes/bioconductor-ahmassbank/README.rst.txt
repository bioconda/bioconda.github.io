:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahmassbank'
.. highlight: bash

bioconductor-ahmassbank
=======================

.. conda:recipe:: bioconductor-ahmassbank
   :replaces_section_title:
   :noindex:

   MassBank Annotation Resources for AnnotationHub

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AHMassBank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahmassbank/meta.yaml>`_

   Supplies AnnotationHub with MassBank metabolite\/compound annotations bundled in CompDb SQLite databases. CompDb SQLite databases contain general compound annotation as well as fragment spectra representing fragmentation patterns of compounds\' ions. MassBank data is retrieved from https\:\/\/massbank.eu\/MassBank and processed using helper functions from the CompoundDb Bioconductor package into redistributable SQLite databases.


.. conda:package:: bioconductor-ahmassbank

   |downloads_bioconductor-ahmassbank| |docker_bioconductor-ahmassbank|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhubdata: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-ahmassbank

   and update with::

      mamba update bioconductor-ahmassbank

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ahmassbank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahmassbank:<tag>

   (see `bioconductor-ahmassbank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ahmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahmassbank
   :alt:   (downloads)
.. |docker_bioconductor-ahmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-ahmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahmassbank
.. _`bioconductor-ahmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-ahmassbank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahmassbank";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahmassbank/README.html