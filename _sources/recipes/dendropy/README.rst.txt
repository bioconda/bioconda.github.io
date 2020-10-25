:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dendropy'
.. highlight: bash

dendropy
========

.. conda:recipe:: dendropy
   :replaces_section_title:
   :noindex:

   A Python library for phylogenetics and phylogenetic computing\: reading\, writing\, simulation\, processing and manipulation of phylogenetic trees \(phylogenies\) and characters.

   :homepage: http://packages.python.org/DendroPy/
   :license: BSD License
   :recipe: /`dendropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dendropy/meta.yaml>`_

   


.. conda:package:: dendropy

   |downloads_dendropy| |docker_dendropy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.1-0</code>,  <code>4.4.0-2</code>,  <code>4.4.0-1</code>,  <code>4.4.0-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.3-0</code>,  <code>3.12.3-1</code>,  </span></summary>
      

      ``4.5.1-0``,  ``4.4.0-2``,  ``4.4.0-1``,  ``4.4.0-0``,  ``4.2.0-2``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``3.12.3-1``,  ``3.12.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dendropy

   and update with::

      conda update dendropy

   or use the docker container::

      docker pull quay.io/biocontainers/dendropy:<tag>

   (see `dendropy/tags`_ for valid values for ``<tag>``)


.. |downloads_dendropy| image:: https://img.shields.io/conda/dn/bioconda/dendropy.svg?style=flat
   :target: https://anaconda.org/bioconda/dendropy
   :alt:   (downloads)
.. |docker_dendropy| image:: https://quay.io/repository/biocontainers/dendropy/status
   :target: https://quay.io/repository/biocontainers/dendropy
.. _`dendropy/tags`: https://quay.io/repository/biocontainers/dendropy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dendropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dendropy/README.html