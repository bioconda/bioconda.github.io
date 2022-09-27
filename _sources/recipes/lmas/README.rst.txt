:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lmas'
.. highlight: bash

lmas
====

.. conda:recipe:: lmas
   :replaces_section_title:
   :noindex:

   LMAS \- Last \(Meta\)Genomic Assembler Standing

   :homepage: https://github.com/B-UMMI/LMAS
   :license: GPL-3
   :recipe: /`lmas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lmas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lmas/meta.yaml>`_

   


.. conda:package:: lmas

   |downloads_lmas| |docker_lmas|

   :versions:
      
      

      ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends nextflow: ``>=21.01.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lmas

   and update with::

      conda update lmas

   or use the docker container::

      docker pull quay.io/biocontainers/lmas:<tag>

   (see `lmas/tags`_ for valid values for ``<tag>``)


.. |downloads_lmas| image:: https://img.shields.io/conda/dn/bioconda/lmas.svg?style=flat
   :target: https://anaconda.org/bioconda/lmas
   :alt:   (downloads)
.. |docker_lmas| image:: https://quay.io/repository/biocontainers/lmas/status
   :target: https://quay.io/repository/biocontainers/lmas
.. _`lmas/tags`: https://quay.io/repository/biocontainers/lmas?tab=tags


.. raw:: html

    <script>
        var package = "lmas";
        var versions = ["2.0.8","2.0.7","2.0.6","2.0.5","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lmas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lmas/README.html