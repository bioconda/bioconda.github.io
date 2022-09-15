:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ococo'
.. highlight: bash

ococo
=====

.. conda:recipe:: ococo
   :replaces_section_title:
   :noindex:

   Ococo\, the first online consensus caller.

   :homepage: http://github.com/karel-brinda/ococo
   :license: MIT
   :recipe: /`ococo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ococo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ococo/meta.yaml>`_

   


.. conda:package:: ococo

   |downloads_ococo| |docker_ococo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.2.7-5</code>,  <code>0.1.2.7-4</code>,  <code>0.1.2.7-3</code>,  <code>0.1.2.7-2</code>,  <code>0.1.2.7-1</code>,  <code>0.1.2.7-0</code>,  <code>0.1.2.6-2</code>,  <code>0.1.2.6-1</code>,  <code>0.1.2.6-0</code>,  </span></summary>
      

      ``0.1.2.7-5``,  ``0.1.2.7-4``,  ``0.1.2.7-3``,  ``0.1.2.7-2``,  ``0.1.2.7-1``,  ``0.1.2.7-0``,  ``0.1.2.6-2``,  ``0.1.2.6-1``,  ``0.1.2.6-0``,  ``0.1.2.5-0``,  ``0.1.2.4-1``,  ``0.1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ococo

   and update with::

      conda update ococo

   or use the docker container::

      docker pull quay.io/biocontainers/ococo:<tag>

   (see `ococo/tags`_ for valid values for ``<tag>``)


.. |downloads_ococo| image:: https://img.shields.io/conda/dn/bioconda/ococo.svg?style=flat
   :target: https://anaconda.org/bioconda/ococo
   :alt:   (downloads)
.. |docker_ococo| image:: https://quay.io/repository/biocontainers/ococo/status
   :target: https://quay.io/repository/biocontainers/ococo
.. _`ococo/tags`: https://quay.io/repository/biocontainers/ococo?tab=tags


.. raw:: html

    <script>
        var package = "ococo";
        var versions = ["0.1.2.7","0.1.2.7","0.1.2.7","0.1.2.7","0.1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ococo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ococo/README.html