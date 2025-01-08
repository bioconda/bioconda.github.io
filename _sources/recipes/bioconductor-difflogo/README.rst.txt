:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-difflogo'
.. highlight: bash

bioconductor-difflogo
=====================

.. conda:recipe:: bioconductor-difflogo
   :replaces_section_title:
   :noindex:

   DiffLogo\: A comparative visualisation of biooligomer motifs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DiffLogo.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-difflogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo/meta.yaml>`_

   DiffLogo is an easy\-to\-use tool to visualize motif differences.


.. conda:package:: bioconductor-difflogo

   |downloads_bioconductor-difflogo| |docker_bioconductor-difflogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cba: 
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

      mamba install bioconductor-difflogo

   and update with::

      mamba update bioconductor-difflogo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-difflogo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-difflogo:<tag>

   (see `bioconductor-difflogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-difflogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-difflogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-difflogo
   :alt:   (downloads)
.. |docker_bioconductor-difflogo| image:: https://quay.io/repository/biocontainers/bioconductor-difflogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-difflogo
.. _`bioconductor-difflogo/tags`: https://quay.io/repository/biocontainers/bioconductor-difflogo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-difflogo";
        var versions = ["2.30.0","2.26.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-difflogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-difflogo/README.html