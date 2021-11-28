:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tobias'
.. highlight: bash

tobias
======

.. conda:recipe:: tobias
   :replaces_section_title:
   :noindex:

   Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal

   :homepage: https://github.com/loosolab/TOBIAS/
   :documentation: https://github.com/loosolab/TOBIAS/wiki
   
   :license: MIT
   :recipe: /`tobias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias/meta.yaml>`_

   TOBIAS \(Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal\) is a collection
   of command\-line bioinformatics tools for performing footprinting analysis on ATAC\-seq data. 



.. conda:package:: tobias

   |downloads_tobias| |docker_tobias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.0-0</code>,  <code>0.12.12-0</code>,  <code>0.12.11-0</code>,  <code>0.12.10-1</code>,  <code>0.12.10-0</code>,  <code>0.12.9-0</code>,  <code>0.12.8-0</code>,  <code>0.12.7-0</code>,  <code>0.12.6-0</code>,  </span></summary>
      

      ``0.13.0-0``,  ``0.12.12-0``,  ``0.12.11-0``,  ``0.12.10-1``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.6-1``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends boto3: 
   :depends importlib_metadata: 
   :depends kneed: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends logomaker: 
   :depends matplotlib-base: ``>=2``
   :depends moods: 
   :depends numpy: ``>=1.17.5,<2.0a0``
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pypdf2: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: ``>=5.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: ``>=0.9.1``
   :depends svist4get: ``>=1.2.24``
   :depends xgboost: ``>=0.71``
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tobias

   and update with::

      conda update tobias

   or use the docker container::

      docker pull quay.io/biocontainers/tobias:<tag>

   (see `tobias/tags`_ for valid values for ``<tag>``)


.. |downloads_tobias| image:: https://img.shields.io/conda/dn/bioconda/tobias.svg?style=flat
   :target: https://anaconda.org/bioconda/tobias
   :alt:   (downloads)
.. |docker_tobias| image:: https://quay.io/repository/biocontainers/tobias/status
   :target: https://quay.io/repository/biocontainers/tobias
.. _`tobias/tags`: https://quay.io/repository/biocontainers/tobias?tab=tags


.. raw:: html

    <script>
        var package = "tobias";
        var versions = ["0.13.0","0.12.12","0.12.11","0.12.10","0.12.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tobias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tobias/README.html