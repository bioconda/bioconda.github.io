:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.moe430a'
.. highlight: bash

bioconductor-pd.moe430a
=======================

.. conda:recipe:: bioconductor-pd.moe430a
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name MOE430A

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/pd.moe430a.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.moe430a <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.moe430a>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.moe430a/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name MOE430A


.. conda:package:: bioconductor-pd.moe430a

   |downloads_bioconductor-pd.moe430a| |docker_bioconductor-pd.moe430a|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-14</code>,  <code>3.12.0-13</code>,  <code>3.12.0-12</code>,  <code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  </span></summary>
      

      ``3.12.0-14``,  ``3.12.0-13``,  ``3.12.0-12``,  ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-1``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
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

      mamba install bioconductor-pd.moe430a

   and update with::

      mamba update bioconductor-pd.moe430a

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.moe430a

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.moe430a:<tag>

   (see `bioconductor-pd.moe430a/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.moe430a| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.moe430a.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.moe430a
   :alt:   (downloads)
.. |docker_bioconductor-pd.moe430a| image:: https://quay.io/repository/biocontainers/bioconductor-pd.moe430a/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.moe430a
.. _`bioconductor-pd.moe430a/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.moe430a?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.moe430a";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.moe430a/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.moe430a/README.html