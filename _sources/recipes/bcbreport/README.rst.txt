:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbreport'
.. highlight: bash

bcbreport
=========

.. conda:recipe:: bcbreport
   :replaces_section_title:
   :noindex:

   Rmd templates for bcbio\-nextgen analysis

   :homepage: https://github.com/lpantano/bcbio.coverage
   :license: MIT License
   :recipe: /`bcbreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbreport/meta.yaml>`_

   


.. conda:package:: bcbreport

   |downloads_bcbreport| |docker_bcbreport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.29-2</code>,  <code>0.99.29-1</code>,  <code>0.99.29-0</code>,  <code>0.99.28-0</code>,  <code>0.99.27-0</code>,  <code>0.99.26-0</code>,  <code>0.99.25-0</code>,  <code>0.99.24-0</code>,  <code>0.99.23-1</code>,  </span></summary>
      

      ``0.99.29-2``,  ``0.99.29-1``,  ``0.99.29-0``,  ``0.99.28-0``,  ``0.99.27-0``,  ``0.99.26-0``,  ``0.99.25-0``,  ``0.99.24-0``,  ``0.99.23-1``,  ``0.99.22-1``,  ``0.99.21-1``,  ``0.99.20-1``,  ``0.99.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbreport

   and update with::

      conda update bcbreport

   or use the docker container::

      docker pull quay.io/biocontainers/bcbreport:<tag>

   (see `bcbreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbreport| image:: https://img.shields.io/conda/dn/bioconda/bcbreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbreport
   :alt:   (downloads)
.. |docker_bcbreport| image:: https://quay.io/repository/biocontainers/bcbreport/status
   :target: https://quay.io/repository/biocontainers/bcbreport
.. _`bcbreport/tags`: https://quay.io/repository/biocontainers/bcbreport?tab=tags


.. raw:: html

    <script>
        var package = "bcbreport";
        var versions = ["0.99.29","0.99.29","0.99.29","0.99.28","0.99.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbreport/README.html