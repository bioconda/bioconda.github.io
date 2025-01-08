:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocroxytest'
.. highlight: bash

bioconductor-biocroxytest
=========================

.. conda:recipe:: bioconductor-biocroxytest
   :replaces_section_title:
   :noindex:

   Handle Long Tests in Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biocroxytest.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-biocroxytest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocroxytest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocroxytest/meta.yaml>`_

   This package provides a roclet for roxygen2 that identifies and processes code blocks in your documentation marked with \`\@longtests\`. These blocks should contain tests that take a long time to run and thus cannot be included in the regular test suite of the package. When you run \`roxygen2\:\:roxygenise\` with the \`longtests\_roclet\`\, it will extract these long tests from your documentation and save them in a separate directory. This allows you to run these long tests separately from the rest of your tests\, for example\, on a continuous integration server that is set up to run long tests.


.. conda:package:: bioconductor-biocroxytest

   |downloads_bioconductor-biocroxytest| |docker_bioconductor-biocroxytest|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-glue: 
   :depends r-roxygen2: 
   :depends r-stringr: 
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

      mamba install bioconductor-biocroxytest

   and update with::

      mamba update bioconductor-biocroxytest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocroxytest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocroxytest:<tag>

   (see `bioconductor-biocroxytest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocroxytest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocroxytest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocroxytest
   :alt:   (downloads)
.. |docker_bioconductor-biocroxytest| image:: https://quay.io/repository/biocontainers/bioconductor-biocroxytest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocroxytest
.. _`bioconductor-biocroxytest/tags`: https://quay.io/repository/biocontainers/bioconductor-biocroxytest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocroxytest";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocroxytest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocroxytest/README.html