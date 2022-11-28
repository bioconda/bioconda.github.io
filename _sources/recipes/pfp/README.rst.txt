:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pfp'
.. highlight: bash

pfp
===

.. conda:recipe:: pfp
   :replaces_section_title:
   :noindex:

   Prefix Free Parsing.

   :homepage: https://github.com/marco-oliva/pfp
   :license: MIT
   :recipe: /`pfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfp/meta.yaml>`_

   


.. conda:package:: pfp

   |downloads_pfp| |docker_pfp|

   :versions:
      
      

      ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pfp

   and update with::

      conda update pfp

   or use the docker container::

      docker pull quay.io/biocontainers/pfp:<tag>

   (see `pfp/tags`_ for valid values for ``<tag>``)


.. |downloads_pfp| image:: https://img.shields.io/conda/dn/bioconda/pfp.svg?style=flat
   :target: https://anaconda.org/bioconda/pfp
   :alt:   (downloads)
.. |docker_pfp| image:: https://quay.io/repository/biocontainers/pfp/status
   :target: https://quay.io/repository/biocontainers/pfp
.. _`pfp/tags`: https://quay.io/repository/biocontainers/pfp?tab=tags


.. raw:: html

    <script>
        var package = "pfp";
        var versions = ["0.3.6","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfp/README.html