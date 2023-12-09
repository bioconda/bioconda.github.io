:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drosgenome1cdf'
.. highlight: bash

bioconductor-drosgenome1cdf
===========================

.. conda:recipe:: bioconductor-drosgenome1cdf
   :replaces_section_title:
   :noindex:

   drosgenome1cdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/drosgenome1cdf.html
   :license: LGPL
   :recipe: /`bioconductor-drosgenome1cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1cdf/meta.yaml>`_

   A package containing an environment representing the DrosGenome1.CDF file.


.. conda:package:: bioconductor-drosgenome1cdf

   |downloads_bioconductor-drosgenome1cdf| |docker_bioconductor-drosgenome1cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-drosgenome1cdf

   and update with::

      mamba update bioconductor-drosgenome1cdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drosgenome1cdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drosgenome1cdf:<tag>

   (see `bioconductor-drosgenome1cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drosgenome1cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drosgenome1cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drosgenome1cdf
   :alt:   (downloads)
.. |docker_bioconductor-drosgenome1cdf| image:: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf
.. _`bioconductor-drosgenome1cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drosgenome1cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drosgenome1cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drosgenome1cdf/README.html