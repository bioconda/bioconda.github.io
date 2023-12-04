:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbnci'
.. highlight: bash

bioconductor-biodbnci
=====================

.. conda:recipe:: bioconductor-biodbnci
   :replaces_section_title:
   :noindex:

   biodbNci\, a library for connecting to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biodbNci.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbnci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci/meta.yaml>`_

   The biodbNci library is an extension of the biodb framework package. It provides access to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database. It allows to retrieve entries by their accession number\, and run specific web services.


.. conda:package:: bioconductor-biodbnci

   |downloads_bioconductor-biodbnci| |docker_bioconductor-biodbnci|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biodb: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biodb: ``>=1.10.0,<1.11.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chk: 
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-testthat: 
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

      mamba install bioconductor-biodbnci

   and update with::

      mamba update bioconductor-biodbnci

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodbnci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbnci:<tag>

   (see `bioconductor-biodbnci/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbnci| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbnci.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbnci
   :alt:   (downloads)
.. |docker_bioconductor-biodbnci| image:: https://quay.io/repository/biocontainers/bioconductor-biodbnci/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbnci
.. _`bioconductor-biodbnci/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbnci?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbnci";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html