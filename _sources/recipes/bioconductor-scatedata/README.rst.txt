:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scatedata'
.. highlight: bash

bioconductor-scatedata
======================

.. conda:recipe:: bioconductor-scatedata
   :replaces_section_title:
   :noindex:

   Data for SCATE \(Single\-cell ATAC\-seq Signal Extraction and Enhancement\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/SCATEData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scatedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatedata/meta.yaml>`_

   SCATEData is an ExperimentHub package for SCATE which is a software tool for extracting and enhancing the sparse and discrete Single\-cell ATAC\-seq Signal.


.. conda:package:: bioconductor-scatedata

   |downloads_bioconductor-scatedata| |docker_bioconductor-scatedata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.6-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
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

      mamba install bioconductor-scatedata

   and update with::

      mamba update bioconductor-scatedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scatedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scatedata:<tag>

   (see `bioconductor-scatedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scatedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scatedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scatedata
   :alt:   (downloads)
.. |docker_bioconductor-scatedata| image:: https://quay.io/repository/biocontainers/bioconductor-scatedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scatedata
.. _`bioconductor-scatedata/tags`: https://quay.io/repository/biocontainers/bioconductor-scatedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scatedata";
        var versions = ["1.10.0","1.8.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scatedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scatedata/README.html