:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edlib'
.. highlight: bash

edlib
=====

.. conda:recipe:: edlib
   :replaces_section_title:
   :noindex:

   C\/C\+\+ library and program for sequence alignment using edit \(Levenshtein\) distance

   :homepage: https://github.com/Martinsos/edlib/
   :license: MIT
   :recipe: /`edlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edlib/meta.yaml>`_

   


.. conda:package:: edlib

   |downloads_edlib| |docker_edlib|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.0.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install edlib

   and update with::

      conda update edlib

   or use the docker container::

      docker pull quay.io/biocontainers/edlib:<tag>

   (see `edlib/tags`_ for valid values for ``<tag>``)


.. |downloads_edlib| image:: https://img.shields.io/conda/dn/bioconda/edlib.svg?style=flat
   :target: https://anaconda.org/bioconda/edlib
   :alt:   (downloads)
.. |docker_edlib| image:: https://quay.io/repository/biocontainers/edlib/status
   :target: https://quay.io/repository/biocontainers/edlib
.. _`edlib/tags`: https://quay.io/repository/biocontainers/edlib?tab=tags


.. raw:: html

    <script>
        var package = "edlib";
        var versions = ["1.2.3","1.2.3","1.2.1","1.2.0","1.1.2"];
    </script>





Notes
-----
From version 1.1.0 onward\, the \`aligner\` executable has been renamed to \`edlib\-aligner\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edlib/README.html