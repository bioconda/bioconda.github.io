:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ping'
.. highlight: bash

bioconductor-ping
=================

.. conda:recipe:: bioconductor-ping
   :replaces_section_title:
   :noindex:

   Probabilistic inference for Nucleosome Positioning with MNase\-based or Sonicated Short\-read Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PING.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ping/meta.yaml>`_
   :links: biotools: :biotools:`ping`

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.


.. conda:package:: bioconductor-ping

   |downloads_bioconductor-ping| |docker_bioconductor-ping|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.38.0-2</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-pics: ``>=2.50.0,<2.51.0``
   :depends bioconductor-pics: ``>=2.50.0,<2.51.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fda: 
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

      mamba install bioconductor-ping

   and update with::

      mamba update bioconductor-ping

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ping:<tag>

   (see `bioconductor-ping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ping
   :alt:   (downloads)
.. |docker_bioconductor-ping| image:: https://quay.io/repository/biocontainers/bioconductor-ping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ping
.. _`bioconductor-ping/tags`: https://quay.io/repository/biocontainers/bioconductor-ping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ping";
        var versions = ["2.50.0","2.46.0","2.44.0","2.42.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ping/README.html