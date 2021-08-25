:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rascaf'
.. highlight: bash

rascaf
======

.. conda:recipe:: rascaf
   :replaces_section_title:
   :noindex:

   Scaffolding with RNA\-seq read alignment

   :homepage: https://github.com/mourisl/Rascaf/commits/master
   :license: GPL2
   :recipe: /`rascaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf/meta.yaml>`_

   


.. conda:package:: rascaf

   |downloads_rascaf| |docker_rascaf|

   :versions:
      
      

      ``20161129-4``,  ``20161129-3``,  ``20161129-2``,  ``20161129-1``,  ``20161129-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rascaf

   and update with::

      conda update rascaf

   or use the docker container::

      docker pull quay.io/biocontainers/rascaf:<tag>

   (see `rascaf/tags`_ for valid values for ``<tag>``)


.. |downloads_rascaf| image:: https://img.shields.io/conda/dn/bioconda/rascaf.svg?style=flat
   :target: https://anaconda.org/bioconda/rascaf
   :alt:   (downloads)
.. |docker_rascaf| image:: https://quay.io/repository/biocontainers/rascaf/status
   :target: https://quay.io/repository/biocontainers/rascaf
.. _`rascaf/tags`: https://quay.io/repository/biocontainers/rascaf?tab=tags


.. raw:: html

    <script>
        var package = "rascaf";
        var versions = ["20161129","20161129","20161129","20161129","20161129"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rascaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rascaf/README.html