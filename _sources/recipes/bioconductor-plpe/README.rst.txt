:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plpe'
.. highlight: bash

bioconductor-plpe
=================

.. conda:recipe:: bioconductor-plpe
   :replaces_section_title:
   :noindex:

   Local Pooled Error Test for Differential Expression with Paired High\-throughput Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PLPE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-plpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plpe/meta.yaml>`_
   :links: biotools: :biotools:`plpe`, doi: :doi:`10.1038/nmeth.3252`

   This package performs tests for paired high\-throughput data.


.. conda:package:: bioconductor-plpe

   |downloads_bioconductor-plpe| |docker_bioconductor-plpe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-lpe: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-plpe

   and update with::

      mamba update bioconductor-plpe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plpe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plpe:<tag>

   (see `bioconductor-plpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plpe
   :alt:   (downloads)
.. |docker_bioconductor-plpe| image:: https://quay.io/repository/biocontainers/bioconductor-plpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plpe
.. _`bioconductor-plpe/tags`: https://quay.io/repository/biocontainers/bioconductor-plpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plpe";
        var versions = ["1.62.0","1.60.0","1.58.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plpe/README.html