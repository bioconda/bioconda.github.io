:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velvet'
.. highlight: bash

velvet
======

.. conda:recipe:: velvet
   :replaces_section_title:
   :noindex:

   Sequence Assembler for short reads

   :homepage: https://www.ebi.ac.uk/~zerbino/velvet/
   :license: GPL
   :recipe: /`velvet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet/meta.yaml>`_
   :links: biotools: :biotools:`velvet`

   


.. conda:package:: velvet

   |downloads_velvet| |docker_velvet|

   :versions:
      
      

      ``1.2.10-5``,  ``1.2.10-4``,  ``1.2.10-3``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install velvet

   and update with::

      conda update velvet

   or use the docker container::

      docker pull quay.io/biocontainers/velvet:<tag>

   (see `velvet/tags`_ for valid values for ``<tag>``)


.. |downloads_velvet| image:: https://img.shields.io/conda/dn/bioconda/velvet.svg?style=flat
   :target: https://anaconda.org/bioconda/velvet
   :alt:   (downloads)
.. |docker_velvet| image:: https://quay.io/repository/biocontainers/velvet/status
   :target: https://quay.io/repository/biocontainers/velvet
.. _`velvet/tags`: https://quay.io/repository/biocontainers/velvet?tab=tags


.. raw:: html

    <script>
        var package = "velvet";
        var versions = ["1.2.10","1.2.10","1.2.10","1.2.10","1.2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velvet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velvet/README.html