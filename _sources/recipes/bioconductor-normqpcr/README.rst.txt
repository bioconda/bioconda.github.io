:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normqpcr'
.. highlight: bash

bioconductor-normqpcr
=====================

.. conda:recipe:: bioconductor-normqpcr
   :replaces_section_title:
   :noindex:

   Functions for normalisation of RT\-qPCR data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NormqPCR.html
   :license: LGPL-3
   :recipe: /`bioconductor-normqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normqpcr/meta.yaml>`_

   Functions for the selection of optimal reference genes and the normalisation of real\-time quantitative PCR data.


.. conda:package:: bioconductor-normqpcr

   |downloads_bioconductor-normqpcr| |docker_bioconductor-normqpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-readqpcr: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-qpcr: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-normqpcr

   and update with::

      mamba update bioconductor-normqpcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-normqpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normqpcr:<tag>

   (see `bioconductor-normqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normqpcr
   :alt:   (downloads)
.. |docker_bioconductor-normqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-normqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normqpcr
.. _`bioconductor-normqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-normqpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-normqpcr";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normqpcr/README.html