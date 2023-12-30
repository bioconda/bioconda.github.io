:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnameconverter'
.. highlight: bash

bioconductor-mirnameconverter
=============================

.. conda:recipe:: bioconductor-mirnameconverter
   :replaces_section_title:
   :noindex:

   Convert miRNA Names to Different miRBase Versions

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/miRNAmeConverter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirnameconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter/meta.yaml>`_
   :links: biotools: :biotools:`mirnameconverter`

   Translating mature miRNA names to different miRBase versions\, sequence retrieval\, checking names for validity and detecting miRBase version of a given set of names \(data from http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirnameconverter

   |downloads_bioconductor-mirnameconverter| |docker_bioconductor-mirnameconverter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-mirbaseversions.db: ``>=1.1.0,<1.2.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-reshape2: 
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

      mamba install bioconductor-mirnameconverter

   and update with::

      mamba update bioconductor-mirnameconverter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirnameconverter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnameconverter:<tag>

   (see `bioconductor-mirnameconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnameconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnameconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnameconverter
   :alt:   (downloads)
.. |docker_bioconductor-mirnameconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter
.. _`bioconductor-mirnameconverter/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnameconverter";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html