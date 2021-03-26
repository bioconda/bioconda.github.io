:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vphaser2'
.. highlight: bash

vphaser2
========

.. conda:recipe:: vphaser2
   :replaces_section_title:
   :noindex:

   V\-Phaser 2 is a tool to call variants in genetically heterogeneous populations from ultra\-deep sequence data

   :homepage: https://www.broadinstitute.org/scientific-community/science/projects/viral-genomics/v-phaser-2
   :license: single user license for academic non-commercial research purposes only
   :recipe: /`vphaser2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2/meta.yaml>`_

   


.. conda:package:: vphaser2

   |downloads_vphaser2| |docker_vphaser2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-1</code>,  </span></summary>
      

      ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends llvm-openmp: ``>=11.1.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vphaser2

   and update with::

      conda update vphaser2

   or use the docker container::

      docker pull quay.io/biocontainers/vphaser2:<tag>

   (see `vphaser2/tags`_ for valid values for ``<tag>``)


.. |downloads_vphaser2| image:: https://img.shields.io/conda/dn/bioconda/vphaser2.svg?style=flat
   :target: https://anaconda.org/bioconda/vphaser2
   :alt:   (downloads)
.. |docker_vphaser2| image:: https://quay.io/repository/biocontainers/vphaser2/status
   :target: https://quay.io/repository/biocontainers/vphaser2
.. _`vphaser2/tags`: https://quay.io/repository/biocontainers/vphaser2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vphaser2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vphaser2/README.html