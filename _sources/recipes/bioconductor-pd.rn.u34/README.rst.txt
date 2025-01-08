:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.rn.u34'
.. highlight: bash

bioconductor-pd.rn.u34
======================

.. conda:recipe:: bioconductor-pd.rn.u34
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name RN\_U34

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/pd.rn.u34.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.rn.u34 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rn.u34>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rn.u34/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name RN\_U34


.. conda:package:: bioconductor-pd.rn.u34

   |downloads_bioconductor-pd.rn.u34| |docker_bioconductor-pd.rn.u34|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-13</code>,  <code>3.12.0-12</code>,  <code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  </span></summary>
      

      ``3.12.0-13``,  ``3.12.0-12``,  ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
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

      mamba install bioconductor-pd.rn.u34

   and update with::

      mamba update bioconductor-pd.rn.u34

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.rn.u34

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.rn.u34:<tag>

   (see `bioconductor-pd.rn.u34/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.rn.u34| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.rn.u34.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.rn.u34
   :alt:   (downloads)
.. |docker_bioconductor-pd.rn.u34| image:: https://quay.io/repository/biocontainers/bioconductor-pd.rn.u34/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.rn.u34
.. _`bioconductor-pd.rn.u34/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.rn.u34?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.rn.u34";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.rn.u34/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.rn.u34/README.html