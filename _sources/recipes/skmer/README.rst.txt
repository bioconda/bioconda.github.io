:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skmer'
.. highlight: bash

skmer
=====

.. conda:recipe:: skmer
   :replaces_section_title:
   :noindex:

   Assembly\-free and alignment\-free tool for estimating genomic distances between genome\-skims

   :homepage: https://github.com/shahab-sarmashghi/Skmer
   :license: BSD / BSD-3-Clause
   :recipe: /`skmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer/meta.yaml>`_

   


.. conda:package:: skmer

   |downloads_skmer| |docker_skmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.2-3</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.2-3``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends kmer-jellyfish: ``2.*``
   :depends mash: ``1.1``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends seqtk: ``1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install skmer

   and update with::

      conda update skmer

   or use the docker container::

      docker pull quay.io/biocontainers/skmer:<tag>

   (see `skmer/tags`_ for valid values for ``<tag>``)


.. |downloads_skmer| image:: https://img.shields.io/conda/dn/bioconda/skmer.svg?style=flat
   :target: https://anaconda.org/bioconda/skmer
   :alt:   (downloads)
.. |docker_skmer| image:: https://quay.io/repository/biocontainers/skmer/status
   :target: https://quay.io/repository/biocontainers/skmer
.. _`skmer/tags`: https://quay.io/repository/biocontainers/skmer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skmer/README.html