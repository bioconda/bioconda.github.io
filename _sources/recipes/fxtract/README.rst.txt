:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fxtract'
.. highlight: bash

fxtract
=======

.. conda:recipe:: fxtract
   :replaces_section_title:
   :noindex:

   Extract sequences from a fastx file given a subsequence or identifier.

   :homepage: https://github.com/ctSkennerton/fxtract
   :license: MIT / MIT
   :recipe: /`fxtract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fxtract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fxtract/meta.yaml>`_

   


.. conda:package:: fxtract

   |downloads_fxtract| |docker_fxtract|

   :versions:
      
      

      ``2.4-2``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fxtract

   and update with::

      conda update fxtract

   or use the docker container::

      docker pull quay.io/biocontainers/fxtract:<tag>

   (see `fxtract/tags`_ for valid values for ``<tag>``)


.. |downloads_fxtract| image:: https://img.shields.io/conda/dn/bioconda/fxtract.svg?style=flat
   :target: https://anaconda.org/bioconda/fxtract
   :alt:   (downloads)
.. |docker_fxtract| image:: https://quay.io/repository/biocontainers/fxtract/status
   :target: https://quay.io/repository/biocontainers/fxtract
.. _`fxtract/tags`: https://quay.io/repository/biocontainers/fxtract?tab=tags


.. raw:: html

    <script>
        var package = "fxtract";
        var versions = ["2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fxtract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fxtract/README.html