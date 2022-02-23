:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gwama'
.. highlight: bash

gwama
=====

.. conda:recipe:: gwama
   :replaces_section_title:
   :noindex:

   Genome\-Wide Association Meta Analysis

   :homepage: https://www.geenivaramu.ee/en/tools/gwama
   :license: BSD-3-clause
   :recipe: /`gwama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama/meta.yaml>`_
   :links: biotools: :biotools:`GWAMA`, doi: :doi:`10.1186/1471-2105-11-288`

   


.. conda:package:: gwama

   |downloads_gwama| |docker_gwama|

   :versions:
      
      

      ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gwama

   and update with::

      conda update gwama

   or use the docker container::

      docker pull quay.io/biocontainers/gwama:<tag>

   (see `gwama/tags`_ for valid values for ``<tag>``)


.. |downloads_gwama| image:: https://img.shields.io/conda/dn/bioconda/gwama.svg?style=flat
   :target: https://anaconda.org/bioconda/gwama
   :alt:   (downloads)
.. |docker_gwama| image:: https://quay.io/repository/biocontainers/gwama/status
   :target: https://quay.io/repository/biocontainers/gwama
.. _`gwama/tags`: https://quay.io/repository/biocontainers/gwama?tab=tags


.. raw:: html

    <script>
        var package = "gwama";
        var versions = ["2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gwama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gwama/README.html