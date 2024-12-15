:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpls'
.. highlight: bash

bioconductor-gpls
=================

.. conda:recipe:: bioconductor-gpls
   :replaces_section_title:
   :noindex:

   Classification using generalized partial least squares

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gpls.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gpls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpls/meta.yaml>`_
   :links: biotools: :biotools:`gpls`, doi: :doi:`10.1198/106186005X47697`

   Classification using generalized partial least squares for two\-group and multi\-group \(more than 2 group\) classification.


.. conda:package:: bioconductor-gpls

   |downloads_bioconductor-gpls| |docker_bioconductor-gpls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-gpls

   and update with::

      mamba update bioconductor-gpls

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gpls

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpls:<tag>

   (see `bioconductor-gpls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpls
   :alt:   (downloads)
.. |docker_bioconductor-gpls| image:: https://quay.io/repository/biocontainers/bioconductor-gpls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpls
.. _`bioconductor-gpls/tags`: https://quay.io/repository/biocontainers/bioconductor-gpls?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpls";
        var versions = ["1.78.0","1.74.0","1.74.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpls/README.html