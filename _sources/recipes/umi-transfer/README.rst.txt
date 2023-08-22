:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umi-transfer'
.. highlight: bash

umi-transfer
============

.. conda:recipe:: umi-transfer
   :replaces_section_title:
   :noindex:

   A tool for transferring Unique Molecular Identifiers \(UMIs\) from a separate FastQ file.

   :homepage: https://github.com/SciLifeLab/umi-transfer
   :license: MIT / MIT
   :recipe: /`umi-transfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi-transfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi-transfer/meta.yaml>`_

   


.. conda:package:: umi-transfer

   |downloads_umi-transfer| |docker_umi-transfer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umi-transfer

   and update with::

      conda update umi-transfer

   or use the docker container::

      docker pull quay.io/biocontainers/umi-transfer:<tag>

   (see `umi-transfer/tags`_ for valid values for ``<tag>``)


.. |downloads_umi-transfer| image:: https://img.shields.io/conda/dn/bioconda/umi-transfer.svg?style=flat
   :target: https://anaconda.org/bioconda/umi-transfer
   :alt:   (downloads)
.. |docker_umi-transfer| image:: https://quay.io/repository/biocontainers/umi-transfer/status
   :target: https://quay.io/repository/biocontainers/umi-transfer
.. _`umi-transfer/tags`: https://quay.io/repository/biocontainers/umi-transfer?tab=tags


.. raw:: html

    <script>
        var package = "umi-transfer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi-transfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi-transfer/README.html