:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnazoodata'
.. highlight: bash

bioconductor-dnazoodata
=======================

.. conda:recipe:: bioconductor-dnazoodata
   :replaces_section_title:
   :noindex:

   DNA Zoo data package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/DNAZooData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dnazoodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnazoodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnazoodata/meta.yaml>`_

   DNAZooData is a data package giving programmatic access to genome assemblies and Hi\-C contact matrices uniformly processed by the \[DNA Zoo Consortium\]\(https\:\/\/www.dnazoo.org\/\). The matrices are available in the multi\-resolution \`.hic\` format. A URL to corrected genome assemblies in \`.fastq\` format is also provided to the end\-user.


.. conda:package:: bioconductor-dnazoodata

   |downloads_bioconductor-dnazoodata| |docker_bioconductor-dnazoodata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-hicexperiment: ``>=1.0.0,<1.1.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjson: 
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

      mamba install bioconductor-dnazoodata

   and update with::

      mamba update bioconductor-dnazoodata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dnazoodata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnazoodata:<tag>

   (see `bioconductor-dnazoodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnazoodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnazoodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnazoodata
   :alt:   (downloads)
.. |docker_bioconductor-dnazoodata| image:: https://quay.io/repository/biocontainers/bioconductor-dnazoodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnazoodata
.. _`bioconductor-dnazoodata/tags`: https://quay.io/repository/biocontainers/bioconductor-dnazoodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnazoodata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnazoodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnazoodata/README.html