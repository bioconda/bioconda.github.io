:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-headrest'
.. highlight: bash

ucsc-headrest
=============

.. conda:recipe:: ucsc-headrest
   :replaces_section_title:
   :noindex:

   Return all \*but\* the first N lines of a file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-headrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-headrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-headrest/meta.yaml>`_

   


.. conda:package:: ucsc-headrest

   |downloads_ucsc-headrest| |docker_ucsc-headrest|

   :versions:
      
      

      ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install ucsc-headrest

   and update with::

      mamba update ucsc-headrest

  To create a new environment, run::

      mamba create --name myenvname ucsc-headrest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-headrest:<tag>

   (see `ucsc-headrest/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-headrest| image:: https://img.shields.io/conda/dn/bioconda/ucsc-headrest.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-headrest
   :alt:   (downloads)
.. |docker_ucsc-headrest| image:: https://quay.io/repository/biocontainers/ucsc-headrest/status
   :target: https://quay.io/repository/biocontainers/ucsc-headrest
.. _`ucsc-headrest/tags`: https://quay.io/repository/biocontainers/ucsc-headrest?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-headrest";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-headrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-headrest/README.html