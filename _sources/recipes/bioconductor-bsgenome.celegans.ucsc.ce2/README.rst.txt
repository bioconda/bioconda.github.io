:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.celegans.ucsc.ce2'
.. highlight: bash

bioconductor-bsgenome.celegans.ucsc.ce2
=======================================

.. conda:recipe:: bioconductor-bsgenome.celegans.ucsc.ce2
   :replaces_section_title:
   :noindex:

   Full genome sequences for Caenorhabditis elegans \(UCSC version ce2\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Celegans.UCSC.ce2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.celegans.ucsc.ce2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce2/meta.yaml>`_

   Full genome sequences for Caenorhabditis elegans \(Worm\) as provided by UCSC \(ce2\, Mar. 2004\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.celegans.ucsc.ce2

   |downloads_bioconductor-bsgenome.celegans.ucsc.ce2| |docker_bioconductor-bsgenome.celegans.ucsc.ce2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-11</code>,  <code>1.4.0-10</code>,  <code>1.4.0-9</code>,  <code>1.4.0-8</code>,  <code>1.4.0-7</code>,  <code>1.4.0-6</code>,  <code>1.4.0-5</code>,  <code>1.4.0-4</code>,  <code>1.4.0-3</code>,  </span></summary>
      

      ``1.4.0-11``,  ``1.4.0-10``,  ``1.4.0-9``,  ``1.4.0-8``,  ``1.4.0-7``,  ``1.4.0-6``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-bsgenome.celegans.ucsc.ce2

   and update with::

      mamba update bioconductor-bsgenome.celegans.ucsc.ce2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.celegans.ucsc.ce2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce2:<tag>

   (see `bioconductor-bsgenome.celegans.ucsc.ce2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.celegans.ucsc.ce2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.celegans.ucsc.ce2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.celegans.ucsc.ce2
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.celegans.ucsc.ce2| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce2
.. _`bioconductor-bsgenome.celegans.ucsc.ce2/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.celegans.ucsc.ce2";
        var versions = ["1.4.0","1.4.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce2/README.html