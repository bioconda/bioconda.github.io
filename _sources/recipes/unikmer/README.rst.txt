:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unikmer'
.. highlight: bash

unikmer
=======

.. conda:recipe:: unikmer
   :replaces_section_title:
   :noindex:

   toolkit for k\-mer with taxonomic information

   :homepage: https://github.com/shenwei356/unikmer
   :license: MIT
   :recipe: /`unikmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikmer/meta.yaml>`_

   


.. conda:package:: unikmer

   |downloads_unikmer| |docker_unikmer|

   :versions:
      
      

      ``0.19.1-0``,  ``0.19.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unikmer

   and update with::

      conda update unikmer

   or use the docker container::

      docker pull quay.io/biocontainers/unikmer:<tag>

   (see `unikmer/tags`_ for valid values for ``<tag>``)


.. |downloads_unikmer| image:: https://img.shields.io/conda/dn/bioconda/unikmer.svg?style=flat
   :target: https://anaconda.org/bioconda/unikmer
   :alt:   (downloads)
.. |docker_unikmer| image:: https://quay.io/repository/biocontainers/unikmer/status
   :target: https://quay.io/repository/biocontainers/unikmer
.. _`unikmer/tags`: https://quay.io/repository/biocontainers/unikmer?tab=tags


.. raw:: html

    <script>
        var package = "unikmer";
        var versions = ["0.19.1","0.19.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unikmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unikmer/README.html