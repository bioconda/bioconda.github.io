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

         <details><summary><span class="truncated-version-list"><code>3.1.9-0</code>,  <code>3.1.8-0</code>,  <code>3.1.7-0</code>,  <code>3.1.6-0</code>,  <code>3.1.5-0</code>,  <code>3.1.4-0</code>,  <code>3.1.3-0</code>,  <code>3.1.2-0</code>,  <code>3.0.5-0</code>,  </span></summary>
      

      ``3.1.9-0``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.0.5-0``,  ``3.0.3-0``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4-0``,  ``2.3.8-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.11-0``,  ``2.1.10-1``,  ``2.1.10-0``,  ``2.1.7-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.11-0``,  ``1.1.5-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.74``
   :depends constellations: ``>=0.0.11``
   :depends gofasta: 
   :depends joblib: ``>=0.11``
   :depends minimap2: ``>=2.16``
   :depends pandas: ``>=1.0.1``
   :depends pango-designation: ``>=1.2.54``
   :depends pangolearn: ``>=2021.07.28``
   :depends pulp: ``>=2``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``0.23.1``
   :depends scorpio: ``>=0.3.12``
   :depends snakemake-minimal: ``>=5.13``
   :depends usher: ``>=0.3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pangolin

   and update with::

      conda update pangolin

   or use the docker container::

      docker pull quay.io/biocontainers/pangolin:<tag>

   (see `pangolin/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolin| image:: https://img.shields.io/conda/dn/bioconda/pangolin.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin
   :alt:   (downloads)
.. |docker_pangolin| image:: https://quay.io/repository/biocontainers/pangolin/status
   :target: https://quay.io/repository/biocontainers/pangolin
.. _`pangolin/tags`: https://quay.io/repository/biocontainers/pangolin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin/README.html