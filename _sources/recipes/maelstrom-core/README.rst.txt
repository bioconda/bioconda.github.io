:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maelstrom-core'
.. highlight: bash

maelstrom-core
==============

.. conda:recipe:: maelstrom-core
   :replaces_section_title:
   :noindex:

   Rust utilities for NGS data processing.

   :homepage: https://github.com/bihealth/maelstrom-core
   :license: MIT
   :recipe: /`maelstrom-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maelstrom-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maelstrom-core/meta.yaml>`_

   


.. conda:package:: maelstrom-core

   |downloads_maelstrom-core| |docker_maelstrom-core|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maelstrom-core

   and update with::

      conda update maelstrom-core

   or use the docker container::

      docker pull quay.io/biocontainers/maelstrom-core:<tag>

   (see `maelstrom-core/tags`_ for valid values for ``<tag>``)


.. |downloads_maelstrom-core| image:: https://img.shields.io/conda/dn/bioconda/maelstrom-core.svg?style=flat
   :target: https://anaconda.org/bioconda/maelstrom-core
   :alt:   (downloads)
.. |docker_maelstrom-core| image:: https://quay.io/repository/biocontainers/maelstrom-core/status
   :target: https://quay.io/repository/biocontainers/maelstrom-core
.. _`maelstrom-core/tags`: https://quay.io/repository/biocontainers/maelstrom-core?tab=tags


.. raw:: html

    <script>
        var package = "maelstrom-core";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maelstrom-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maelstrom-core/README.html