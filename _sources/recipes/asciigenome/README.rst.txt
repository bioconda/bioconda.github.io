:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asciigenome'
.. highlight: bash

asciigenome
===========

.. conda:recipe:: asciigenome
   :replaces_section_title:
   :noindex:

   Command\-line genome browser running from terminal window and solely based on ASCII characters

   :homepage: https://github.com/dariober/ASCIIGenome
   :license: MIT / MIT
   :recipe: /`asciigenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome/meta.yaml>`_

   


.. conda:package:: asciigenome

   |downloads_asciigenome| |docker_asciigenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.17.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-2``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.6.4-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install asciigenome

   and update with::

      conda update asciigenome

   or use the docker container::

      docker pull quay.io/biocontainers/asciigenome:<tag>

   (see `asciigenome/tags`_ for valid values for ``<tag>``)


.. |downloads_asciigenome| image:: https://img.shields.io/conda/dn/bioconda/asciigenome.svg?style=flat
   :target: https://anaconda.org/bioconda/asciigenome
   :alt:   (downloads)
.. |docker_asciigenome| image:: https://quay.io/repository/biocontainers/asciigenome/status
   :target: https://quay.io/repository/biocontainers/asciigenome
.. _`asciigenome/tags`: https://quay.io/repository/biocontainers/asciigenome?tab=tags


.. raw:: html

    <script>
        var package = "asciigenome";
        var versions = ["1.17.0","1.16.0","1.16.0","1.15.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asciigenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asciigenome/README.html