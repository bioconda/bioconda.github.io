:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylclockdata'
.. highlight: bash

bioconductor-methylclockdata
============================

.. conda:recipe:: bioconductor-methylclockdata
   :replaces_section_title:
   :noindex:

   Data for methylclock package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/methylclockData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-methylclockdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata/meta.yaml>`_

   Collection of 9 datasets\, andrews and bakulski cord blood\, blood gse35069\, blood gse35069 chen\, blood gse35069 complete\, combined cord blood\, cord bloo d gse68456\, gervin and lyle cord blood\, guintivano dlpfc and saliva gse48472\". Data downloaded from \[meffil\]\(https\:\/\/github.com\/perishky\/meffil\/\). Data used to estimate cell counts using Extrinsic epigenetic age acceleration \(EEAA\) method Collection of 12 datasets to use with MethylClock package to estimate chronological and gestational DNA methylationwith estimators to use wit different methylation clocks


.. conda:package:: bioconductor-methylclockdata

   |downloads_bioconductor-methylclockdata| |docker_bioconductor-methylclockdata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-experimenthubdata: ``>=1.28.0,<1.29.0``
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

      mamba install bioconductor-methylclockdata

   and update with::

      mamba update bioconductor-methylclockdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylclockdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylclockdata:<tag>

   (see `bioconductor-methylclockdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylclockdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylclockdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylclockdata
   :alt:   (downloads)
.. |docker_bioconductor-methylclockdata| image:: https://quay.io/repository/biocontainers/bioconductor-methylclockdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylclockdata
.. _`bioconductor-methylclockdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylclockdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylclockdata";
        var versions = ["1.10.0","1.8.1","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html