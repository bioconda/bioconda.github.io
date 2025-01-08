:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-varianttoolsdata'
.. highlight: bash

bioconductor-varianttoolsdata
=============================

.. conda:recipe:: bioconductor-varianttoolsdata
   :replaces_section_title:
   :noindex:

   Data for the VariantTools tutorial

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/VariantToolsData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-varianttoolsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttoolsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varianttoolsdata/meta.yaml>`_

   Data from the sequencing of a 50\/50 mixture of HapMap trio samples NA12878 \(CEU\) and NA19240 \(YRI\)\, subset to the TP53 region.


.. conda:package:: bioconductor-varianttoolsdata

   |downloads_bioconductor-varianttoolsdata| |docker_bioconductor-varianttoolsdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
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

      mamba install bioconductor-varianttoolsdata

   and update with::

      mamba update bioconductor-varianttoolsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-varianttoolsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-varianttoolsdata:<tag>

   (see `bioconductor-varianttoolsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-varianttoolsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-varianttoolsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-varianttoolsdata
   :alt:   (downloads)
.. |docker_bioconductor-varianttoolsdata| image:: https://quay.io/repository/biocontainers/bioconductor-varianttoolsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-varianttoolsdata
.. _`bioconductor-varianttoolsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-varianttoolsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-varianttoolsdata";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-varianttoolsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-varianttoolsdata/README.html