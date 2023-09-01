:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.dmelanogaster.ucsc.dm6'
.. highlight: bash

bioconductor-bsgenome.dmelanogaster.ucsc.dm6
============================================

.. conda:recipe:: bioconductor-bsgenome.dmelanogaster.ucsc.dm6
   :replaces_section_title:
   :noindex:

   Full genome sequences for Drosophila melanogaster \(UCSC version dm6\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Dmelanogaster.UCSC.dm6.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.dmelanogaster.ucsc.dm6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.dmelanogaster.ucsc.dm6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.dmelanogaster.ucsc.dm6/meta.yaml>`_

   Full genome sequences for Drosophila melanogaster \(Fly\) as provided by UCSC \(dm6\, Aug. 2014\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.dmelanogaster.ucsc.dm6

   |downloads_bioconductor-bsgenome.dmelanogaster.ucsc.dm6| |docker_bioconductor-bsgenome.dmelanogaster.ucsc.dm6|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-11</code>,  <code>1.4.1-10</code>,  <code>1.4.1-9</code>,  <code>1.4.1-8</code>,  <code>1.4.1-7</code>,  <code>1.4.1-6</code>,  <code>1.4.1-5</code>,  <code>1.4.1-4</code>,  <code>1.4.1-3</code>,  </span></summary>
      

      ``1.4.1-11``,  ``1.4.1-10``,  ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``

      
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

      mamba install bioconductor-bsgenome.dmelanogaster.ucsc.dm6

   and update with::

      mamba update bioconductor-bsgenome.dmelanogaster.ucsc.dm6

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.dmelanogaster.ucsc.dm6

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.dmelanogaster.ucsc.dm6:<tag>

   (see `bioconductor-bsgenome.dmelanogaster.ucsc.dm6/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.dmelanogaster.ucsc.dm6| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.dmelanogaster.ucsc.dm6.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.dmelanogaster.ucsc.dm6
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.dmelanogaster.ucsc.dm6| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.dmelanogaster.ucsc.dm6/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.dmelanogaster.ucsc.dm6
.. _`bioconductor-bsgenome.dmelanogaster.ucsc.dm6/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.dmelanogaster.ucsc.dm6?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.dmelanogaster.ucsc.dm6";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.dmelanogaster.ucsc.dm6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.dmelanogaster.ucsc.dm6/README.html