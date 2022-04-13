:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgatcore'
.. highlight: bash

cgatcore
========

.. conda:recipe:: cgatcore
   :replaces_section_title:
   :noindex:

   CGAT \: the Computational Genomics Analysis Toolkit

   :homepage: https://github.com/cgat-developers/cgat-core
   :license: MIT / MIT
   :recipe: /`cgatcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgatcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgatcore/meta.yaml>`_

   


.. conda:package:: cgatcore

   |downloads_cgatcore| |docker_cgatcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.11-0</code>,  <code>0.6.10-0</code>,  <code>0.6.9-0</code>,  <code>0.6.7-0</code>,  <code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.7-0``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.15-1``,  ``0.5.15-0``,  ``0.5.14-0``,  ``0.5.13-0``,  ``0.5.12-1``,  ``0.5.11-0``,  ``0.5.10-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends apsw: 
   :depends boto3: 
   :depends coreutils: 
   :depends drmaa: 
   :depends ftputil: 
   :depends gevent: 
   :depends google-cloud-sdk: 
   :depends google-cloud-storage: 
   :depends nomkl: 
   :depends pandas: 
   :depends pysftp: 
   :depends python: ``>=3``
   :depends pyyaml: ``>=5.1``
   :depends ruffus: 
   :depends six: 
   :depends sqlalchemy: 
   :depends time: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgatcore

   and update with::

      conda update cgatcore

   or use the docker container::

      docker pull quay.io/biocontainers/cgatcore:<tag>

   (see `cgatcore/tags`_ for valid values for ``<tag>``)


.. |downloads_cgatcore| image:: https://img.shields.io/conda/dn/bioconda/cgatcore.svg?style=flat
   :target: https://anaconda.org/bioconda/cgatcore
   :alt:   (downloads)
.. |docker_cgatcore| image:: https://quay.io/repository/biocontainers/cgatcore/status
   :target: https://quay.io/repository/biocontainers/cgatcore
.. _`cgatcore/tags`: https://quay.io/repository/biocontainers/cgatcore?tab=tags


.. raw:: html

    <script>
        var package = "cgatcore";
        var versions = ["0.6.11","0.6.10","0.6.9","0.6.7","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgatcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgatcore/README.html