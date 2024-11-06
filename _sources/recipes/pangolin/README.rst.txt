:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin'
.. highlight: bash

pangolin
========

.. conda:recipe:: pangolin
   :replaces_section_title:
   :noindex:

   Phylogenetic Assignment of Named Global Outbreak LINeages

   :homepage: https://github.com/cov-lineages/pangolin
   :license: GPL-3.0-only
   :recipe: /`pangolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`pangolin`

   


.. conda:package:: pangolin

   |downloads_pangolin| |docker_pangolin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.1-0</code>,  <code>4.3-2</code>,  <code>4.3-1</code>,  <code>4.3-0</code>,  <code>4.2-1</code>,  <code>4.2-0</code>,  <code>4.1.3-0</code>,  <code>4.1.2-2</code>,  <code>4.1.2-1</code>,  </span></summary>
      

      ``4.3.1-0``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``,  ``4.2-1``,  ``4.2-0``,  ``4.1.3-0``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.6-1``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-1``,  ``4.0.2-0``,  ``4.0.1-0``,  ``3.1.20-0``,  ``3.1.19-0``,  ``3.1.18-0``,  ``3.1.17-1``,  ``3.1.17-0``,  ``3.1.16-2``,  ``3.1.16-1``,  ``3.1.16-0``,  ``3.1.15-0``,  ``3.1.14-1``,  ``3.1.14-0``,  ``3.1.11-2``,  ``3.1.11-1``,  ``3.1.11-0``,  ``3.1.10-0``,  ``3.1.9-0``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.0.5-0``,  ``3.0.3-0``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4-0``,  ``2.3.8-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.11-0``,  ``2.1.10-1``,  ``2.1.10-0``,  ``2.1.7-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.11-0``,  ``1.1.5-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.74``
   :depends conda: 
   :depends constellations: ``>=0.0.15``
   :depends git: 
   :depends git-lfs: 
   :depends gofasta: 
   :depends joblib: ``>=0.11``
   :depends minimap2: ``>=2.16``
   :depends pandas: ``>=1.0.1``
   :depends pangolin-data: ``>=1.2.133.2``
   :depends pulp: ``>=2``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.23.1,<1.3.0``
   :depends scorpio: ``>=0.3.12``
   :depends snakemake-minimal: ``>=5.13,!=7.30.1,<8``
   :depends ucsc-fatovcf: ``>=426``
   :depends usher: ``>=0.6.2``
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

      mamba install pangolin

   and update with::

      mamba update pangolin

  To create a new environment, run::

      mamba create --name myenvname pangolin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangolin:<tag>

   (see `pangolin/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolin| image:: https://img.shields.io/conda/dn/bioconda/pangolin.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin
   :alt:   (downloads)
.. |docker_pangolin| image:: https://quay.io/repository/biocontainers/pangolin/status
   :target: https://quay.io/repository/biocontainers/pangolin
.. _`pangolin/tags`: https://quay.io/repository/biocontainers/pangolin?tab=tags


.. raw:: html

    <script>
        var package = "pangolin";
        var versions = ["4.3.1","4.3","4.3","4.3","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin/README.html