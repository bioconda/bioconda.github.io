:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapmapsnp6'
.. highlight: bash

bioconductor-hapmapsnp6
=======================

.. conda:recipe:: bioconductor-hapmapsnp6
   :replaces_section_title:
   :noindex:

   Sample data \- Hapmap SNP 6.0 Affymetrix

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/hapmapsnp6.html
   :license: GPL
   :recipe: /`bioconductor-hapmapsnp6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmapsnp6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmapsnp6/meta.yaml>`_

   Sample dataset obtained from http\:\/\/www.hapmap.org


.. conda:package:: bioconductor-hapmapsnp6

   |downloads_bioconductor-hapmapsnp6| |docker_bioconductor-hapmapsnp6|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-hapmapsnp6

   and update with::

      mamba update bioconductor-hapmapsnp6

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hapmapsnp6

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapmapsnp6:<tag>

   (see `bioconductor-hapmapsnp6/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapmapsnp6| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapmapsnp6.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapmapsnp6
   :alt:   (downloads)
.. |docker_bioconductor-hapmapsnp6| image:: https://quay.io/repository/biocontainers/bioconductor-hapmapsnp6/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapmapsnp6
.. _`bioconductor-hapmapsnp6/tags`: https://quay.io/repository/biocontainers/bioconductor-hapmapsnp6?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapmapsnp6";
        var versions = ["1.48.0","1.44.0","1.42.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapmapsnp6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapmapsnp6/README.html