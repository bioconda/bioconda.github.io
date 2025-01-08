:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rat.db0'
.. highlight: bash

bioconductor-rat.db0
====================

.. conda:recipe:: bioconductor-rat.db0
   :replaces_section_title:
   :noindex:

   Base Level Annotation databases for rat

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/rat.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rat.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat.db0/meta.yaml>`_

   Base annotation databases for rat\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-rat.db0

   |downloads_bioconductor-rat.db0| |docker_bioconductor-rat.db0|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  </span></summary>
      

      ``3.20.0-0``,  ``3.18.0-0``,  ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.2-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-rat.db0

   and update with::

      mamba update bioconductor-rat.db0

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rat.db0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rat.db0:<tag>

   (see `bioconductor-rat.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rat.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rat.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rat.db0
   :alt:   (downloads)
.. |docker_bioconductor-rat.db0| image:: https://quay.io/repository/biocontainers/bioconductor-rat.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rat.db0
.. _`bioconductor-rat.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-rat.db0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rat.db0";
        var versions = ["3.20.0","3.18.0","3.17.0","3.16.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rat.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rat.db0/README.html