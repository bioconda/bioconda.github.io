:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genarise'
.. highlight: bash

bioconductor-genarise
=====================

.. conda:recipe:: bioconductor-genarise
   :replaces_section_title:
   :noindex:

   Microarray Analysis tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/genArise.html
   :license: file LICENSE
   :recipe: /`bioconductor-genarise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise/meta.yaml>`_

   genArise is an easy to use tool for dual color microarray data. Its GUI\-Tk based environment let any non\-experienced user performs a basic\, but not simple\, data analysis just following a wizard. In addition it provides some tools for the developer.


.. conda:package:: bioconductor-genarise

   |downloads_bioconductor-genarise| |docker_bioconductor-genarise|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-locfit: 
   :depends r-tkrplot: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genarise

   and update with::

      conda update bioconductor-genarise

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genarise:<tag>

   (see `bioconductor-genarise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genarise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genarise.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genarise
   :alt:   (downloads)
.. |docker_bioconductor-genarise| image:: https://quay.io/repository/biocontainers/bioconductor-genarise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genarise
.. _`bioconductor-genarise/tags`: https://quay.io/repository/biocontainers/bioconductor-genarise?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genarise";
        var versions = ["1.74.0","1.70.0","1.68.0","1.66.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genarise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genarise/README.html