:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samap'
.. highlight: bash

samap
=====

.. conda:recipe:: samap
   :replaces_section_title:
   :noindex:

   The SAMap algorithm

   :homepage: https://github.com/atarashansky/SAMap
   :license: MIT / MIT
   :recipe: /`samap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap/meta.yaml>`_

   


.. conda:package:: samap

   |downloads_samap| |docker_samap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.3.5-0</code>,  </span></summary>
      

      ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends dill: 
   :depends h5py: ``<=2.10``
   :depends hnswlib: 
   :depends leidenalg: 
   :depends python: ``<3.8``
   :depends sam-algorithm: ``>=0.8.4``
   :depends scanpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samap

   and update with::

      conda update samap

   or use the docker container::

      docker pull quay.io/biocontainers/samap:<tag>

   (see `samap/tags`_ for valid values for ``<tag>``)


.. |downloads_samap| image:: https://img.shields.io/conda/dn/bioconda/samap.svg?style=flat
   :target: https://anaconda.org/bioconda/samap
   :alt:   (downloads)
.. |docker_samap| image:: https://quay.io/repository/biocontainers/samap/status
   :target: https://quay.io/repository/biocontainers/samap
.. _`samap/tags`: https://quay.io/repository/biocontainers/samap?tab=tags


.. raw:: html

    <script>
        var package = "samap";
        var versions = ["1.0.14","1.0.13","1.0.12","1.0.8","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samap/README.html