:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghm'
.. highlight: bash

ghm
===

.. conda:recipe:: ghm/3.1
   :replaces_section_title:
   :noindex:

   A MOD\-score analysis in which parametric LOD scores are maximized over the parameters of the trait model

   :homepage: https://www.helmholtz-muenchen.de/en/ige/service/software-download/genehunter-modscore/index.html
   :license: INDIVIDUAL
   :recipe: /`ghm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghm>`_/`3.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghm/3.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghm/3.1/meta.yaml>`_

   


.. conda:package:: ghm

   |downloads_ghm| |docker_ghm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1-4</code>,  <code>3.1-3</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1-0</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  <code>3.0-2</code>,  <code>3.0-1</code>,  </span></summary>
      

      ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghm

   and update with::

      conda update ghm

   or use the docker container::

      docker pull quay.io/biocontainers/ghm:<tag>

   (see `ghm/tags`_ for valid values for ``<tag>``)


.. |downloads_ghm| image:: https://img.shields.io/conda/dn/bioconda/ghm.svg?style=flat
   :target: https://anaconda.org/bioconda/ghm
   :alt:   (downloads)
.. |docker_ghm| image:: https://quay.io/repository/biocontainers/ghm/status
   :target: https://quay.io/repository/biocontainers/ghm
.. _`ghm/tags`: https://quay.io/repository/biocontainers/ghm?tab=tags


.. raw:: html

    <script>
        var package = "ghm";
        var versions = ["3.1","3.1","3.1","3.1","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghm/README.html