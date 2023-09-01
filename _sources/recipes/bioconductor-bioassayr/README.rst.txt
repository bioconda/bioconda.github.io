:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioassayr'
.. highlight: bash

bioconductor-bioassayr
======================

.. conda:recipe:: bioconductor-bioassayr
   :replaces_section_title:
   :noindex:

   Cross\-target analysis of small molecule bioactivity

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bioassayR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioassayr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioassayr/meta.yaml>`_

   bioassayR is a computational tool that enables simultaneous analysis of thousands of bioassay experiments performed over a diverse set of compounds and biological targets. Unique features include support for large\-scale cross\-target analyses of both public and custom bioassays\, generation of high throughput screening fingerprints \(HTSFPs\)\, and an optional preloaded database that provides access to a substantial portion of publicly available bioactivity data.


.. conda:package:: bioconductor-bioassayr

   |downloads_bioconductor-bioassayr| |docker_bioconductor-bioassayr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.2-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.2-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-chemminer: ``>=3.52.0,<3.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-matrix: 
   :depends r-rjson: 
   :depends r-rsqlite: ``>=1.0.0``
   :depends r-xml: 
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

      mamba install bioconductor-bioassayr

   and update with::

      mamba update bioconductor-bioassayr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bioassayr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioassayr:<tag>

   (see `bioconductor-bioassayr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioassayr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioassayr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioassayr
   :alt:   (downloads)
.. |docker_bioconductor-bioassayr| image:: https://quay.io/repository/biocontainers/bioconductor-bioassayr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioassayr
.. _`bioconductor-bioassayr/tags`: https://quay.io/repository/biocontainers/bioconductor-bioassayr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioassayr";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioassayr/README.html