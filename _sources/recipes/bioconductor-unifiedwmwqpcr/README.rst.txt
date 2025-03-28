:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-unifiedwmwqpcr'
.. highlight: bash

bioconductor-unifiedwmwqpcr
===========================

.. conda:recipe:: bioconductor-unifiedwmwqpcr
   :replaces_section_title:
   :noindex:

   Unified Wilcoxon\-Mann Whitney Test for testing differential expression in qPCR data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/unifiedWMWqPCR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-unifiedwmwqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-unifiedwmwqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-unifiedwmwqpcr/meta.yaml>`_
   :links: biotools: :biotools:`unifiedwmwqpcr`

   This packages implements the unified Wilcoxon\-Mann\-Whitney Test for qPCR data. This modified test allows for testing differential expression in qPCR data.


.. conda:package:: bioconductor-unifiedwmwqpcr

   |downloads_bioconductor-unifiedwmwqpcr| |docker_bioconductor-unifiedwmwqpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
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

      mamba install bioconductor-unifiedwmwqpcr

   and update with::

      mamba update bioconductor-unifiedwmwqpcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-unifiedwmwqpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-unifiedwmwqpcr:<tag>

   (see `bioconductor-unifiedwmwqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-unifiedwmwqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-unifiedwmwqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-unifiedwmwqpcr
   :alt:   (downloads)
.. |docker_bioconductor-unifiedwmwqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr
.. _`bioconductor-unifiedwmwqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-unifiedwmwqpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-unifiedwmwqpcr";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-unifiedwmwqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-unifiedwmwqpcr/README.html