:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lja'
.. highlight: bash

lja
===

.. conda:recipe:: lja
   :replaces_section_title:
   :noindex:

   La Jolla Assembler\(LJA\) \- tool for genome assembly from PacBio HiFI reads based on de Bruijn graphs

   :homepage: https://github.com/AntonBankevich/LJA
   :license: BSD-3-Clause
   :recipe: /`lja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lja/meta.yaml>`_

   


.. conda:package:: lja

   |downloads_lja| |docker_lja|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lja

   and update with::

      conda update lja

   or use the docker container::

      docker pull quay.io/biocontainers/lja:<tag>

   (see `lja/tags`_ for valid values for ``<tag>``)


.. |downloads_lja| image:: https://img.shields.io/conda/dn/bioconda/lja.svg?style=flat
   :target: https://anaconda.org/bioconda/lja
   :alt:   (downloads)
.. |docker_lja| image:: https://quay.io/repository/biocontainers/lja/status
   :target: https://quay.io/repository/biocontainers/lja
.. _`lja/tags`: https://quay.io/repository/biocontainers/lja?tab=tags


.. raw:: html

    <script>
        var package = "lja";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lja/README.html