:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.sc.sgd.db'
.. highlight: bash

bioconductor-org.sc.sgd.db
==========================

.. conda:recipe:: bioconductor-org.sc.sgd.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Yeast

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/org.Sc.sgd.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.sc.sgd.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.sc.sgd.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.sc.sgd.db/meta.yaml>`_

   Genome wide annotation for Yeast\, primarily based on mapping using ORF identifiers from SGD.


.. conda:package:: bioconductor-org.sc.sgd.db

   |downloads_bioconductor-org.sc.sgd.db| |docker_bioconductor-org.sc.sgd.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-org.sc.sgd.db

   and update with::

      mamba update bioconductor-org.sc.sgd.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-org.sc.sgd.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.sc.sgd.db:<tag>

   (see `bioconductor-org.sc.sgd.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.sc.sgd.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.sc.sgd.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.sc.sgd.db
   :alt:   (downloads)
.. |docker_bioconductor-org.sc.sgd.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db
.. _`bioconductor-org.sc.sgd.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.sc.sgd.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.sc.sgd.db";
        var versions = ["3.17.0","3.16.0","3.14.0","3.14.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.sc.sgd.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.sc.sgd.db/README.html