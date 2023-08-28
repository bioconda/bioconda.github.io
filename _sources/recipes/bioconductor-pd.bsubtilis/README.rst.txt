:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.bsubtilis'
.. highlight: bash

bioconductor-pd.bsubtilis
=========================

.. conda:recipe:: bioconductor-pd.bsubtilis
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name Bsubtilis

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/pd.bsubtilis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.bsubtilis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.bsubtilis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.bsubtilis/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name Bsubtilis


.. conda:package:: bioconductor-pd.bsubtilis

   |downloads_bioconductor-pd.bsubtilis| |docker_bioconductor-pd.bsubtilis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  </span></summary>
      

      ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-oligo: ``>=1.64.0,<1.65.0``
   :depends bioconductor-oligoclasses: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
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

      mamba install bioconductor-pd.bsubtilis

   and update with::

      mamba update bioconductor-pd.bsubtilis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.bsubtilis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.bsubtilis:<tag>

   (see `bioconductor-pd.bsubtilis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.bsubtilis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.bsubtilis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.bsubtilis
   :alt:   (downloads)
.. |docker_bioconductor-pd.bsubtilis| image:: https://quay.io/repository/biocontainers/bioconductor-pd.bsubtilis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.bsubtilis
.. _`bioconductor-pd.bsubtilis/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.bsubtilis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.bsubtilis";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.bsubtilis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.bsubtilis/README.html