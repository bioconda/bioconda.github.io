:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngslca'
.. highlight: bash

ngslca
======

.. conda:recipe:: ngslca
   :replaces_section_title:
   :noindex:

   ngsLCA\: fast and flexible taxonomic classification of DNA reads aligned to reference databases

   :homepage: https://github.com/miwipe/ngsLCA
   :license: GPLv3, MIT
   :recipe: /`ngslca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngslca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngslca/meta.yaml>`_

   


.. conda:package:: ngslca

   |downloads_ngslca| |docker_ngslca|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngslca

   and update with::

      conda update ngslca

   or use the docker container::

      docker pull quay.io/biocontainers/ngslca:<tag>

   (see `ngslca/tags`_ for valid values for ``<tag>``)


.. |downloads_ngslca| image:: https://img.shields.io/conda/dn/bioconda/ngslca.svg?style=flat
   :target: https://anaconda.org/bioconda/ngslca
   :alt:   (downloads)
.. |docker_ngslca| image:: https://quay.io/repository/biocontainers/ngslca/status
   :target: https://quay.io/repository/biocontainers/ngslca
.. _`ngslca/tags`: https://quay.io/repository/biocontainers/ngslca?tab=tags


.. raw:: html

    <script>
        var package = "ngslca";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngslca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngslca/README.html