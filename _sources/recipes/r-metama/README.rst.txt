:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metama'
.. highlight: bash

r-metama
========

.. conda:recipe:: r-metama
   :replaces_section_title:
   :noindex:

   Combines either p\-values or modified effect sizes from different studies to find differentially expressed genes

   :homepage: https://CRAN.R-project.org/package=metaMA
   :license: GPL / GPL
   :recipe: /`r-metama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama/meta.yaml>`_

   


.. conda:package:: r-metama

   |downloads_r-metama| |docker_r-metama|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-2</code>,  <code>3.1.3-1</code>,  <code>3.1.3-0</code>,  <code>3.1.2-7</code>,  <code>3.1.2-6</code>,  <code>3.1.2-5</code>,  <code>3.1.2-4</code>,  <code>3.1.2-3</code>,  <code>3.1.2-2</code>,  </span></summary>
      

      ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-7``,  ``3.1.2-6``,  ``3.1.2-5``,  ``3.1.2-4``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-smvar: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metama

   and update with::

      conda update r-metama

   or use the docker container::

      docker pull quay.io/biocontainers/r-metama:<tag>

   (see `r-metama/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metama| image:: https://img.shields.io/conda/dn/bioconda/r-metama.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metama
   :alt:   (downloads)
.. |docker_r-metama| image:: https://quay.io/repository/biocontainers/r-metama/status
   :target: https://quay.io/repository/biocontainers/r-metama
.. _`r-metama/tags`: https://quay.io/repository/biocontainers/r-metama?tab=tags


.. raw:: html

    <script>
        var package = "r-metama";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.2","3.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metama/README.html