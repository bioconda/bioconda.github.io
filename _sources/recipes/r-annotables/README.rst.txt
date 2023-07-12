:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-annotables'
.. highlight: bash

r-annotables
============

.. conda:recipe:: r-annotables
   :replaces_section_title:
   :noindex:

   Provides tables for converting and annotating Ensembl Gene IDs.

   :homepage: https://github.com/stephenturner/annotables
   :license: GPL3 / GPL-3
   :recipe: /`r-annotables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.996854`

   


.. conda:package:: r-annotables

   |downloads_r-annotables| |docker_r-annotables|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.90-4</code>,  <code>0.1.90-3</code>,  <code>0.1.90-2</code>,  <code>0.1.90-1</code>,  <code>0.1.90-0</code>,  <code>v0.1.90-3</code>,  <code>v0.1.90-2</code>,  </span></summary>
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.90-4``,  ``0.1.90-3``,  ``0.1.90-2``,  ``0.1.90-1``,  ``0.1.90-0``,  ``v0.1.90-3``,  ``v0.1.90-2``,  ``v0.1.90-1``,  ``v0.1.90-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-annotables

   and update with::

      conda update r-annotables

   or use the docker container::

      docker pull quay.io/biocontainers/r-annotables:<tag>

   (see `r-annotables/tags`_ for valid values for ``<tag>``)


.. |downloads_r-annotables| image:: https://img.shields.io/conda/dn/bioconda/r-annotables.svg?style=flat
   :target: https://anaconda.org/bioconda/r-annotables
   :alt:   (downloads)
.. |docker_r-annotables| image:: https://quay.io/repository/biocontainers/r-annotables/status
   :target: https://quay.io/repository/biocontainers/r-annotables
.. _`r-annotables/tags`: https://quay.io/repository/biocontainers/r-annotables?tab=tags


.. raw:: html

    <script>
        var package = "r-annotables";
        var versions = ["0.2.0","0.2.0","0.1.90","0.1.90","0.1.90"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-annotables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-annotables/README.html