:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cat'
.. highlight: bash

cat
===

.. conda:recipe:: cat
   :replaces_section_title:
   :noindex:

   CAT\/BAT\: tool for taxonomic classification of contigs and metagenome\-assembled genomes \(MAGs\)


   :homepage: https://github.com/dutilh/CAT
   :license: MIT
   :recipe: /`cat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat/meta.yaml>`_

   


.. conda:package:: cat

   |downloads_cat| |docker_cat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2-0</code>,  <code>5.1.2-0</code>,  <code>5.1.1-0</code>,  <code>5.1-0</code>,  <code>5.0.5-0</code>,  <code>5.0.4-0</code>,  <code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  </span></summary>
      

      ``5.2-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0-0``,  ``4.6-0``,  ``4.3.3-0``,  ``4.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends diamond: 
   :depends prodigal: 
   :depends python: ``3.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cat

   and update with::

      conda update cat

   or use the docker container::

      docker pull quay.io/biocontainers/cat:<tag>

   (see `cat/tags`_ for valid values for ``<tag>``)


.. |downloads_cat| image:: https://img.shields.io/conda/dn/bioconda/cat.svg?style=flat
   :target: https://anaconda.org/bioconda/cat
   :alt:   (downloads)
.. |docker_cat| image:: https://quay.io/repository/biocontainers/cat/status
   :target: https://quay.io/repository/biocontainers/cat
.. _`cat/tags`: https://quay.io/repository/biocontainers/cat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cat/README.html