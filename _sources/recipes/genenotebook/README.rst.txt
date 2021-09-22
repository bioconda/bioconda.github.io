:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genenotebook'
.. highlight: bash

genenotebook
============

.. conda:recipe:: genenotebook
   :replaces_section_title:
   :noindex:

   A colleborative notebook for comparative genomics

   :homepage: https://genenotebook.github.io
   :license: AGPL-3.0
   :recipe: /`genenotebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook/meta.yaml>`_

   


.. conda:package:: genenotebook

   |downloads_genenotebook| |docker_genenotebook|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-0</code>,  <code>0.1.16-4</code>,  <code>0.1.16-3</code>,  <code>0.1.15-4</code>,  <code>0.1.14-2</code>,  <code>0.1.13-0</code>,  <code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  </span></summary>
      

      ``0.3.0-0``,  ``0.1.16-4``,  ``0.1.16-3``,  ``0.1.15-4``,  ``0.1.14-2``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.5-1``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends mongodb: ``4.0.3.*``
   :depends nodejs: ``14.17.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genenotebook

   and update with::

      conda update genenotebook

   or use the docker container::

      docker pull quay.io/biocontainers/genenotebook:<tag>

   (see `genenotebook/tags`_ for valid values for ``<tag>``)


.. |downloads_genenotebook| image:: https://img.shields.io/conda/dn/bioconda/genenotebook.svg?style=flat
   :target: https://anaconda.org/bioconda/genenotebook
   :alt:   (downloads)
.. |docker_genenotebook| image:: https://quay.io/repository/biocontainers/genenotebook/status
   :target: https://quay.io/repository/biocontainers/genenotebook
.. _`genenotebook/tags`: https://quay.io/repository/biocontainers/genenotebook?tab=tags


.. raw:: html

    <script>
        var package = "genenotebook";
        var versions = ["0.3.0","0.1.16","0.1.16","0.1.15","0.1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genenotebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genenotebook/README.html