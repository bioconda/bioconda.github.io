:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timecourse'
.. highlight: bash

bioconductor-timecourse
=======================

.. conda:recipe:: bioconductor-timecourse
   :replaces_section_title:
   :noindex:

   Statistical Analysis for Developmental Microarray Time Course Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/timecourse.html
   :license: LGPL
   :recipe: /`bioconductor-timecourse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecourse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timecourse/meta.yaml>`_
   :links: biotools: :biotools:`timecourse`, doi: :doi:`10.1038/nmeth.3252`

   Functions for data analysis and graphical displays for developmental microarray time course data.


.. conda:package:: bioconductor-timecourse

   |downloads_bioconductor-timecourse| |docker_bioconductor-timecourse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-marray: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-timecourse

   and update with::

      mamba update bioconductor-timecourse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-timecourse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timecourse:<tag>

   (see `bioconductor-timecourse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timecourse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timecourse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timecourse
   :alt:   (downloads)
.. |docker_bioconductor-timecourse| image:: https://quay.io/repository/biocontainers/bioconductor-timecourse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timecourse
.. _`bioconductor-timecourse/tags`: https://quay.io/repository/biocontainers/bioconductor-timecourse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timecourse";
        var versions = ["1.72.0","1.70.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timecourse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timecourse/README.html