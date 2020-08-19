:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mageck'
.. highlight: bash

mageck
======

.. conda:recipe:: mageck
   :replaces_section_title:
   :noindex:

   MAGeCK \(Model\-based Analysis of Genome\-wide CRISPR\-Cas9 Knockout\)\, an algorithm to process\, QC\, analyze and visualize CRISPR screening data.

   :homepage: http://mageck.sourceforge.net
   :license: BSD License
   :recipe: /`mageck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck/meta.yaml>`_

   


.. conda:package:: mageck

   |downloads_mageck| |docker_mageck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.9.4-0</code>,  <code>0.5.9.3-2</code>,  <code>0.5.9.3-1</code>,  <code>0.5.9.3-0</code>,  <code>0.5.9.2-0</code>,  <code>0.5.9.1-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  <code>0.5.8a-1</code>,  </span></summary>
      

      ``0.5.9.4-0``,  ``0.5.9.3-2``,  ``0.5.9.3-1``,  ``0.5.9.3-0``,  ``0.5.9.2-0``,  ``0.5.9.1-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.8a-1``,  ``0.5.8a-0``,  ``0.5.7-7``,  ``0.5.7-6``,  ``0.5.7-5``,  ``0.5.7-4``,  ``0.5.7-2``,  ``0.5.7-1``,  ``0.5.7-0``,  ``0.5.7a-0``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends ipython: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mageck

   and update with::

      conda update mageck

   or use the docker container::

      docker pull quay.io/biocontainers/mageck:<tag>

   (see `mageck/tags`_ for valid values for ``<tag>``)


.. |downloads_mageck| image:: https://img.shields.io/conda/dn/bioconda/mageck.svg?style=flat
   :target: https://anaconda.org/bioconda/mageck
   :alt:   (downloads)
.. |docker_mageck| image:: https://quay.io/repository/biocontainers/mageck/status
   :target: https://quay.io/repository/biocontainers/mageck
.. _`mageck/tags`: https://quay.io/repository/biocontainers/mageck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck/README.html