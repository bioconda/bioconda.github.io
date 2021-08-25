:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bd2k-python-lib'
.. highlight: bash

bd2k-python-lib
===============

.. conda:recipe:: bd2k-python-lib
   :replaces_section_title:
   :noindex:

   The BD2K Python module kitchen sink

   :homepage: https://github.com/BD2KGenomics/bd2k-python-lib
   :license: Apache 2.0
   :recipe: /`bd2k-python-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bd2k-python-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bd2k-python-lib/meta.yaml>`_

   


.. conda:package:: bd2k-python-lib

   |downloads_bd2k-python-lib| |docker_bd2k-python-lib|

   :versions:
      
      

      ``1.14a1.dev48-2``,  ``1.14a1.dev48-1``,  ``1.14a1.dev48-0``,  ``1.14a1.dev37-1``,  ``1.14a1.dev37-0``,  ``1.14a1.dev33-0``,  ``1.14a1.dev29-0``,  ``1.14a1.dev28-0``,  ``1.13.dev14-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bd2k-python-lib

   and update with::

      conda update bd2k-python-lib

   or use the docker container::

      docker pull quay.io/biocontainers/bd2k-python-lib:<tag>

   (see `bd2k-python-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_bd2k-python-lib| image:: https://img.shields.io/conda/dn/bioconda/bd2k-python-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/bd2k-python-lib
   :alt:   (downloads)
.. |docker_bd2k-python-lib| image:: https://quay.io/repository/biocontainers/bd2k-python-lib/status
   :target: https://quay.io/repository/biocontainers/bd2k-python-lib
.. _`bd2k-python-lib/tags`: https://quay.io/repository/biocontainers/bd2k-python-lib?tab=tags


.. raw:: html

    <script>
        var package = "bd2k-python-lib";
        var versions = ["1.14a1.dev48","1.14a1.dev48","1.14a1.dev48","1.14a1.dev37","1.14a1.dev37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bd2k-python-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bd2k-python-lib/README.html