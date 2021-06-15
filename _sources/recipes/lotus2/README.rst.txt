:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lotus2'
.. highlight: bash

lotus2
======

.. conda:recipe:: lotus2
   :replaces_section_title:
   :noindex:

   LotuS2 is a lightweight complete 16S\/18S\/ITS pipeline

   :homepage: http://lotus2.earlham.ac.uk/
   :developer docs: https://github.com/hildebra/lotus2/
   :license: GPL-3.0-or-later
   :recipe: /`lotus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2/meta.yaml>`_

   


.. conda:package:: lotus2

   |downloads_lotus2| |docker_lotus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.09.2-0</code>,  <code>2.09.1-0</code>,  <code>2.09-0</code>,  <code>2.08-0</code>,  <code>2.07-0</code>,  <code>2.06-0</code>,  <code>2.05.1-0</code>,  <code>2.04-1</code>,  <code>2.04-0</code>,  </span></summary>
      

      ``2.09.2-0``,  ``2.09.1-0``,  ``2.09-0``,  ``2.08-0``,  ``2.07-0``,  ``2.06-0``,  ``2.05.1-0``,  ``2.04-1``,  ``2.04-0``,  ``2.02-0``,  ``2.01-1``,  ``2.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dada2: 
   :depends bioconductor-phyloseq: 
   :depends blast: 
   :depends cd-hit: 
   :depends clustalo: 
   :depends fasttree: 
   :depends infernal: 
   :depends iqtree: 
   :depends itsx: 
   :depends lambda: ``<2``
   :depends lca: 
   :depends mafft: 
   :depends minimap2: 
   :depends perl: 
   :depends perl-getopt-long: 
   :depends r-dplyr: 
   :depends rdp_classifier: 
   :depends rtk: 
   :depends sdm: ``1.87``
   :depends swarm: 
   :depends unzip: 
   :depends vsearch: 
   :depends wget: 
   :depends zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lotus2

   and update with::

      conda update lotus2

   or use the docker container::

      docker pull quay.io/biocontainers/lotus2:<tag>

   (see `lotus2/tags`_ for valid values for ``<tag>``)


.. |downloads_lotus2| image:: https://img.shields.io/conda/dn/bioconda/lotus2.svg?style=flat
   :target: https://anaconda.org/bioconda/lotus2
   :alt:   (downloads)
.. |docker_lotus2| image:: https://quay.io/repository/biocontainers/lotus2/status
   :target: https://quay.io/repository/biocontainers/lotus2
.. _`lotus2/tags`: https://quay.io/repository/biocontainers/lotus2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lotus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lotus2/README.html