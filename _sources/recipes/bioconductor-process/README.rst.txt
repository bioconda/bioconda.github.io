:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-process'
.. highlight: bash

bioconductor-process
====================

.. conda:recipe:: bioconductor-process
   :replaces_section_title:
   :noindex:

   Ciphergen SELDI\-TOF Processing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PROcess.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-process <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-process/meta.yaml>`_
   :links: biotools: :biotools:`process`, doi: :doi:`10.1038/nmeth.3252`

   A package for processing protein mass spectrometry data.


.. conda:package:: bioconductor-process

   |downloads_bioconductor-process| |docker_bioconductor-process|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.1-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-icens: ``>=1.78.0,<1.79.0``
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

      mamba install bioconductor-process

   and update with::

      mamba update bioconductor-process

  To create a new environment, run::

      mamba create --name myenvname bioconductor-process

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-process:<tag>

   (see `bioconductor-process/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-process| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-process.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-process
   :alt:   (downloads)
.. |docker_bioconductor-process| image:: https://quay.io/repository/biocontainers/bioconductor-process/status
   :target: https://quay.io/repository/biocontainers/bioconductor-process
.. _`bioconductor-process/tags`: https://quay.io/repository/biocontainers/bioconductor-process?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-process";
        var versions = ["1.82.0","1.78.0","1.76.0","1.74.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-process/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-process/README.html