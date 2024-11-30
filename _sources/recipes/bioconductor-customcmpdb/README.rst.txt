:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-customcmpdb'
.. highlight: bash

bioconductor-customcmpdb
========================

.. conda:recipe:: bioconductor-customcmpdb
   :replaces_section_title:
   :noindex:

   Customize and Query Compound Annotation Database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/customCMPdb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-customcmpdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customcmpdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-customcmpdb/meta.yaml>`_

   This package serves as a query interface for important community collections of small molecules\, while also allowing users to include custom compound collections.


.. conda:package:: bioconductor-customcmpdb

   |downloads_bioconductor-customcmpdb| |docker_bioconductor-customcmpdb|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-chemminer: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rappdirs: 
   :depends r-rsqlite: 
   :depends r-xml: 
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

      mamba install bioconductor-customcmpdb

   and update with::

      mamba update bioconductor-customcmpdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-customcmpdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-customcmpdb:<tag>

   (see `bioconductor-customcmpdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-customcmpdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-customcmpdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-customcmpdb
   :alt:   (downloads)
.. |docker_bioconductor-customcmpdb| image:: https://quay.io/repository/biocontainers/bioconductor-customcmpdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-customcmpdb
.. _`bioconductor-customcmpdb/tags`: https://quay.io/repository/biocontainers/bioconductor-customcmpdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-customcmpdb";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-customcmpdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-customcmpdb/README.html