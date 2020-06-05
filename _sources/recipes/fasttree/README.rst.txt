:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasttree'
.. highlight: bash

fasttree
========

.. conda:recipe:: fasttree
   :replaces_section_title:
   :noindex:

   FastTree infers approximately\-maximum\-likelihood phylogenetic trees from alignments of nucleotide or protein sequences

   :homepage: http://www.microbesonline.org/fasttree/
   :license: GPL v2
   :recipe: /`fasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree/meta.yaml>`_
   :links: biotools: :biotools:`fasttree`, doi: :doi:`10.1093/molbev/msp077`

   


.. conda:package:: fasttree

   |downloads_fasttree| |docker_fasttree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.10-3</code>,  <code>2.1.10-2</code>,  <code>2.1.10-0</code>,  <code>2.1.9-2</code>,  <code>2.1.9-1</code>,  <code>2.1.9-0</code>,  <code>2.1.8-4</code>,  <code>2.1.8-2</code>,  <code>2.1.8-1</code>,  </span></summary>
      

      ``2.1.10-3``,  ``2.1.10-2``,  ``2.1.10-0``,  ``2.1.9-2``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-4``,  ``2.1.8-2``,  ``2.1.8-1``,  ``2.1.3-2``,  ``2.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fasttree

   and update with::

      conda update fasttree

   or use the docker container::

      docker pull quay.io/biocontainers/fasttree:<tag>

   (see `fasttree/tags`_ for valid values for ``<tag>``)


.. |downloads_fasttree| image:: https://img.shields.io/conda/dn/bioconda/fasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/fasttree
   :alt:   (downloads)
.. |docker_fasttree| image:: https://quay.io/repository/biocontainers/fasttree/status
   :target: https://quay.io/repository/biocontainers/fasttree
.. _`fasttree/tags`: https://quay.io/repository/biocontainers/fasttree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasttree/README.html