:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignoth'
.. highlight: bash

alignoth
========

.. conda:recipe:: alignoth
   :replaces_section_title:
   :noindex:

   A tool for creating alignment plots from bam files

   :homepage: https://github.com/koesterlab/alignoth
   :license: MIT
   :recipe: /`alignoth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth/meta.yaml>`_

   


.. conda:package:: alignoth

   |downloads_alignoth| |docker_alignoth|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libcurl: ``>=7.83.1,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openssl: ``>=1.1.1p,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alignoth

   and update with::

      conda update alignoth

   or use the docker container::

      docker pull quay.io/biocontainers/alignoth:<tag>

   (see `alignoth/tags`_ for valid values for ``<tag>``)


.. |downloads_alignoth| image:: https://img.shields.io/conda/dn/bioconda/alignoth.svg?style=flat
   :target: https://anaconda.org/bioconda/alignoth
   :alt:   (downloads)
.. |docker_alignoth| image:: https://quay.io/repository/biocontainers/alignoth/status
   :target: https://quay.io/repository/biocontainers/alignoth
.. _`alignoth/tags`: https://quay.io/repository/biocontainers/alignoth?tab=tags


.. raw:: html

    <script>
        var package = "alignoth";
        var versions = ["0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignoth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignoth/README.html