:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augur'
.. highlight: bash

augur
=====

.. conda:recipe:: augur
   :replaces_section_title:
   :noindex:

   Process pathogen genome data for the Nextstrain platform

   :homepage: https://github.com/nextstrain/augur
   :license: AGPL / AGPL-3.0
   :recipe: /`augur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur/meta.yaml>`_

   


.. conda:package:: augur

   |downloads_augur| |docker_augur|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>11.1.2-0</code>,  <code>11.1.0-0</code>,  <code>11.0.0-0</code>,  <code>10.3.0-0</code>,  <code>10.2.0-0</code>,  <code>10.1.1-0</code>,  <code>10.1.0-0</code>,  <code>10.0.4-0</code>,  <code>10.0.3-0</code>,  </span></summary>
      

      ``11.1.2-0``,  ``11.1.0-0``,  ``11.0.0-0``,  ``10.3.0-0``,  ``10.2.0-0``,  ``10.1.1-0``,  ``10.1.0-0``,  ``10.0.4-0``,  ``10.0.3-0``,  ``10.0.2-0``,  ``10.0.0-1``,  ``10.0.0-0``,  ``9.0.0-1``,  ``9.0.0-0``,  ``8.0.0-0``,  ``7.0.2-0``,  ``6.4.3-0``,  ``6.4.2-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.0-0``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.0-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``4.0.0-0``,  ``3.1.5-1``,  ``3.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: ``>=0.6.0``
   :depends biopython: ``>=1.67``
   :depends cvxopt: ``>=1.1.9,<2``
   :depends fasttree: 
   :depends iqtree: 
   :depends jsonschema: ``>=3.0.0``
   :depends mafft: 
   :depends packaging: ``>=19.2``
   :depends pandas: ``>=1.0.0,<2``
   :depends python: ``>=3.6``
   :depends raxml: 
   :depends snakemake: ``>=5.4.0``
   :depends treetime: ``>=0.7.4``
   :depends vcftools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install augur

   and update with::

      conda update augur

   or use the docker container::

      docker pull quay.io/biocontainers/augur:<tag>

   (see `augur/tags`_ for valid values for ``<tag>``)


.. |downloads_augur| image:: https://img.shields.io/conda/dn/bioconda/augur.svg?style=flat
   :target: https://anaconda.org/bioconda/augur
   :alt:   (downloads)
.. |docker_augur| image:: https://quay.io/repository/biocontainers/augur/status
   :target: https://quay.io/repository/biocontainers/augur
.. _`augur/tags`: https://quay.io/repository/biocontainers/augur?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augur/README.html