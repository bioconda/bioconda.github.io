:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast.data.string.v91'
.. highlight: bash

bioconductor-geneplast.data.string.v91
======================================

.. conda:recipe:: bioconductor-geneplast.data.string.v91
   :replaces_section_title:
   :noindex:

   Input data for the geneplast package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/geneplast.data.string.v91.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplast.data.string.v91 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data.string.v91>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data.string.v91/meta.yaml>`_

   The package geneplast.data.string.v91 contains input data used in the analysis pipelines available in the geneplast package.


.. conda:package:: bioconductor-geneplast.data.string.v91

   |downloads_bioconductor-geneplast.data.string.v91| |docker_bioconductor-geneplast.data.string.v91|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.6-12</code>,  <code>0.99.6-11</code>,  <code>0.99.6-10</code>,  <code>0.99.6-9</code>,  <code>0.99.6-8</code>,  <code>0.99.6-7</code>,  <code>0.99.6-6</code>,  <code>0.99.6-5</code>,  <code>0.99.6-4</code>,  </span></summary>
      

      ``0.99.6-12``,  ``0.99.6-11``,  ``0.99.6-10``,  ``0.99.6-9``,  ``0.99.6-8``,  ``0.99.6-7``,  ``0.99.6-6``,  ``0.99.6-5``,  ``0.99.6-4``,  ``0.99.6-3``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-geneplast.data.string.v91

   and update with::

      mamba update bioconductor-geneplast.data.string.v91

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneplast.data.string.v91

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplast.data.string.v91:<tag>

   (see `bioconductor-geneplast.data.string.v91/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplast.data.string.v91| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.data.string.v91.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast.data.string.v91
   :alt:   (downloads)
.. |docker_bioconductor-geneplast.data.string.v91| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast.data.string.v91/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast.data.string.v91
.. _`bioconductor-geneplast.data.string.v91/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast.data.string.v91?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplast.data.string.v91";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast.data.string.v91/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast.data.string.v91/README.html