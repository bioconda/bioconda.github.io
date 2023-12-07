:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mygene'
.. highlight: bash

bioconductor-mygene
===================

.. conda:recipe:: bioconductor-mygene
   :replaces_section_title:
   :noindex:

   Access MyGene.Info\_ services

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mygene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mygene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mygene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mygene/meta.yaml>`_
   :links: biotools: :biotools:`mygene`, doi: :doi:`10.1101/009333`

   MyGene.Info\_ provides simple\-to\-use REST web services to query\/retrieve gene annotation data. It\'s designed with simplicity and performance emphasized. \*mygene\*\, is an easy\-to\-use R wrapper to access MyGene.Info\_ services.


.. conda:package:: bioconductor-mygene

   |downloads_bioconductor-mygene| |docker_bioconductor-mygene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.2-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hmisc: 
   :depends r-httr: ``>=0.3``
   :depends r-jsonlite: ``>=0.9.7``
   :depends r-plyr: 
   :depends r-sqldf: 
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

      mamba install bioconductor-mygene

   and update with::

      mamba update bioconductor-mygene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mygene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mygene:<tag>

   (see `bioconductor-mygene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mygene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mygene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mygene
   :alt:   (downloads)
.. |docker_bioconductor-mygene| image:: https://quay.io/repository/biocontainers/bioconductor-mygene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mygene
.. _`bioconductor-mygene/tags`: https://quay.io/repository/biocontainers/bioconductor-mygene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mygene";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mygene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mygene/README.html