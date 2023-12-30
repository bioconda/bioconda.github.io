:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fishalyser'
.. highlight: bash

bioconductor-fishalyser
=======================

.. conda:recipe:: bioconductor-fishalyser
   :replaces_section_title:
   :noindex:

   FISHalyseR a package for automated FISH quantification

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/FISHalyseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fishalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fishalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fishalyser/meta.yaml>`_
   :links: biotools: :biotools:`fishalyser`, doi: :doi:`10.1038/nmeth.3252`

   FISHalyseR provides functionality to process and analyse digital cell culture images\, in particular to quantify FISH probes within nuclei. Furthermore\, it extract the spatial location of each nucleus as well as each probe enabling spatial co\-localisation analysis.


.. conda:package:: bioconductor-fishalyser

   |downloads_bioconductor-fishalyser| |docker_bioconductor-fishalyser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-fishalyser

   and update with::

      mamba update bioconductor-fishalyser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fishalyser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fishalyser:<tag>

   (see `bioconductor-fishalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fishalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fishalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fishalyser
   :alt:   (downloads)
.. |docker_bioconductor-fishalyser| image:: https://quay.io/repository/biocontainers/bioconductor-fishalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fishalyser
.. _`bioconductor-fishalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-fishalyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fishalyser";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fishalyser/README.html