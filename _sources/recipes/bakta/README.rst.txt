:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakta'
.. highlight: bash

bakta
=====

.. conda:recipe:: bakta
   :replaces_section_title:
   :noindex:

   Rapid \& standardized annotation of bacterial genomes \& plasmids.

   :homepage: https://github.com/oschwengers/bakta
   :license: GPL / GPLv3
   :recipe: /`bakta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta/meta.yaml>`_
   :links: biotools: :biotools:`bakta`

   


.. conda:package:: bakta

   |downloads_bakta| |docker_bakta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.5-0</code>,  <code>0.4-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: ``>=1.2.38``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.7.1``
   :depends diamond: ``>=2.0.6``
   :depends hmmer: ``>=3.3.1``
   :depends infernal: ``>=1.1.4``
   :depends ncbi-amrfinderplus: ``>=3.10.1``
   :depends piler-cr: 
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3``
   :depends requests: ``>=2.25.1``
   :depends trnascan-se: ``>=2.0.6``
   :depends xopen: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bakta

   and update with::

      conda update bakta

   or use the docker container::

      docker pull quay.io/biocontainers/bakta:<tag>

   (see `bakta/tags`_ for valid values for ``<tag>``)


.. |downloads_bakta| image:: https://img.shields.io/conda/dn/bioconda/bakta.svg?style=flat
   :target: https://anaconda.org/bioconda/bakta
   :alt:   (downloads)
.. |docker_bakta| image:: https://quay.io/repository/biocontainers/bakta/status
   :target: https://quay.io/repository/biocontainers/bakta
.. _`bakta/tags`: https://quay.io/repository/biocontainers/bakta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakta/README.html