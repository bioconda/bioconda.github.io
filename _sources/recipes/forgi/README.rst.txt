:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forgi'
.. highlight: bash

forgi
=====

.. conda:recipe:: forgi
   :replaces_section_title:
   :noindex:

   RNA Graph Library

   :homepage: https://viennarna.github.io/forgi/
   :license: GPL 3.0
   :recipe: /`forgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forgi/meta.yaml>`_

   


.. conda:package:: forgi

   |downloads_forgi| |docker_forgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-4</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0-2</code>,  <code>1.1-2</code>,  </span></summary>
      

      ``2.1.1-4``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0-2``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4.3``
   :depends beautifulsoup4: ``>=4.6``
   :depends biopython: ``>=1.70``
   :depends future: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends logging_exceptions: ``>=0.1.6``
   :depends matplotlib-base: ``>=2``
   :depends networkx: ``>=2.0``
   :depends numpy: ``>=1.10.0``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=0.20``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: ``>=0.19.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install forgi

   and update with::

      conda update forgi

   or use the docker container::

      docker pull quay.io/biocontainers/forgi:<tag>

   (see `forgi/tags`_ for valid values for ``<tag>``)


.. |downloads_forgi| image:: https://img.shields.io/conda/dn/bioconda/forgi.svg?style=flat
   :target: https://anaconda.org/bioconda/forgi
   :alt:   (downloads)
.. |docker_forgi| image:: https://quay.io/repository/biocontainers/forgi/status
   :target: https://quay.io/repository/biocontainers/forgi
.. _`forgi/tags`: https://quay.io/repository/biocontainers/forgi?tab=tags


.. raw:: html

    <script>
        var package = "forgi";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forgi/README.html