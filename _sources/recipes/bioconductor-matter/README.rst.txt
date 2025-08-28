:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matter'
.. highlight: bash

bioconductor-matter
===================

.. conda:recipe:: bioconductor-matter
   :replaces_section_title:
   :noindex:

   Out\-of\-core statistical computing and signal processing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/matter.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-matter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matter/meta.yaml>`_
   :links: biotools: :biotools:`matter`, doi: :doi:`10.1038/nmeth.3252`

   Toolbox for larger\-than\-memory scientific computing and visualization\, providing efficient out\-of\-core data structures using files or shared memory\, for dense and sparse vectors\, matrices\, and arrays\, with applications to nonuniformly sampled signals and images.


.. conda:package:: bioconductor-matter

   |downloads_bioconductor-matter| |docker_bioconductor-matter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-digest: 
   :depends r-irlba: 
   :depends r-matrix: 
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

      mamba install bioconductor-matter

   and update with::

      mamba update bioconductor-matter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-matter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matter:<tag>

   (see `bioconductor-matter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matter
   :alt:   (downloads)
.. |docker_bioconductor-matter| image:: https://quay.io/repository/biocontainers/bioconductor-matter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matter
.. _`bioconductor-matter/tags`: https://quay.io/repository/biocontainers/bioconductor-matter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matter";
        var versions = ["2.8.0","2.4.0","2.2.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matter/README.html