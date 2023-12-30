:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pics'
.. highlight: bash

bioconductor-pics
=================

.. conda:recipe:: bioconductor-pics
   :replaces_section_title:
   :noindex:

   Probabilistic inference of ChIP\-seq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PICS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pics/meta.yaml>`_
   :links: biotools: :biotools:`pics`

   Probabilistic inference of ChIP\-Seq using an empirical Bayes mixture model approach.


.. conda:package:: bioconductor-pics

   |downloads_bioconductor-pics| |docker_bioconductor-pics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.38.0-2</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  </span></summary>
      

      ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.38.0-2``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-pics

   and update with::

      mamba update bioconductor-pics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pics:<tag>

   (see `bioconductor-pics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pics
   :alt:   (downloads)
.. |docker_bioconductor-pics| image:: https://quay.io/repository/biocontainers/bioconductor-pics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pics
.. _`bioconductor-pics/tags`: https://quay.io/repository/biocontainers/bioconductor-pics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pics";
        var versions = ["2.46.0","2.44.0","2.42.0","2.42.0","2.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pics/README.html