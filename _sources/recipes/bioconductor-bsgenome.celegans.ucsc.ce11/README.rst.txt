:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.celegans.ucsc.ce11'
.. highlight: bash

bioconductor-bsgenome.celegans.ucsc.ce11
========================================

.. conda:recipe:: bioconductor-bsgenome.celegans.ucsc.ce11
   :replaces_section_title:
   :noindex:

   Full genome sequences for Caenorhabditis elegans \(UCSC version ce11\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Celegans.UCSC.ce11.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.celegans.ucsc.ce11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce11/meta.yaml>`_

   Full genome sequences for Caenorhabditis elegans \(Worm\) as provided by UCSC \(ce11\, Feb. 2013\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.celegans.ucsc.ce11

   |downloads_bioconductor-bsgenome.celegans.ucsc.ce11| |docker_bioconductor-bsgenome.celegans.ucsc.ce11|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-13</code>,  <code>1.4.2-12</code>,  <code>1.4.2-11</code>,  <code>1.4.2-10</code>,  <code>1.4.2-9</code>,  <code>1.4.2-8</code>,  <code>1.4.2-7</code>,  <code>1.4.2-6</code>,  <code>1.4.2-5</code>,  </span></summary>
      

      ``1.4.2-13``,  ``1.4.2-12``,  ``1.4.2-11``,  ``1.4.2-10``,  ``1.4.2-9``,  ``1.4.2-8``,  ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
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

      mamba install bioconductor-bsgenome.celegans.ucsc.ce11

   and update with::

      mamba update bioconductor-bsgenome.celegans.ucsc.ce11

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.celegans.ucsc.ce11

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce11:<tag>

   (see `bioconductor-bsgenome.celegans.ucsc.ce11/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.celegans.ucsc.ce11| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.celegans.ucsc.ce11.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.celegans.ucsc.ce11
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.celegans.ucsc.ce11| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce11/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce11
.. _`bioconductor-bsgenome.celegans.ucsc.ce11/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce11?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.celegans.ucsc.ce11";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce11/README.html