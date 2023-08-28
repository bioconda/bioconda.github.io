:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.vvinifera.urgi.iggp8x'
.. highlight: bash

bioconductor-bsgenome.vvinifera.urgi.iggp8x
===========================================

.. conda:recipe:: bioconductor-bsgenome.vvinifera.urgi.iggp8x
   :replaces_section_title:
   :noindex:

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(IGGP version 8X\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Vvinifera.URGI.IGGP8X.html
   :license: CC0
   :recipe: /`bioconductor-bsgenome.vvinifera.urgi.iggp8x <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/meta.yaml>`_

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(derived from Pinot Noir and close to homozygosity after 6\-9 rounds of selfing\) as assembled by the IGGP \(version 8X\) and available at the URGI \(INRA\). More details in Jaillon et al \(Nature\, 2007\).


.. conda:package:: bioconductor-bsgenome.vvinifera.urgi.iggp8x

   |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp8x| |docker_bioconductor-bsgenome.vvinifera.urgi.iggp8x|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-11</code>,  <code>0.1-10</code>,  <code>0.1-9</code>,  <code>0.1-8</code>,  <code>0.1-7</code>,  <code>0.1-6</code>,  <code>0.1-5</code>,  <code>0.1-4</code>,  <code>0.1-3</code>,  </span></summary>
      

      ``0.1-11``,  ``0.1-10``,  ``0.1-9``,  ``0.1-8``,  ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-bsgenome.vvinifera.urgi.iggp8x

   and update with::

      mamba update bioconductor-bsgenome.vvinifera.urgi.iggp8x

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.vvinifera.urgi.iggp8x

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x:<tag>

   (see `bioconductor-bsgenome.vvinifera.urgi.iggp8x/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp8x| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp8x.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp8x
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.vvinifera.urgi.iggp8x| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x
.. _`bioconductor-bsgenome.vvinifera.urgi.iggp8x/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp8x?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.vvinifera.urgi.iggp8x";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp8x/README.html