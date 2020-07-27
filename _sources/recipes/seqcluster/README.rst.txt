:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqcluster'
.. highlight: bash

seqcluster
==========

.. conda:recipe:: seqcluster
   :replaces_section_title:
   :noindex:

   small RNA analysis from NGS data

   :homepage: https://github.com/lpantano/seqclsuter
   :license: MIT
   :recipe: /`seqcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster/meta.yaml>`_
   :links: biotools: :biotools:`seqcluster`

   


.. conda:package:: seqcluster

   |downloads_seqcluster| |docker_seqcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.4a15-1</code>,  <code>1.2.4a15-0</code>,  <code>1.2.4a14-2</code>,  <code>1.2.4a14-1</code>,  <code>1.2.4a14-0</code>,  </span></summary>
      

      ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.4a15-1``,  ``1.2.4a15-0``,  ``1.2.4a14-2``,  ``1.2.4a14-1``,  ``1.2.4a14-0``,  ``1.2.4a12-1``,  ``1.2.4a12-0``,  ``1.2.4a6-0``,  ``1.2.4a5-0``,  ``1.2.4a-6``,  ``1.2.4a-5``,  ``1.2.4a-4``,  ``1.2.4a-2``,  ``1.2.4a-1``,  ``1.2.4a-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.14-0``,  ``1.1.13-3``,  ``1.1.13-2``,  ``1.1.13-1``,  ``1.1.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends mirtop: ``>=0.4.17a``
   :depends pandas: 
   :depends progressbar2: 
   :depends pybedtools: 
   :depends pysam: ``>=0.8.1``
   :depends python: 
   :depends pyyaml: 
   :depends scipy: 
   :depends six: 
   :depends viennarna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqcluster

   and update with::

      conda update seqcluster

   or use the docker container::

      docker pull quay.io/biocontainers/seqcluster:<tag>

   (see `seqcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_seqcluster| image:: https://img.shields.io/conda/dn/bioconda/seqcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/seqcluster
   :alt:   (downloads)
.. |docker_seqcluster| image:: https://quay.io/repository/biocontainers/seqcluster/status
   :target: https://quay.io/repository/biocontainers/seqcluster
.. _`seqcluster/tags`: https://quay.io/repository/biocontainers/seqcluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcluster/README.html