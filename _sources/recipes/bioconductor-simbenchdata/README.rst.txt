:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbenchdata'
.. highlight: bash

bioconductor-simbenchdata
=========================

.. conda:recipe:: bioconductor-simbenchdata
   :replaces_section_title:
   :noindex:

   SimBenchData\: a collection of 35 single\-cell RNA\-seq data covering a wide range of data characteristics

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/SimBenchData.html
   :license: GPL-3
   :recipe: /`bioconductor-simbenchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbenchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbenchdata/meta.yaml>`_

   The SimBenchData package contains a total of 35 single\-cell RNA\-seq datasets covering a wide range of data characteristics\, including major sequencing protocols\, multiple tissue types\, and both human and mouse sources.


.. conda:package:: bioconductor-simbenchdata

   |downloads_bioconductor-simbenchdata| |docker_bioconductor-simbenchdata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
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

      mamba install bioconductor-simbenchdata

   and update with::

      mamba update bioconductor-simbenchdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simbenchdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simbenchdata:<tag>

   (see `bioconductor-simbenchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simbenchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbenchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbenchdata
   :alt:   (downloads)
.. |docker_bioconductor-simbenchdata| image:: https://quay.io/repository/biocontainers/bioconductor-simbenchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbenchdata
.. _`bioconductor-simbenchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-simbenchdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simbenchdata";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbenchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbenchdata/README.html