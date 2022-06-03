:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigscape'
.. highlight: bash

bigscape
========

.. conda:recipe:: bigscape
   :replaces_section_title:
   :noindex:

   Biosynthetic Genes Similarity Clustering and Prospecting Engine.

   :homepage: https://github.com/medema-group/BiG-SCAPE
   :license: GNU Affero v3
   :recipe: /`bigscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigscape/meta.yaml>`_

   


.. conda:package:: bigscape

   |downloads_bigscape| |docker_bigscape|

   :versions:
      
      

      ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``

      

   
   :depends biopython: 
   :depends fasttree: 
   :depends hmmer: 
   :depends networkx: 
   :depends python: ``3.7``
   :depends scikit-learn: ``0.19.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bigscape

   and update with::

      conda update bigscape

   or use the docker container::

      docker pull quay.io/biocontainers/bigscape:<tag>

   (see `bigscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bigscape| image:: https://img.shields.io/conda/dn/bioconda/bigscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bigscape
   :alt:   (downloads)
.. |docker_bigscape| image:: https://quay.io/repository/biocontainers/bigscape/status
   :target: https://quay.io/repository/biocontainers/bigscape
.. _`bigscape/tags`: https://quay.io/repository/biocontainers/bigscape?tab=tags


.. raw:: html

    <script>
        var package = "bigscape";
        var versions = ["1.1.4","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigscape/README.html