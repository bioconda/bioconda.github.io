:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.celegans.ucsc.ce6'
.. highlight: bash

bioconductor-bsgenome.celegans.ucsc.ce6
=======================================

.. conda:recipe:: bioconductor-bsgenome.celegans.ucsc.ce6
   :replaces_section_title:
   :noindex:

   Full genome sequences for Caenorhabditis elegans \(UCSC version ce6\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Celegans.UCSC.ce6.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.celegans.ucsc.ce6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.celegans.ucsc.ce6/meta.yaml>`_

   Full genome sequences for Caenorhabditis elegans \(Worm\) as provided by UCSC \(ce6\, May 2008\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.celegans.ucsc.ce6

   |downloads_bioconductor-bsgenome.celegans.ucsc.ce6| |docker_bioconductor-bsgenome.celegans.ucsc.ce6|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-17</code>,  <code>1.4.0-16</code>,  <code>1.4.0-15</code>,  <code>1.4.0-14</code>,  <code>1.4.0-13</code>,  <code>1.4.0-12</code>,  <code>1.4.0-11</code>,  <code>1.4.0-10</code>,  <code>1.4.0-9</code>,  </span></summary>
      

      ``1.4.0-17``,  ``1.4.0-16``,  ``1.4.0-15``,  ``1.4.0-14``,  ``1.4.0-13``,  ``1.4.0-12``,  ``1.4.0-11``,  ``1.4.0-10``,  ``1.4.0-9``,  ``1.4.0-8``,  ``1.4.0-7``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
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

      mamba install bioconductor-bsgenome.celegans.ucsc.ce6

   and update with::

      mamba update bioconductor-bsgenome.celegans.ucsc.ce6

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.celegans.ucsc.ce6

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce6:<tag>

   (see `bioconductor-bsgenome.celegans.ucsc.ce6/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.celegans.ucsc.ce6| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.celegans.ucsc.ce6.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.celegans.ucsc.ce6
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.celegans.ucsc.ce6| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce6/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce6
.. _`bioconductor-bsgenome.celegans.ucsc.ce6/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.celegans.ucsc.ce6?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.celegans.ucsc.ce6";
        var versions = ["1.4.0","1.4.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.celegans.ucsc.ce6/README.html