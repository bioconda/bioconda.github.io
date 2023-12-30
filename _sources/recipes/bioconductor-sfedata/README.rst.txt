:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sfedata'
.. highlight: bash

bioconductor-sfedata
====================

.. conda:recipe:: bioconductor-sfedata
   :replaces_section_title:
   :noindex:

   Example SpatialFeatureExperiment datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/SFEData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sfedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sfedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sfedata/meta.yaml>`_

   Example spatial transcriptomics datasets with Simple Feature annotations as SpatialFeatureExperiment objects. Technologies include Visium\, slide\-seq\, Nanostring CoxMX\, Vizgen MERFISH\, and 10X Xenium. Tissues include mouse skeletal muscle\, human melanoma metastasis\, human lung\, breast cancer\, and mouse liver.


.. conda:package:: bioconductor-sfedata

   |downloads_bioconductor-sfedata| |docker_bioconductor-sfedata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sfedata

   and update with::

      mamba update bioconductor-sfedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sfedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sfedata:<tag>

   (see `bioconductor-sfedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sfedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sfedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sfedata
   :alt:   (downloads)
.. |docker_bioconductor-sfedata| image:: https://quay.io/repository/biocontainers/bioconductor-sfedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sfedata
.. _`bioconductor-sfedata/tags`: https://quay.io/repository/biocontainers/bioconductor-sfedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sfedata";
        var versions = ["1.4.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sfedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sfedata/README.html