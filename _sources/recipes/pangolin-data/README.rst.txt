:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin-data'
.. highlight: bash

pangolin-data
=============

.. conda:recipe:: pangolin-data
   :replaces_section_title:
   :noindex:

   Repository for storing latest model\, protobuf\, designation hash and alias files for pangolin assignments

   :homepage: https://github.com/cov-lineages/pangolin-data
   :license: GPL-3.0-only
   :recipe: /`pangolin-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data/meta.yaml>`_

   


.. conda:package:: pangolin-data

   |downloads_pangolin-data| |docker_pangolin-data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17-0</code>,  <code>1.16-0</code>,  <code>1.15.1-0</code>,  <code>1.14-0</code>,  <code>1.13-1</code>,  <code>1.13-0</code>,  <code>1.12-0</code>,  <code>1.11-0</code>,  <code>1.9-0</code>,  </span></summary>
      

      ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-1``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.6-0``,  ``1.3-0``,  ``1.2.133.2-0``,  ``1.2.133-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pangolin-data

   and update with::

      conda update pangolin-data

   or use the docker container::

      docker pull quay.io/biocontainers/pangolin-data:<tag>

   (see `pangolin-data/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolin-data| image:: https://img.shields.io/conda/dn/bioconda/pangolin-data.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin-data
   :alt:   (downloads)
.. |docker_pangolin-data| image:: https://quay.io/repository/biocontainers/pangolin-data/status
   :target: https://quay.io/repository/biocontainers/pangolin-data
.. _`pangolin-data/tags`: https://quay.io/repository/biocontainers/pangolin-data?tab=tags


.. raw:: html

    <script>
        var package = "pangolin-data";
        var versions = ["1.17","1.16","1.15.1","1.14","1.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin-data/README.html