:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayquality'
.. highlight: bash

bioconductor-arrayquality
=========================

.. conda:recipe:: bioconductor-arrayquality
   :replaces_section_title:
   :noindex:

   Assessing array quality on spotted arrays

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/arrayQuality.html
   :license: LGPL
   :recipe: /`bioconductor-arrayquality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality/meta.yaml>`_
   :links: biotools: :biotools:`arrayquality`, doi: :doi:`10.1093/bioinformatics/btn647`

   Functions for performing print\-run and array level quality assessment.


.. conda:package:: bioconductor-arrayquality

   |downloads_bioconductor-arrayquality| |docker_bioconductor-arrayquality|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-marray: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gridbase: 
   :depends r-hexbin: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-arrayquality

   and update with::

      mamba update bioconductor-arrayquality

  To create a new environment, run::

      mamba create --name myenvname bioconductor-arrayquality

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayquality:<tag>

   (see `bioconductor-arrayquality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayquality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayquality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayquality
   :alt:   (downloads)
.. |docker_bioconductor-arrayquality| image:: https://quay.io/repository/biocontainers/bioconductor-arrayquality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayquality
.. _`bioconductor-arrayquality/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayquality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayquality";
        var versions = ["1.78.0","1.76.0","1.72.0","1.70.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html