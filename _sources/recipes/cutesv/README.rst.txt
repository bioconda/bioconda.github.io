:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutesv'
.. highlight: bash

cutesv
======

.. conda:recipe:: cutesv
   :replaces_section_title:
   :noindex:

   cuteSV is a long\-read based human genomic structural variation detection tool

   :homepage: https://github.com/tjiangHIT/cuteSV
   :license: MIT / MIT
   :recipe: /`cutesv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutesv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutesv/meta.yaml>`_

   


.. conda:package:: cutesv

   |downloads_cutesv| |docker_cutesv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cigar: 
   :depends numpy: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3``
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cutesv

   and update with::

      conda update cutesv

   or use the docker container::

      docker pull quay.io/biocontainers/cutesv:<tag>

   (see `cutesv/tags`_ for valid values for ``<tag>``)


.. |downloads_cutesv| image:: https://img.shields.io/conda/dn/bioconda/cutesv.svg?style=flat
   :target: https://anaconda.org/bioconda/cutesv
   :alt:   (downloads)
.. |docker_cutesv| image:: https://quay.io/repository/biocontainers/cutesv/status
   :target: https://quay.io/repository/biocontainers/cutesv
.. _`cutesv/tags`: https://quay.io/repository/biocontainers/cutesv?tab=tags


.. raw:: html

    <script>
        var package = "cutesv";
        var versions = ["2.0.2","2.0.1","2.0.0","1.0.13","1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutesv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutesv/README.html