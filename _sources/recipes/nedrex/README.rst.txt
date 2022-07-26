:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nedrex'
.. highlight: bash

nedrex
======

.. conda:recipe:: nedrex
   :replaces_section_title:
   :noindex:

   A Python library for interfacing with the NeDRex API

   :homepage: https://pypi.org/project/nedrex/
   :license: MIT
   :recipe: /`nedrex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedrex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedrex/meta.yaml>`_

   


.. conda:package:: nedrex

   |downloads_nedrex| |docker_nedrex|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends attrs: ``>=21.4.0``
   :depends cachetools: ``>=4.2.4``
   :depends more-itertools: ``>=8.13.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.27.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nedrex

   and update with::

      conda update nedrex

   or use the docker container::

      docker pull quay.io/biocontainers/nedrex:<tag>

   (see `nedrex/tags`_ for valid values for ``<tag>``)


.. |downloads_nedrex| image:: https://img.shields.io/conda/dn/bioconda/nedrex.svg?style=flat
   :target: https://anaconda.org/bioconda/nedrex
   :alt:   (downloads)
.. |docker_nedrex| image:: https://quay.io/repository/biocontainers/nedrex/status
   :target: https://quay.io/repository/biocontainers/nedrex
.. _`nedrex/tags`: https://quay.io/repository/biocontainers/nedrex?tab=tags


.. raw:: html

    <script>
        var package = "nedrex";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nedrex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nedrex/README.html