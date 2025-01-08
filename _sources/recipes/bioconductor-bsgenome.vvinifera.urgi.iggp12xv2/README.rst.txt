:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.vvinifera.urgi.iggp12xv2'
.. highlight: bash

bioconductor-bsgenome.vvinifera.urgi.iggp12xv2
==============================================

.. conda:recipe:: bioconductor-bsgenome.vvinifera.urgi.iggp12xv2
   :replaces_section_title:
   :noindex:

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(IGGP version 12Xv2\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Vvinifera.URGI.IGGP12Xv2.html
   :license: CC0
   :recipe: /`bioconductor-bsgenome.vvinifera.urgi.iggp12xv2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/meta.yaml>`_

   Full reference nuclear genome sequences for Vitis vinifera subsp. vinifera PN40024 \(derived from Pinot Noir and close to homozygosity after 6\-9 rounds of selfing\) as assembled by the IGGP \(version 12Xv2\) and available at the URGI \(INRA\)


.. conda:package:: bioconductor-bsgenome.vvinifera.urgi.iggp12xv2

   |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp12xv2| |docker_bioconductor-bsgenome.vvinifera.urgi.iggp12xv2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-13</code>,  <code>0.1-12</code>,  <code>0.1-11</code>,  <code>0.1-10</code>,  <code>0.1-9</code>,  <code>0.1-8</code>,  <code>0.1-7</code>,  <code>0.1-6</code>,  <code>0.1-5</code>,  </span></summary>
      

      ``0.1-13``,  ``0.1-12``,  ``0.1-11``,  ``0.1-10``,  ``0.1-9``,  ``0.1-8``,  ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      
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

      mamba install bioconductor-bsgenome.vvinifera.urgi.iggp12xv2

   and update with::

      mamba update bioconductor-bsgenome.vvinifera.urgi.iggp12xv2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.vvinifera.urgi.iggp12xv2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2:<tag>

   (see `bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.vvinifera.urgi.iggp12xv2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.vvinifera.urgi.iggp12xv2| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2
.. _`bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.vvinifera.urgi.iggp12xv2";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.vvinifera.urgi.iggp12xv2/README.html