:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mtbls2'
.. highlight: bash

bioconductor-mtbls2
===================

.. conda:recipe:: bioconductor-mtbls2
   :replaces_section_title:
   :noindex:

   MetaboLights MTBLS2\: Comparative LC\/MS\-based profiling of silver nitrate\-treated Arabidopsis thaliana leaves of wild\-type and cyp79B2 cyp79B3 double knockout plants. Böttcher et al. \(2004\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/mtbls2.html
   :license: CC0
   :recipe: /`bioconductor-mtbls2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtbls2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtbls2/meta.yaml>`_

   Indole\-3\-acetaldoxime \(IAOx\) represents an early intermediate of the biosynthesis of a variety of indolic secondary metabolites including the phytoanticipin indol\-3\-ylmethyl glucosinolate and the phytoalexin camalexin \(3\-thiazol\-2\'\-yl\-indole\). Arabidopsis thaliana cyp79B2 cyp79B3 double knockout plants are completely impaired in the conversion of tryptophan to indole\-3\-acetaldoxime and do not accumulate IAOx\-derived metabolites any longer. Consequently\, comparative analysis of wild\-type and cyp79B2 cyp79B3 plant lines has the potential to explore the complete range of IAOx\-derived indolic secondary metabolites.


.. conda:package:: bioconductor-mtbls2

   |downloads_bioconductor-mtbls2| |docker_bioconductor-mtbls2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.19.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.19.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
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

      mamba install bioconductor-mtbls2

   and update with::

      mamba update bioconductor-mtbls2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mtbls2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mtbls2:<tag>

   (see `bioconductor-mtbls2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mtbls2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mtbls2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mtbls2
   :alt:   (downloads)
.. |docker_bioconductor-mtbls2| image:: https://quay.io/repository/biocontainers/bioconductor-mtbls2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mtbls2
.. _`bioconductor-mtbls2/tags`: https://quay.io/repository/biocontainers/bioconductor-mtbls2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mtbls2";
        var versions = ["1.30.0","1.27.0","1.24.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mtbls2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mtbls2/README.html