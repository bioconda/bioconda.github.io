:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb.hs.hg38'
.. highlight: bash

bioconductor-epitxdb.hs.hg38
============================

.. conda:recipe:: bioconductor-epitxdb.hs.hg38
   :replaces_section_title:
   :noindex:

   Annotation package for EpiTxDb objects

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/EpiTxDb.Hs.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb.hs.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.hs.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.hs.hg38/meta.yaml>`_

   Exposes an annotation databases generated from several sources by exposing these as EpiTxDb object. Generated for Homo sapiens\/hg38.


.. conda:package:: bioconductor-epitxdb.hs.hg38

   |downloads_bioconductor-epitxdb.hs.hg38| |docker_bioconductor-epitxdb.hs.hg38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.7-8</code>,  <code>0.99.7-7</code>,  <code>0.99.7-6</code>,  <code>0.99.7-5</code>,  <code>0.99.7-4</code>,  <code>0.99.7-3</code>,  <code>0.99.7-2</code>,  <code>0.99.7-1</code>,  <code>0.99.7-0</code>,  </span></summary>
      

      ``0.99.7-8``,  ``0.99.7-7``,  ``0.99.7-6``,  ``0.99.7-5``,  ``0.99.7-4``,  ``0.99.7-3``,  ``0.99.7-2``,  ``0.99.7-1``,  ``0.99.7-0``,  ``0.99.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-epitxdb: ``>=1.18.0,<1.19.0``
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

      mamba install bioconductor-epitxdb.hs.hg38

   and update with::

      mamba update bioconductor-epitxdb.hs.hg38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epitxdb.hs.hg38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epitxdb.hs.hg38:<tag>

   (see `bioconductor-epitxdb.hs.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epitxdb.hs.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.hs.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb.hs.hg38
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb.hs.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38
.. _`bioconductor-epitxdb.hs.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb.hs.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb.hs.hg38";
        var versions = ["0.99.7","0.99.7","0.99.7","0.99.7","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb.hs.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb.hs.hg38/README.html