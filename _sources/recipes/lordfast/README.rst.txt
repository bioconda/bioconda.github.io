:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lordfast'
.. highlight: bash

lordfast
========

.. conda:recipe:: lordfast
   :replaces_section_title:
   :noindex:

   Sensitive and Fast Alignment Search Tool for Long Read sequencing Data

   :homepage: https://github.com/vpc-ccg/lordfast
   :license: GPL-3.0
   :recipe: /`lordfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lordfast/meta.yaml>`_

   


.. conda:package:: lordfast

   |downloads_lordfast| |docker_lordfast|

   :versions:
      
      

      ``0.0.10-5``,  ``0.0.10-4``,  ``0.0.10-3``,  ``0.0.10-2``,  ``0.0.10-1``,  ``0.0.10-0``,  ``0.0.9-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lordfast

   and update with::

      conda update lordfast

   or use the docker container::

      docker pull quay.io/biocontainers/lordfast:<tag>

   (see `lordfast/tags`_ for valid values for ``<tag>``)


.. |downloads_lordfast| image:: https://img.shields.io/conda/dn/bioconda/lordfast.svg?style=flat
   :target: https://anaconda.org/bioconda/lordfast
   :alt:   (downloads)
.. |docker_lordfast| image:: https://quay.io/repository/biocontainers/lordfast/status
   :target: https://quay.io/repository/biocontainers/lordfast
.. _`lordfast/tags`: https://quay.io/repository/biocontainers/lordfast?tab=tags


.. raw:: html

    <script>
        var package = "lordfast";
        var versions = ["0.0.10","0.0.10","0.0.10","0.0.10","0.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lordfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lordfast/README.html