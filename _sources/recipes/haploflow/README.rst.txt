:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploflow'
.. highlight: bash

haploflow
=========

.. conda:recipe:: haploflow
   :replaces_section_title:
   :noindex:

   Strain\-aware viral genome assembler for short read sequence data

   :homepage: https://github.com/hzi-bifo/Haploflow
   :license: Apache-2.0 AND MIT
   :recipe: /`haploflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow/meta.yaml>`_

   Haploflow is a strain\-aware viral genome assembler for short read sequence data. 
   It uses a flow algorithm on a deBruijn graph data structure to resolve viral strains. 
   Haploflow is still actively under development and written entirely in C\+\+.



.. conda:package:: haploflow

   |downloads_haploflow| |docker_haploflow|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haploflow

   and update with::

      conda update haploflow

   or use the docker container::

      docker pull quay.io/biocontainers/haploflow:<tag>

   (see `haploflow/tags`_ for valid values for ``<tag>``)


.. |downloads_haploflow| image:: https://img.shields.io/conda/dn/bioconda/haploflow.svg?style=flat
   :target: https://anaconda.org/bioconda/haploflow
   :alt:   (downloads)
.. |docker_haploflow| image:: https://quay.io/repository/biocontainers/haploflow/status
   :target: https://quay.io/repository/biocontainers/haploflow
.. _`haploflow/tags`: https://quay.io/repository/biocontainers/haploflow?tab=tags


.. raw:: html

    <script>
        var package = "haploflow";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploflow/README.html