:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igv-reports'
.. highlight: bash

igv-reports
===========

.. conda:recipe:: igv-reports
   :replaces_section_title:
   :noindex:

   Creates self\-contained html pages for visual variant review with IGV \(igv.js\).

   :homepage: https://github.com/igvteam/igv-reports
   :license: MIT / MIT
   :recipe: /`igv-reports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv-reports/meta.yaml>`_

   


.. conda:package:: igv-reports

   |downloads_igv-reports| |docker_igv-reports|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.8-1</code>,  <code>0.9.8-0</code>,  <code>0.9.7-1</code>,  <code>0.9.7-0</code>,  <code>0.9.6-0</code>,  <code>0.9.5-0</code>,  <code>0.9.4-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.8-1``,  ``0.9.8-0``,  ``0.9.7-1``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends intervaltree: 
   :depends pysam: 
   :depends python: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igv-reports

   and update with::

      conda update igv-reports

   or use the docker container::

      docker pull quay.io/biocontainers/igv-reports:<tag>

   (see `igv-reports/tags`_ for valid values for ``<tag>``)


.. |downloads_igv-reports| image:: https://img.shields.io/conda/dn/bioconda/igv-reports.svg?style=flat
   :target: https://anaconda.org/bioconda/igv-reports
   :alt:   (downloads)
.. |docker_igv-reports| image:: https://quay.io/repository/biocontainers/igv-reports/status
   :target: https://quay.io/repository/biocontainers/igv-reports
.. _`igv-reports/tags`: https://quay.io/repository/biocontainers/igv-reports?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv-reports/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv-reports/README.html