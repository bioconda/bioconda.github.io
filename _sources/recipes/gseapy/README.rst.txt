:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gseapy'
.. highlight: bash

gseapy
======

.. conda:recipe:: gseapy
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis in Python

   :homepage: https://github.com/zqfang/gseapy
   :license: MIT / MIT License
   :recipe: /`gseapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy/meta.yaml>`_

   


.. conda:package:: gseapy

   |downloads_gseapy| |docker_gseapy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.5-0</code>,  <code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.19-0</code>,  <code>0.9.18-0</code>,  <code>0.9.17-0</code>,  </span></summary>
      

      ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.19-0``,  ``0.9.18-0``,  ``0.9.17-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.13-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.5-1``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.11-0``,  ``0.8.6-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.7.4-3``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2a0-0``,  ``0.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: ``>=4.4.1``
   :depends bioservices: 
   :depends html5lib: 
   :depends joblib: 
   :depends lxml: 
   :depends matplotlib-base: ``>=1.4.3``
   :depends numpy: ``>=1.13.0``
   :depends pandas: ``>=0.16``
   :depends python: ``>3``
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gseapy

   and update with::

      conda update gseapy

   or use the docker container::

      docker pull quay.io/biocontainers/gseapy:<tag>

   (see `gseapy/tags`_ for valid values for ``<tag>``)


.. |downloads_gseapy| image:: https://img.shields.io/conda/dn/bioconda/gseapy.svg?style=flat
   :target: https://anaconda.org/bioconda/gseapy
   :alt:   (downloads)
.. |docker_gseapy| image:: https://quay.io/repository/biocontainers/gseapy/status
   :target: https://quay.io/repository/biocontainers/gseapy
.. _`gseapy/tags`: https://quay.io/repository/biocontainers/gseapy?tab=tags


.. raw:: html

    <script>
        var package = "gseapy";
        var versions = ["0.10.5","0.10.4","0.10.3","0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gseapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gseapy/README.html