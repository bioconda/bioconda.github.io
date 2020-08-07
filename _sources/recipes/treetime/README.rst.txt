:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treetime'
.. highlight: bash

treetime
========

.. conda:recipe:: treetime
   :replaces_section_title:
   :noindex:

   Maximum\-Likelihood dating and ancestral inference for phylogenetic trees

   :homepage: https://github.com/neherlab/treetime
   :license: MIT / MIT
   :recipe: /`treetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime/meta.yaml>`_

   


.. conda:package:: treetime

   |downloads_treetime| |docker_treetime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.5-0</code>,  <code>0.7.4-1</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.0-0</code>,  <code>0.6.4.1-0</code>,  <code>0.6.3-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``0.7.5-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.4.1-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.66``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.17.1``
   :depends python: 
   :depends scipy: ``>=0.16.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treetime

   and update with::

      conda update treetime

   or use the docker container::

      docker pull quay.io/biocontainers/treetime:<tag>

   (see `treetime/tags`_ for valid values for ``<tag>``)


.. |downloads_treetime| image:: https://img.shields.io/conda/dn/bioconda/treetime.svg?style=flat
   :target: https://anaconda.org/bioconda/treetime
   :alt:   (downloads)
.. |docker_treetime| image:: https://quay.io/repository/biocontainers/treetime/status
   :target: https://quay.io/repository/biocontainers/treetime
.. _`treetime/tags`: https://quay.io/repository/biocontainers/treetime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treetime/README.html