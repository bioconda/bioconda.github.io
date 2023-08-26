:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riblast'
.. highlight: bash

riblast
=======

.. conda:recipe:: riblast
   :replaces_section_title:
   :noindex:

   RIblast is ultrafast RNA\-RNA interaction prediction software.

   :homepage: https://github.com/fukunagatsu/RIblast
   :license: MIT License
   :recipe: /`riblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riblast/meta.yaml>`_

   


.. conda:package:: riblast

   |downloads_riblast| |docker_riblast|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riblast

   and update with::

      conda update riblast

   or use the docker container::

      docker pull quay.io/biocontainers/riblast:<tag>

   (see `riblast/tags`_ for valid values for ``<tag>``)


.. |downloads_riblast| image:: https://img.shields.io/conda/dn/bioconda/riblast.svg?style=flat
   :target: https://anaconda.org/bioconda/riblast
   :alt:   (downloads)
.. |docker_riblast| image:: https://quay.io/repository/biocontainers/riblast/status
   :target: https://quay.io/repository/biocontainers/riblast
.. _`riblast/tags`: https://quay.io/repository/biocontainers/riblast?tab=tags


.. raw:: html

    <script>
        var package = "riblast";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riblast/README.html