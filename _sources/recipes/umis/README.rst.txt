:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umis'
.. highlight: bash

umis
====

.. conda:recipe:: umis
   :replaces_section_title:
   :noindex:

   Tools for processing UMI RNA\-tag data

   :homepage: https://github.com/vals/umis
   :license: MIT
   :recipe: /`umis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis/meta.yaml>`_

   


.. conda:package:: umis

   |downloads_umis| |docker_umis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0b-2``,  ``0.9.0b-1``,  ``0.9.0b-0``,  ``0.9.0a-0``,  ``0.7.0-1``,  ``0.7.0a-1``,  ``0.6.0a-2``,  ``0.6.0a-1``,  ``0.6.0a-0``,  ``0.5.0a-3``,  ``0.5.0a-2``,  ``0.5.0a-1``,  ``0.5.0a-0``,  ``0.4.0a-0``,  ``0.3.1a0-2``,  ``0.3.1a0-1``,  ``0.3.1a0-0``,  ``0.2.2a0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=7.0``
   :depends libgcc-ng: ``>=12``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends regex: 
   :depends scipy: 
   :depends setuptools: 
   :depends toolz: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umis

   and update with::

      conda update umis

   or use the docker container::

      docker pull quay.io/biocontainers/umis:<tag>

   (see `umis/tags`_ for valid values for ``<tag>``)


.. |downloads_umis| image:: https://img.shields.io/conda/dn/bioconda/umis.svg?style=flat
   :target: https://anaconda.org/bioconda/umis
   :alt:   (downloads)
.. |docker_umis| image:: https://quay.io/repository/biocontainers/umis/status
   :target: https://quay.io/repository/biocontainers/umis
.. _`umis/tags`: https://quay.io/repository/biocontainers/umis?tab=tags


.. raw:: html

    <script>
        var package = "umis";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umis/README.html