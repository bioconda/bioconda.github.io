:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biscuiteerdata'
.. highlight: bash

bioconductor-biscuiteerdata
===========================

.. conda:recipe:: bioconductor-biscuiteerdata
   :replaces_section_title:
   :noindex:

   Data Package for Biscuiteer

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/biscuiteerData.html
   :license: GPL-3
   :recipe: /`bioconductor-biscuiteerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biscuiteerdata/meta.yaml>`_

   Contains default datasets used by the Bioconductor package biscuiteer.


.. conda:package:: bioconductor-biscuiteerdata

   |downloads_bioconductor-biscuiteerdata| |docker_bioconductor-biscuiteerdata|

   :versions:
      
      

      ``1.14.1-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230713``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
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

      mamba install bioconductor-biscuiteerdata

   and update with::

      mamba update bioconductor-biscuiteerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biscuiteerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biscuiteerdata:<tag>

   (see `bioconductor-biscuiteerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biscuiteerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biscuiteerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biscuiteerdata
   :alt:   (downloads)
.. |docker_bioconductor-biscuiteerdata| image:: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata
.. _`bioconductor-biscuiteerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-biscuiteerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biscuiteerdata";
        var versions = ["1.14.1","1.12.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biscuiteerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biscuiteerdata/README.html