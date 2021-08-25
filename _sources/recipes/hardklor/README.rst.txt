:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hardklor'
.. highlight: bash

hardklor
========

.. conda:recipe:: hardklor
   :replaces_section_title:
   :noindex:

   Analyze mass spectra

   :homepage: https://github.com/mhoopmann/hardklor
   :license: Apache License, Version 2.0
   :recipe: /`hardklor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: hardklor

   |downloads_hardklor| |docker_hardklor|

   :versions:
      
      

      ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hardklor

   and update with::

      conda update hardklor

   or use the docker container::

      docker pull quay.io/biocontainers/hardklor:<tag>

   (see `hardklor/tags`_ for valid values for ``<tag>``)


.. |downloads_hardklor| image:: https://img.shields.io/conda/dn/bioconda/hardklor.svg?style=flat
   :target: https://anaconda.org/bioconda/hardklor
   :alt:   (downloads)
.. |docker_hardklor| image:: https://quay.io/repository/biocontainers/hardklor/status
   :target: https://quay.io/repository/biocontainers/hardklor
.. _`hardklor/tags`: https://quay.io/repository/biocontainers/hardklor?tab=tags


.. raw:: html

    <script>
        var package = "hardklor";
        var versions = ["2.3.2","2.3.2","2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hardklor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hardklor/README.html