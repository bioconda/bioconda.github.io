:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scale4c'
.. highlight: bash

bioconductor-scale4c
====================

.. conda:recipe:: bioconductor-scale4c
   :replaces_section_title:
   :noindex:

   Scale4C\: an R\/Bioconductor package for scale\-space transformation of 4C\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Scale4C.html
   :license: LGPL-3
   :recipe: /`bioconductor-scale4c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scale4c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scale4c/meta.yaml>`_

   Scale4C is an R\/Bioconductor package for scale\-space transformation and visualization of 4C\-seq data. The scale\-space transformation is a multi\-scale visualization technique to transform a 2D signal \(e.g. 4C\-seq reads on a genomic interval of choice\) into a tesselation in the scale space \(2D\, genomic position x scale factor\) by applying different smoothing kernels \(Gauss\, with increasing sigma\). This transformation allows for explorative analysis and comparisons of the data\'s structure with other samples.


.. conda:package:: bioconductor-scale4c

   |downloads_bioconductor-scale4c| |docker_bioconductor-scale4c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-smoothie: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scale4c

   and update with::

      mamba update bioconductor-scale4c

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scale4c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scale4c:<tag>

   (see `bioconductor-scale4c/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scale4c| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scale4c.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scale4c
   :alt:   (downloads)
.. |docker_bioconductor-scale4c| image:: https://quay.io/repository/biocontainers/bioconductor-scale4c/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scale4c
.. _`bioconductor-scale4c/tags`: https://quay.io/repository/biocontainers/bioconductor-scale4c?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scale4c";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scale4c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scale4c/README.html