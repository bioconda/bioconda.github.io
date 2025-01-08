:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcrma'
.. highlight: bash

bioconductor-gcrma
==================

.. conda:recipe:: bioconductor-gcrma
   :replaces_section_title:
   :noindex:

   Background Adjustment Using Sequence Information

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gcrma.html
   :license: LGPL
   :recipe: /`bioconductor-gcrma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrma/meta.yaml>`_
   :links: biotools: :biotools:`gcrma`, doi: :doi:`10.1186/1471-2105-9-452`

   Background adjustment using sequence information


.. conda:package:: bioconductor-gcrma

   |downloads_bioconductor-gcrma| |docker_bioconductor-gcrma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.78.0-0</code>,  <code>2.74.0-0</code>,  <code>2.72.0-0</code>,  <code>2.70.0-1</code>,  <code>2.70.0-0</code>,  <code>2.66.0-2</code>,  <code>2.66.0-1</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  </span></summary>
      

      ``2.78.0-0``,  ``2.74.0-0``,  ``2.72.0-0``,  ``2.70.0-1``,  ``2.70.0-0``,  ``2.66.0-2``,  ``2.66.0-1``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
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

      mamba install bioconductor-gcrma

   and update with::

      mamba update bioconductor-gcrma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gcrma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcrma:<tag>

   (see `bioconductor-gcrma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcrma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcrma
   :alt:   (downloads)
.. |docker_bioconductor-gcrma| image:: https://quay.io/repository/biocontainers/bioconductor-gcrma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrma
.. _`bioconductor-gcrma/tags`: https://quay.io/repository/biocontainers/bioconductor-gcrma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gcrma";
        var versions = ["2.78.0","2.74.0","2.72.0","2.70.0","2.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrma/README.html