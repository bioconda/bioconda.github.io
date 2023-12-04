:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weaver'
.. highlight: bash

bioconductor-weaver
===================

.. conda:recipe:: bioconductor-weaver
   :replaces_section_title:
   :noindex:

   Tools and extensions for processing Sweave documents

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/weaver.html
   :license: GPL-2
   :recipe: /`bioconductor-weaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weaver/meta.yaml>`_
   :links: biotools: :biotools:`weaver`, doi: :doi:`10.1038/nmeth.3252`

   This package provides enhancements on the Sweave\(\) function in the base package.  In particular a facility for caching code chunk results is included.


.. conda:package:: bioconductor-weaver

   |downloads_bioconductor-weaver| |docker_bioconductor-weaver|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-codetools: 
   :depends r-digest: 
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

      mamba install bioconductor-weaver

   and update with::

      mamba update bioconductor-weaver

  To create a new environment, run::

      mamba create --name myenvname bioconductor-weaver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-weaver:<tag>

   (see `bioconductor-weaver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-weaver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weaver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weaver
   :alt:   (downloads)
.. |docker_bioconductor-weaver| image:: https://quay.io/repository/biocontainers/bioconductor-weaver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weaver
.. _`bioconductor-weaver/tags`: https://quay.io/repository/biocontainers/bioconductor-weaver?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-weaver";
        var versions = ["1.68.0","1.66.0","1.64.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weaver/README.html