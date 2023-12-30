:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimed'
.. highlight: bash

bioconductor-multimed
=====================

.. conda:recipe:: bioconductor-multimed
   :replaces_section_title:
   :noindex:

   Testing multiple biological mediators simultaneously

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MultiMed.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-multimed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed/meta.yaml>`_
   :links: biotools: :biotools:`multimed`, doi: :doi:`10.1093/bioinformatics/btt633`

   Implements methods for testing multiple mediators


.. conda:package:: bioconductor-multimed

   |downloads_bioconductor-multimed| |docker_bioconductor-multimed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-multimed

   and update with::

      mamba update bioconductor-multimed

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multimed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multimed:<tag>

   (see `bioconductor-multimed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multimed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimed
   :alt:   (downloads)
.. |docker_bioconductor-multimed| image:: https://quay.io/repository/biocontainers/bioconductor-multimed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimed
.. _`bioconductor-multimed/tags`: https://quay.io/repository/biocontainers/bioconductor-multimed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimed";
        var versions = ["2.24.0","2.24.0","2.22.0","2.20.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimed/README.html