:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solvebio'
.. highlight: bash

solvebio
========

.. conda:recipe:: solvebio
   :replaces_section_title:
   :noindex:

   The SolveBio Python client

   :homepage: https://github.com/solvebio/solvebio-python
   :license: MIT / MIT
   :recipe: /`solvebio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio/meta.yaml>`_

   


.. conda:package:: solvebio

   |downloads_solvebio| |docker_solvebio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.21.0-0</code>,  <code>2.20.0-0</code>,  <code>2.19.0-0</code>,  <code>2.18.1-0</code>,  <code>2.18.0-0</code>,  <code>2.17.1-0</code>,  <code>2.16.0-0</code>,  <code>2.15.0-0</code>,  <code>2.14.1-0</code>,  </span></summary>
      

      ``2.21.0-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.16.0-0``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.7-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.1-0``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.4.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends pycurl: ``>=7.0.0``
   :depends pyprind: 
   :depends python: 
   :depends requests: ``>=2.0.0``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install solvebio

   and update with::

      conda update solvebio

   or use the docker container::

      docker pull quay.io/biocontainers/solvebio:<tag>

   (see `solvebio/tags`_ for valid values for ``<tag>``)


.. |downloads_solvebio| image:: https://img.shields.io/conda/dn/bioconda/solvebio.svg?style=flat
   :target: https://anaconda.org/bioconda/solvebio
   :alt:   (downloads)
.. |docker_solvebio| image:: https://quay.io/repository/biocontainers/solvebio/status
   :target: https://quay.io/repository/biocontainers/solvebio
.. _`solvebio/tags`: https://quay.io/repository/biocontainers/solvebio?tab=tags


.. raw:: html

    <script>
        var package = "solvebio";
        var versions = ["2.21.0","2.20.0","2.19.0","2.18.1","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solvebio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solvebio/README.html