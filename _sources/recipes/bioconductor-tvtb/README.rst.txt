:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tvtb'
.. highlight: bash

bioconductor-tvtb
=================

.. conda:recipe:: bioconductor-tvtb
   :replaces_section_title:
   :noindex:

   TVTB\: The VCF Tool Box

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TVTB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tvtb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tvtb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tvtb/meta.yaml>`_

   The package provides S4 classes and methods to filter\, summarise and visualise genetic variation data stored in VCF files. In particular\, the package extends the FilterRules class \(S4Vectors package\) to define news classes of filter rules applicable to the various slots of VCF objects. Functionalities are integrated and demonstrated in a Shiny web\-application\, the Shiny Variant Explorer \(tSVE\).


.. conda:package:: bioconductor-tvtb

   |downloads_bioconductor-tvtb| |docker_bioconductor-tvtb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-ensemblvep: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
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

      mamba install bioconductor-tvtb

   and update with::

      mamba update bioconductor-tvtb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tvtb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tvtb:<tag>

   (see `bioconductor-tvtb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tvtb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tvtb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tvtb
   :alt:   (downloads)
.. |docker_bioconductor-tvtb| image:: https://quay.io/repository/biocontainers/bioconductor-tvtb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tvtb
.. _`bioconductor-tvtb/tags`: https://quay.io/repository/biocontainers/bioconductor-tvtb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tvtb";
        var versions = ["1.28.0","1.26.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tvtb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tvtb/README.html