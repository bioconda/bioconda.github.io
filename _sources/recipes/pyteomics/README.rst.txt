:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyteomics'
.. highlight: bash

pyteomics
=========

.. conda:recipe:: pyteomics
   :replaces_section_title:
   :noindex:

   A framework for proteomics data analysis.

   :homepage: https://bitbucket.org/levitsky/pyteomics
   :license: Apache License, Version 2.0
   :recipe: /`pyteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyteomics/meta.yaml>`_
   :links: biotools: :biotools:`pyteomics`

   


.. conda:package:: pyteomics

   |downloads_pyteomics| |docker_pyteomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.4-0</code>,  <code>4.5.3-0</code>,  <code>4.5.2-0</code>,  <code>4.5.1-0</code>,  <code>4.5-0</code>,  <code>4.4.2-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.3-0</code>,  </span></summary>
      

      ``4.5.4-0``,  ``4.5.3-0``,  ``4.5.2-0``,  ``4.5.1-0``,  ``4.5-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.3-0``,  ``4.3.2-1``,  ``4.3.2-0``,  ``4.2-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.1-0``,  ``3.5.1-2``,  ``3.5.1-0``,  ``3.4-1``,  ``3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends lxml: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyteomics

   and update with::

      conda update pyteomics

   or use the docker container::

      docker pull quay.io/biocontainers/pyteomics:<tag>

   (see `pyteomics/tags`_ for valid values for ``<tag>``)


.. |downloads_pyteomics| image:: https://img.shields.io/conda/dn/bioconda/pyteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/pyteomics
   :alt:   (downloads)
.. |docker_pyteomics| image:: https://quay.io/repository/biocontainers/pyteomics/status
   :target: https://quay.io/repository/biocontainers/pyteomics
.. _`pyteomics/tags`: https://quay.io/repository/biocontainers/pyteomics?tab=tags


.. raw:: html

    <script>
        var package = "pyteomics";
        var versions = ["4.5.4","4.5.3","4.5.2","4.5.1","4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyteomics/README.html