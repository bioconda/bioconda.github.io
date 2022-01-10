:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'weblogo'
.. highlight: bash

weblogo
=======

.. conda:recipe:: weblogo
   :replaces_section_title:
   :noindex:

   WebLogo3 \: Sequence Logos Redrawn

   :homepage: https://github.com/WebLogo/weblogo
   :license: MIT / MIT
   :recipe: /`weblogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weblogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weblogo/meta.yaml>`_
   :links: biotools: :biotools:`weblogo`, doi: :doi:`10.1101/gr.849004`

   


.. conda:package:: weblogo

   |downloads_weblogo| |docker_weblogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.9-0</code>,  <code>3.7.8-0</code>,  <code>3.7.7-0</code>,  <code>3.7.5-0</code>,  <code>3.7.4-1</code>,  <code>3.7.4-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.5.0-0</code>,  </span></summary>
      

      ``3.7.9-0``,  ``3.7.8-0``,  ``3.7.7-0``,  ``3.7.5-0``,  ``3.7.4-1``,  ``3.7.4-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.5.0-0``,  ``2.8.2-7``,  ``2.8.2-6``,  ``2.8.2-5``,  ``2.8.2-3``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends ghostscript: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install weblogo

   and update with::

      conda update weblogo

   or use the docker container::

      docker pull quay.io/biocontainers/weblogo:<tag>

   (see `weblogo/tags`_ for valid values for ``<tag>``)


.. |downloads_weblogo| image:: https://img.shields.io/conda/dn/bioconda/weblogo.svg?style=flat
   :target: https://anaconda.org/bioconda/weblogo
   :alt:   (downloads)
.. |docker_weblogo| image:: https://quay.io/repository/biocontainers/weblogo/status
   :target: https://quay.io/repository/biocontainers/weblogo
.. _`weblogo/tags`: https://quay.io/repository/biocontainers/weblogo?tab=tags


.. raw:: html

    <script>
        var package = "weblogo";
        var versions = ["3.7.9","3.7.8","3.7.7","3.7.5","3.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/weblogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/weblogo/README.html