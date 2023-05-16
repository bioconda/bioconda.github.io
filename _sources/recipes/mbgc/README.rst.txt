:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbgc'
.. highlight: bash

mbgc
====

.. conda:recipe:: mbgc
   :replaces_section_title:
   :noindex:

   A tool for compressing collection of genomes in FASTA format

   :homepage: https://github.com/kowallus/mbgc
   :license: GPL / GPL3
   :recipe: /`mbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbgc/meta.yaml>`_

   


.. conda:package:: mbgc

   |downloads_mbgc| |docker_mbgc|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mbgc

   and update with::

      conda update mbgc

   or use the docker container::

      docker pull quay.io/biocontainers/mbgc:<tag>

   (see `mbgc/tags`_ for valid values for ``<tag>``)


.. |downloads_mbgc| image:: https://img.shields.io/conda/dn/bioconda/mbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/mbgc
   :alt:   (downloads)
.. |docker_mbgc| image:: https://quay.io/repository/biocontainers/mbgc/status
   :target: https://quay.io/repository/biocontainers/mbgc
.. _`mbgc/tags`: https://quay.io/repository/biocontainers/mbgc?tab=tags


.. raw:: html

    <script>
        var package = "mbgc";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbgc/README.html