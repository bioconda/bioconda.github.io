:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggorthology'
.. highlight: bash

bioconductor-keggorthology
==========================

.. conda:recipe:: bioconductor-keggorthology
   :replaces_section_title:
   :noindex:

   graph support for KO\, KEGG Orthology

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/keggorthology.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggorthology <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology/meta.yaml>`_
   :links: biotools: :biotools:`keggorthology`, doi: :doi:`10.1038/nmeth.3252`

   graphical representation of the Feb 2010 KEGG Orthology. The KEGG orthology is a set of pathway IDs that are not to be confused with the KEGG ortholog IDs.


.. conda:package:: bioconductor-keggorthology

   |downloads_bioconductor-keggorthology| |docker_bioconductor-keggorthology|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  </span></summary>
      

      ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-hgu95av2.db: ``>=3.13.0,<3.14.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggorthology

   and update with::

      conda update bioconductor-keggorthology

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggorthology:<tag>

   (see `bioconductor-keggorthology/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggorthology| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggorthology.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggorthology
   :alt:   (downloads)
.. |docker_bioconductor-keggorthology| image:: https://quay.io/repository/biocontainers/bioconductor-keggorthology/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggorthology
.. _`bioconductor-keggorthology/tags`: https://quay.io/repository/biocontainers/bioconductor-keggorthology?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-keggorthology";
        var versions = ["2.46.0","2.44.0","2.42.0","2.42.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html