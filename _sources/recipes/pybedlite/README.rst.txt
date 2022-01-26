:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedlite'
.. highlight: bash

pybedlite
=========

.. conda:recipe:: pybedlite
   :replaces_section_title:
   :noindex:

   Lightweight python classes for interfacing with bed intervals

   :homepage: https://pypi.org/project/pybedlite/
   :license: MIT
   :recipe: /`pybedlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedlite/meta.yaml>`_

   


.. conda:package:: pybedlite

   |downloads_pybedlite| |docker_pybedlite|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends attrs: ``>=19.3.0``
   :depends intervaltree: ``>=3.1.0``
   :depends python: ``>=3.6``
   :depends typing_extensions: ``>=3.7.4``
   :depends typing_inspect: ``>=0.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybedlite

   and update with::

      conda update pybedlite

   or use the docker container::

      docker pull quay.io/biocontainers/pybedlite:<tag>

   (see `pybedlite/tags`_ for valid values for ``<tag>``)


.. |downloads_pybedlite| image:: https://img.shields.io/conda/dn/bioconda/pybedlite.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedlite
   :alt:   (downloads)
.. |docker_pybedlite| image:: https://quay.io/repository/biocontainers/pybedlite/status
   :target: https://quay.io/repository/biocontainers/pybedlite
.. _`pybedlite/tags`: https://quay.io/repository/biocontainers/pybedlite?tab=tags


.. raw:: html

    <script>
        var package = "pybedlite";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedlite/README.html