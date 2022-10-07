:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abismal'
.. highlight: bash

abismal
=======

.. conda:recipe:: abismal
   :replaces_section_title:
   :noindex:

   abismal is a fast and memory\-efficient mapper for short bisulfite sequencing reads


   :homepage: https://github.com/smithlabcode/abismal
   :documentation: https://github.com/smithlabcode/abismal/blob/master/docs/MANUAL.md
   
   :license: GPL-3.0-only
   :recipe: /`abismal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abismal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abismal/meta.yaml>`_

   


.. conda:package:: abismal

   |downloads_abismal| |docker_abismal|

   :versions:
      
      

      ``3.1.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abismal

   and update with::

      conda update abismal

   or use the docker container::

      docker pull quay.io/biocontainers/abismal:<tag>

   (see `abismal/tags`_ for valid values for ``<tag>``)


.. |downloads_abismal| image:: https://img.shields.io/conda/dn/bioconda/abismal.svg?style=flat
   :target: https://anaconda.org/bioconda/abismal
   :alt:   (downloads)
.. |docker_abismal| image:: https://quay.io/repository/biocontainers/abismal/status
   :target: https://quay.io/repository/biocontainers/abismal
.. _`abismal/tags`: https://quay.io/repository/biocontainers/abismal?tab=tags


.. raw:: html

    <script>
        var package = "abismal";
        var versions = ["3.1.1","3.0.0","3.0.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abismal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abismal/README.html