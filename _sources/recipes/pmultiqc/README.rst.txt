:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmultiqc'
.. highlight: bash

pmultiqc
========

.. conda:recipe:: pmultiqc
   :replaces_section_title:
   :noindex:

   Python package for quality control of proteomics datasets\, based on multiqc package

   :homepage: https://github.com/bigbio/pmultiqc/
   :license: MIT / MIT
   :recipe: /`pmultiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc/meta.yaml>`_

   


.. conda:package:: pmultiqc

   |downloads_pmultiqc| |docker_pmultiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.18-0</code>,  <code>0.0.17-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  <code>0.0.13-0</code>,  <code>0.0.12-0</code>,  <code>0.0.11-0</code>,  <code>0.0.10-0</code>,  </span></summary>
      

      ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends lxml: 
   :depends multiqc: 
   :depends pandas: 
   :depends pyopenms: ``>2.7``
   :depends pyteomics: 
   :depends pytest: 
   :depends python: ``>=3.6``
   :depends sdrf-pipelines: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pmultiqc

   and update with::

      conda update pmultiqc

   or use the docker container::

      docker pull quay.io/biocontainers/pmultiqc:<tag>

   (see `pmultiqc/tags`_ for valid values for ``<tag>``)


.. |downloads_pmultiqc| image:: https://img.shields.io/conda/dn/bioconda/pmultiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/pmultiqc
   :alt:   (downloads)
.. |docker_pmultiqc| image:: https://quay.io/repository/biocontainers/pmultiqc/status
   :target: https://quay.io/repository/biocontainers/pmultiqc
.. _`pmultiqc/tags`: https://quay.io/repository/biocontainers/pmultiqc?tab=tags


.. raw:: html

    <script>
        var package = "pmultiqc";
        var versions = ["0.0.18","0.0.17","0.0.16","0.0.15","0.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmultiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmultiqc/README.html