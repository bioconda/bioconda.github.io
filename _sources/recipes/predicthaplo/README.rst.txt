:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predicthaplo'
.. highlight: bash

predicthaplo
============

.. conda:recipe:: predicthaplo
   :replaces_section_title:
   :noindex:

   This software aims at reconstructing haplotypes from next\-generation sequencing data.

   :homepage: https://github.com/cbg-ethz/PredictHaplo
   :license: GPLv3
   :recipe: /`predicthaplo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predicthaplo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predicthaplo/meta.yaml>`_
   :links: biotools: :biotools:`PredictHaplo`

   


.. conda:package:: predicthaplo

   |downloads_predicthaplo| |docker_predicthaplo|

   :versions:
      
      

      ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install predicthaplo

   and update with::

      conda update predicthaplo

   or use the docker container::

      docker pull quay.io/biocontainers/predicthaplo:<tag>

   (see `predicthaplo/tags`_ for valid values for ``<tag>``)


.. |downloads_predicthaplo| image:: https://img.shields.io/conda/dn/bioconda/predicthaplo.svg?style=flat
   :target: https://anaconda.org/bioconda/predicthaplo
   :alt:   (downloads)
.. |docker_predicthaplo| image:: https://quay.io/repository/biocontainers/predicthaplo/status
   :target: https://quay.io/repository/biocontainers/predicthaplo
.. _`predicthaplo/tags`: https://quay.io/repository/biocontainers/predicthaplo?tab=tags


.. raw:: html

    <script>
        var package = "predicthaplo";
        var versions = ["2.1.4","2.1.4","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predicthaplo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predicthaplo/README.html