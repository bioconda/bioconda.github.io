:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magphi'
.. highlight: bash

magphi
======

.. conda:recipe:: magphi
   :replaces_section_title:
   :noindex:

   A bioinformatics tool allowing for examnination and extraction of genomic features using seed sequences.

   :homepage: https://github.com/milnus/Magphi
   :documentation: https://github.com/milnus/Magphi/wiki
   
   :license: MIT / MIT
   :recipe: /`magphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magphi/meta.yaml>`_

   


.. conda:package:: magphi

   |downloads_magphi| |docker_magphi|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.1-0``,  ``0.1.6-0``,  ``0.1.3-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.12.0``
   :depends numpy: ``1.21.2``
   :depends pybedtools: ``0.8.2``
   :depends python: ``>=3.9``
   :depends samtools: ``1.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magphi

   and update with::

      conda update magphi

   or use the docker container::

      docker pull quay.io/biocontainers/magphi:<tag>

   (see `magphi/tags`_ for valid values for ``<tag>``)


.. |downloads_magphi| image:: https://img.shields.io/conda/dn/bioconda/magphi.svg?style=flat
   :target: https://anaconda.org/bioconda/magphi
   :alt:   (downloads)
.. |docker_magphi| image:: https://quay.io/repository/biocontainers/magphi/status
   :target: https://quay.io/repository/biocontainers/magphi
.. _`magphi/tags`: https://quay.io/repository/biocontainers/magphi?tab=tags


.. raw:: html

    <script>
        var package = "magphi";
        var versions = ["2.0.0","1.0.1","0.1.6","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magphi/README.html