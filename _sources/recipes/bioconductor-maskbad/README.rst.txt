:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maskbad'
.. highlight: bash

bioconductor-maskbad
====================

.. conda:recipe:: bioconductor-maskbad
   :replaces_section_title:
   :noindex:

   Masking probes with binding affinity differences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/maskBAD.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-maskbad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maskbad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maskbad/meta.yaml>`_
   :links: biotools: :biotools:`maskbad`, doi: :doi:`10.1093/bioinformatics/btp492`

   Package includes functions to analyze and mask microarray expression data.


.. conda:package:: bioconductor-maskbad

   |downloads_bioconductor-maskbad| |docker_bioconductor-maskbad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-gcrma: ``>=2.78.0,<2.79.0``
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

      mamba install bioconductor-maskbad

   and update with::

      mamba update bioconductor-maskbad

  To create a new environment, run::

      mamba create --name myenvname bioconductor-maskbad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maskbad:<tag>

   (see `bioconductor-maskbad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maskbad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maskbad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maskbad
   :alt:   (downloads)
.. |docker_bioconductor-maskbad| image:: https://quay.io/repository/biocontainers/bioconductor-maskbad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maskbad
.. _`bioconductor-maskbad/tags`: https://quay.io/repository/biocontainers/bioconductor-maskbad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maskbad";
        var versions = ["1.50.0","1.46.0","1.44.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maskbad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maskbad/README.html