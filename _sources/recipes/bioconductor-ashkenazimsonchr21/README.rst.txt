:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ashkenazimsonchr21'
.. highlight: bash

bioconductor-ashkenazimsonchr21
===============================

.. conda:recipe:: bioconductor-ashkenazimsonchr21
   :replaces_section_title:
   :noindex:

   Annotated variants on the chromosome 21\, human genome 19\, Ashkenazim Trio son sample

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/AshkenazimSonChr21.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ashkenazimsonchr21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ashkenazimsonchr21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ashkenazimsonchr21/meta.yaml>`_

   SonVariantsChr21 is a dataset of annotated genomic variants coming from Complete Genomics whole genome sequencing. Data comes from GIAB project\, Ashkenazim Trio\, sample HG002 run 1. Both vcf and annotated data frame are provided.


.. conda:package:: bioconductor-ashkenazimsonchr21

   |downloads_bioconductor-ashkenazimsonchr21| |docker_bioconductor-ashkenazimsonchr21|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-ashkenazimsonchr21

   and update with::

      mamba update bioconductor-ashkenazimsonchr21

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ashkenazimsonchr21

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ashkenazimsonchr21:<tag>

   (see `bioconductor-ashkenazimsonchr21/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ashkenazimsonchr21| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ashkenazimsonchr21.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ashkenazimsonchr21
   :alt:   (downloads)
.. |docker_bioconductor-ashkenazimsonchr21| image:: https://quay.io/repository/biocontainers/bioconductor-ashkenazimsonchr21/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ashkenazimsonchr21
.. _`bioconductor-ashkenazimsonchr21/tags`: https://quay.io/repository/biocontainers/bioconductor-ashkenazimsonchr21?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ashkenazimsonchr21";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ashkenazimsonchr21/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ashkenazimsonchr21/README.html