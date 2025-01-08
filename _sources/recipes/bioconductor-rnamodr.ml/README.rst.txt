:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr.ml'
.. highlight: bash

bioconductor-rnamodr.ml
=======================

.. conda:recipe:: bioconductor-rnamodr.ml
   :replaces_section_title:
   :noindex:

   Detecting patterns of post\-transcriptional modifications using machine learning

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAmodR.ML.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr.ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr.ml/meta.yaml>`_

   RNAmodR.ML extend the functionality of the RNAmodR package and classical detection strategies towards detection through machine learning models. RNAmodR.ML provides classes\, functions and an example workflow to establish a detection stratedy\, which can be packaged.


.. conda:package:: bioconductor-rnamodr.ml

   |downloads_bioconductor-rnamodr.ml| |docker_bioconductor-rnamodr.ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rnamodr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ranger: 
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

      mamba install bioconductor-rnamodr.ml

   and update with::

      mamba update bioconductor-rnamodr.ml

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnamodr.ml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr.ml:<tag>

   (see `bioconductor-rnamodr.ml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr.ml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.ml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr.ml
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr.ml| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ml
.. _`bioconductor-rnamodr.ml/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr.ml?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnamodr.ml";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr.ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr.ml/README.html