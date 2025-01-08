:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ivas'
.. highlight: bash

bioconductor-ivas
=================

.. conda:recipe:: bioconductor-ivas
   :replaces_section_title:
   :noindex:

   Identification of genetic Variants affecting Alternative Splicing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IVAS.html
   :license: GPL-2
   :recipe: /`bioconductor-ivas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivas/meta.yaml>`_
   :links: biotools: :biotools:`ivas`, doi: :doi:`10.1007/s13258-016-0466-7`

   Identification of genetic variants affecting alternative splicing.


.. conda:package:: bioconductor-ivas

   |downloads_bioconductor-ivas| |docker_bioconductor-ivas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.98.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-matrix: 
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

      mamba install bioconductor-ivas

   and update with::

      mamba update bioconductor-ivas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ivas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ivas:<tag>

   (see `bioconductor-ivas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ivas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ivas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ivas
   :alt:   (downloads)
.. |docker_bioconductor-ivas| image:: https://quay.io/repository/biocontainers/bioconductor-ivas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ivas
.. _`bioconductor-ivas/tags`: https://quay.io/repository/biocontainers/bioconductor-ivas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ivas";
        var versions = ["2.26.0","2.22.0","2.20.0","2.18.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ivas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ivas/README.html