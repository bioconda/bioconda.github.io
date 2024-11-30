:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctdata'
.. highlight: bash

bioconductor-ctdata
===================

.. conda:recipe:: bioconductor-ctdata
   :replaces_section_title:
   :noindex:

   Data companion to CTexploreR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CTdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ctdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdata/meta.yaml>`_

   Data from publicly available databases \(GTEx\, CCLE\, TCGA and ENCODE\) that go with CTexploreR in order to re\-define a comprehensive and thoroughly curated list of CT genes and their main characteristics.


.. conda:package:: bioconductor-ctdata

   |downloads_bioconductor-ctdata| |docker_bioconductor-ctdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
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

      mamba install bioconductor-ctdata

   and update with::

      mamba update bioconductor-ctdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctdata:<tag>

   (see `bioconductor-ctdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctdata
   :alt:   (downloads)
.. |docker_bioconductor-ctdata| image:: https://quay.io/repository/biocontainers/bioconductor-ctdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctdata
.. _`bioconductor-ctdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ctdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctdata";
        var versions = ["1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctdata/README.html