:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oligodata'
.. highlight: bash

bioconductor-oligodata
======================

.. conda:recipe:: bioconductor-oligodata
   :replaces_section_title:
   :noindex:

   Dataset samples for the oligo package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/oligoData.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-oligodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligodata/meta.yaml>`_

   Dataset samples \(Affymetrix\: Expression\, Gene\, Exon\, SNP\; NimbleGen\: Expression\, Tiling\) to be used with the oligo package.


.. conda:package:: bioconductor-oligodata

   |downloads_bioconductor-oligodata| |docker_bioconductor-oligodata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-11</code>,  <code>1.8.0-10</code>,  <code>1.8.0-9</code>,  <code>1.8.0-8</code>,  <code>1.8.0-7</code>,  <code>1.8.0-6</code>,  <code>1.8.0-5</code>,  <code>1.8.0-4</code>,  <code>1.8.0-3</code>,  </span></summary>
      

      ``1.8.0-11``,  ``1.8.0-10``,  ``1.8.0-9``,  ``1.8.0-8``,  ``1.8.0-7``,  ``1.8.0-6``,  ``1.8.0-5``,  ``1.8.0-4``,  ``1.8.0-3``,  ``1.8.0-2``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-oligo: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-oligodata

   and update with::

      mamba update bioconductor-oligodata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oligodata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oligodata:<tag>

   (see `bioconductor-oligodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oligodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oligodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oligodata
   :alt:   (downloads)
.. |docker_bioconductor-oligodata| image:: https://quay.io/repository/biocontainers/bioconductor-oligodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oligodata
.. _`bioconductor-oligodata/tags`: https://quay.io/repository/biocontainers/bioconductor-oligodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oligodata";
        var versions = ["1.8.0","1.8.0","1.8.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oligodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oligodata/README.html