:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.ucsc.trnas'
.. highlight: bash

bioconductor-fdb.ucsc.trnas
===========================

.. conda:recipe:: bioconductor-fdb.ucsc.trnas
   :replaces_section_title:
   :noindex:

   Annotation package for FeatureDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/FDb.UCSC.tRNAs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.trnas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.trnas/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as FeatureDb objects


.. conda:package:: bioconductor-fdb.ucsc.trnas

   |downloads_bioconductor-fdb.ucsc.trnas| |docker_bioconductor-fdb.ucsc.trnas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-12</code>,  <code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  </span></summary>
      

      ``1.0.1-12``,  ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
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

      mamba install bioconductor-fdb.ucsc.trnas

   and update with::

      mamba update bioconductor-fdb.ucsc.trnas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fdb.ucsc.trnas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.ucsc.trnas:<tag>

   (see `bioconductor-fdb.ucsc.trnas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.ucsc.trnas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.trnas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.ucsc.trnas
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.trnas| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas
.. _`bioconductor-fdb.ucsc.trnas/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.trnas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.ucsc.trnas";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.trnas/README.html