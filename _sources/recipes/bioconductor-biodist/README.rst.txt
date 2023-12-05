:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodist'
.. highlight: bash

bioconductor-biodist
====================

.. conda:recipe:: bioconductor-biodist
   :replaces_section_title:
   :noindex:

   Different distance measures

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bioDist.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biodist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodist/meta.yaml>`_
   :links: biotools: :biotools:`biodist`, doi: :doi:`10.1038/nmeth.3252`

   A collection of software tools for calculating distance measures.


.. conda:package:: bioconductor-biodist

   |downloads_bioconductor-biodist| |docker_bioconductor-biodist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-biodist

   and update with::

      mamba update bioconductor-biodist

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodist:<tag>

   (see `bioconductor-biodist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodist
   :alt:   (downloads)
.. |docker_bioconductor-biodist| image:: https://quay.io/repository/biocontainers/bioconductor-biodist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodist
.. _`bioconductor-biodist/tags`: https://quay.io/repository/biocontainers/bioconductor-biodist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodist";
        var versions = ["1.74.0","1.72.0","1.70.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodist/README.html