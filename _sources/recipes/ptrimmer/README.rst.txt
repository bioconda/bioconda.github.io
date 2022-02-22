:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptrimmer'
.. highlight: bash

ptrimmer
========

.. conda:recipe:: ptrimmer
   :replaces_section_title:
   :noindex:

   Used to trim off the primer sequence from mutiplex amplicon sequencing

   :homepage: https://github.com/DMU-lilab/pTrimmer
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`ptrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptrimmer/meta.yaml>`_

   


.. conda:package:: ptrimmer

   |downloads_ptrimmer| |docker_ptrimmer|

   :versions:
      
      

      ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ptrimmer

   and update with::

      conda update ptrimmer

   or use the docker container::

      docker pull quay.io/biocontainers/ptrimmer:<tag>

   (see `ptrimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_ptrimmer| image:: https://img.shields.io/conda/dn/bioconda/ptrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/ptrimmer
   :alt:   (downloads)
.. |docker_ptrimmer| image:: https://quay.io/repository/biocontainers/ptrimmer/status
   :target: https://quay.io/repository/biocontainers/ptrimmer
.. _`ptrimmer/tags`: https://quay.io/repository/biocontainers/ptrimmer?tab=tags


.. raw:: html

    <script>
        var package = "ptrimmer";
        var versions = ["1.3.3","1.3.3","1.3.3","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptrimmer/README.html