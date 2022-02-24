:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goat'
.. highlight: bash

goat
====

.. conda:recipe:: goat
   :replaces_section_title:
   :noindex:

   Query metadata for any taxon across the tree of life.

   :homepage: https://github.com/genomehubs/goat-cli
   :license: MIT
   :recipe: /`goat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goat/meta.yaml>`_

   


.. conda:package:: goat

   |downloads_goat| |docker_goat|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goat

   and update with::

      conda update goat

   or use the docker container::

      docker pull quay.io/biocontainers/goat:<tag>

   (see `goat/tags`_ for valid values for ``<tag>``)


.. |downloads_goat| image:: https://img.shields.io/conda/dn/bioconda/goat.svg?style=flat
   :target: https://anaconda.org/bioconda/goat
   :alt:   (downloads)
.. |docker_goat| image:: https://quay.io/repository/biocontainers/goat/status
   :target: https://quay.io/repository/biocontainers/goat
.. _`goat/tags`: https://quay.io/repository/biocontainers/goat?tab=tags


.. raw:: html

    <script>
        var package = "goat";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goat/README.html