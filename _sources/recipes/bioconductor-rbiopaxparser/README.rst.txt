:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbiopaxparser'
.. highlight: bash

bioconductor-rbiopaxparser
==========================

.. conda:recipe:: bioconductor-rbiopaxparser
   :replaces_section_title:
   :noindex:

   Parses BioPax files and represents them in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rBiopaxParser.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbiopaxparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbiopaxparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbiopaxparser/meta.yaml>`_
   :links: biotools: :biotools:`rbiopaxparser`

   Parses BioPAX files and represents them in R\, at the moment BioPAX level 2 and level 3 are supported.


.. conda:package:: bioconductor-rbiopaxparser

   |downloads_bioconductor-rbiopaxparser| |docker_bioconductor-rbiopaxparser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbiopaxparser

   and update with::

      conda update bioconductor-rbiopaxparser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbiopaxparser:<tag>

   (see `bioconductor-rbiopaxparser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbiopaxparser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbiopaxparser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbiopaxparser
   :alt:   (downloads)
.. |docker_bioconductor-rbiopaxparser| image:: https://quay.io/repository/biocontainers/bioconductor-rbiopaxparser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbiopaxparser
.. _`bioconductor-rbiopaxparser/tags`: https://quay.io/repository/biocontainers/bioconductor-rbiopaxparser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbiopaxparser";
        var versions = ["2.34.0","2.32.0","2.30.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbiopaxparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbiopaxparser/README.html