:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msalign2'
.. highlight: bash

msalign2
========

.. conda:recipe:: msalign2
   :replaces_section_title:
   :noindex:

   Aligns 2 CE\-MS or LC\-MS datasets using accurate mass information.

   :homepage: http://www.ms-utils.org/msalign2/index.html
   :license: GPL3
   :recipe: /`msalign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msalign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msalign2/meta.yaml>`_
   :links: biotools: :biotools:`msalign2`, doi: :doi:`10.1007/s00216-009-3166-1`

   


.. conda:package:: msalign2

   |downloads_msalign2| |docker_msalign2|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgd: ``>=2.3.0,<2.4.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msalign2

   and update with::

      conda update msalign2

   or use the docker container::

      docker pull quay.io/biocontainers/msalign2:<tag>

   (see `msalign2/tags`_ for valid values for ``<tag>``)


.. |downloads_msalign2| image:: https://img.shields.io/conda/dn/bioconda/msalign2.svg?style=flat
   :target: https://anaconda.org/bioconda/msalign2
   :alt:   (downloads)
.. |docker_msalign2| image:: https://quay.io/repository/biocontainers/msalign2/status
   :target: https://quay.io/repository/biocontainers/msalign2
.. _`msalign2/tags`: https://quay.io/repository/biocontainers/msalign2?tab=tags


.. raw:: html

    <script>
        var package = "msalign2";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msalign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msalign2/README.html