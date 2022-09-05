:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msmetaenhancer'
.. highlight: bash

msmetaenhancer
==============

.. conda:recipe:: msmetaenhancer
   :replaces_section_title:
   :noindex:

   MSMetaEnhancer is a Python tool that adds more annotations \(e.g. SMILES\, InChI\, CAS number\) to MSP files.

   :homepage: https://github.com/RECETOX/MSMetaEnhancer
   :documentation: https://msmetaenhancer.readthedocs.io/
   
   :license: MIT
   :recipe: /`msmetaenhancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer/meta.yaml>`_

   


.. conda:package:: msmetaenhancer

   |downloads_msmetaenhancer| |docker_msmetaenhancer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.3-1</code>,  <code>0.1.3-0</code>,  </span></summary>
      

      ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiocircuitbreaker: 
   :depends aiohttp: 
   :depends asyncstdlib: 
   :depends frozendict: 
   :depends matchms: 
   :depends multidict: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends rdkit: 
   :depends requests: 
   :depends scipy: 
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msmetaenhancer

   and update with::

      conda update msmetaenhancer

   or use the docker container::

      docker pull quay.io/biocontainers/msmetaenhancer:<tag>

   (see `msmetaenhancer/tags`_ for valid values for ``<tag>``)


.. |downloads_msmetaenhancer| image:: https://img.shields.io/conda/dn/bioconda/msmetaenhancer.svg?style=flat
   :target: https://anaconda.org/bioconda/msmetaenhancer
   :alt:   (downloads)
.. |docker_msmetaenhancer| image:: https://quay.io/repository/biocontainers/msmetaenhancer/status
   :target: https://quay.io/repository/biocontainers/msmetaenhancer
.. _`msmetaenhancer/tags`: https://quay.io/repository/biocontainers/msmetaenhancer?tab=tags


.. raw:: html

    <script>
        var package = "msmetaenhancer";
        var versions = ["0.2.4","0.2.4","0.2.3","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msmetaenhancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msmetaenhancer/README.html