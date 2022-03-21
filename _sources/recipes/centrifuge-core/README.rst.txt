:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrifuge-core'
.. highlight: bash

centrifuge-core
===============

.. conda:recipe:: centrifuge-core
   :replaces_section_title:
   :noindex:

   Classifier for metagenomic sequences. Does not include evaluation scripts

   :homepage: https://github.com/DaehwanKimLab/centrifuge
   :license: GPL3
   :recipe: /`centrifuge-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge-core/meta.yaml>`_
   :links: biotools: :biotools:`Centrifuge`, doi: :doi:`10.1101/gr.210641.116`

   


.. conda:package:: centrifuge-core

   |downloads_centrifuge-core| |docker_centrifuge-core|

   :versions:
      
      

      ``1.0.4_beta-2``,  ``1.0.4_beta-1``,  ``1.0.4_beta-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: 
   :depends tar: 
   :depends wget: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install centrifuge-core

   and update with::

      conda update centrifuge-core

   or use the docker container::

      docker pull quay.io/biocontainers/centrifuge-core:<tag>

   (see `centrifuge-core/tags`_ for valid values for ``<tag>``)


.. |downloads_centrifuge-core| image:: https://img.shields.io/conda/dn/bioconda/centrifuge-core.svg?style=flat
   :target: https://anaconda.org/bioconda/centrifuge-core
   :alt:   (downloads)
.. |docker_centrifuge-core| image:: https://quay.io/repository/biocontainers/centrifuge-core/status
   :target: https://quay.io/repository/biocontainers/centrifuge-core
.. _`centrifuge-core/tags`: https://quay.io/repository/biocontainers/centrifuge-core?tab=tags


.. raw:: html

    <script>
        var package = "centrifuge-core";
        var versions = ["1.0.4_beta","1.0.4_beta","1.0.4_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuge-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuge-core/README.html