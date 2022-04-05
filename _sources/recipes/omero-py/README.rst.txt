:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omero-py'
.. highlight: bash

omero-py
========

.. conda:recipe:: omero-py
   :replaces_section_title:
   :noindex:

   Client library offering helper methods to access an OMERO server.

   :homepage: https://www.openmicroscopy.org/
   :license: GPL-2.0-only
   :recipe: /`omero-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omero-py/meta.yaml>`_

   


.. conda:package:: omero-py

   |downloads_omero-py| |docker_omero-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.11.1-0</code>,  <code>5.11.0-0</code>,  <code>5.10.3-0</code>,  <code>5.10.2-0</code>,  <code>5.10.1-0</code>,  <code>5.9.1-0</code>,  <code>5.9.0-0</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  </span></summary>
      

      ``5.11.1-0``,  ``5.11.0-0``,  ``5.10.3-0``,  ``5.10.2-0``,  ``5.10.1-0``,  ``5.9.1-0``,  ``5.9.0-0``,  ``5.8.3-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.8.0-0``,  ``5.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends future: 
   :depends numpy: 
   :depends pillow: 
   :depends python: ``>=3.6``
   :depends pywin32-on-windows: 
   :depends pyyaml: 
   :depends requests: 
   :depends zeroc-ice: ``>=3.6.5,<3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install omero-py

   and update with::

      conda update omero-py

   or use the docker container::

      docker pull quay.io/biocontainers/omero-py:<tag>

   (see `omero-py/tags`_ for valid values for ``<tag>``)


.. |downloads_omero-py| image:: https://img.shields.io/conda/dn/bioconda/omero-py.svg?style=flat
   :target: https://anaconda.org/bioconda/omero-py
   :alt:   (downloads)
.. |docker_omero-py| image:: https://quay.io/repository/biocontainers/omero-py/status
   :target: https://quay.io/repository/biocontainers/omero-py
.. _`omero-py/tags`: https://quay.io/repository/biocontainers/omero-py?tab=tags


.. raw:: html

    <script>
        var package = "omero-py";
        var versions = ["5.11.1","5.11.0","5.10.3","5.10.2","5.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omero-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omero-py/README.html