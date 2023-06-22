:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tassel'
.. highlight: bash

tassel
======

.. conda:recipe:: tassel
   :replaces_section_title:
   :noindex:

   TASSEL is a software package to evaluate traits associations\, evolutionary patterns\, and linkage disequilibrium.

   :homepage: https://www.maizegenetics.net/tassel
   :license: LGPL V2.1
   :recipe: /`tassel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tassel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tassel/meta.yaml>`_

   


.. conda:package:: tassel

   |downloads_tassel| |docker_tassel|

   :versions:
      
      

      ``5.2.89-0``,  ``5.2.40-3``,  ``5.2.40-2``,  ``5.2.40-1``,  ``5.2.40-0``,  ``4.3.15-1``,  ``4.3.15-0``,  ``3.0.174-1``,  ``3.0.174-0``

      

   
   :depends openjdk: ``>=8.0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tassel

   and update with::

      conda update tassel

   or use the docker container::

      docker pull quay.io/biocontainers/tassel:<tag>

   (see `tassel/tags`_ for valid values for ``<tag>``)


.. |downloads_tassel| image:: https://img.shields.io/conda/dn/bioconda/tassel.svg?style=flat
   :target: https://anaconda.org/bioconda/tassel
   :alt:   (downloads)
.. |docker_tassel| image:: https://quay.io/repository/biocontainers/tassel/status
   :target: https://quay.io/repository/biocontainers/tassel
.. _`tassel/tags`: https://quay.io/repository/biocontainers/tassel?tab=tags


.. raw:: html

    <script>
        var package = "tassel";
        var versions = ["5.2.89","5.2.40","5.2.40","5.2.40","5.2.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tassel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tassel/README.html