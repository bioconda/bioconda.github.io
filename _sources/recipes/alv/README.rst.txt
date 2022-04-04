:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alv'
.. highlight: bash

alv
===

.. conda:recipe:: alv
   :replaces_section_title:
   :noindex:

   A console\-based sequence alignment viewer

   :homepage: https://github.com/arvestad/alv
   :license: GPL3 / GPL-3.0-only
   :recipe: /`alv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv/meta.yaml>`_

   


.. conda:package:: alv

   |downloads_alv| |docker_alv|

   :versions:
      
      

      ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends colorama: ``>=0.3.8``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alv

   and update with::

      conda update alv

   or use the docker container::

      docker pull quay.io/biocontainers/alv:<tag>

   (see `alv/tags`_ for valid values for ``<tag>``)


.. |downloads_alv| image:: https://img.shields.io/conda/dn/bioconda/alv.svg?style=flat
   :target: https://anaconda.org/bioconda/alv
   :alt:   (downloads)
.. |docker_alv| image:: https://quay.io/repository/biocontainers/alv/status
   :target: https://quay.io/repository/biocontainers/alv
.. _`alv/tags`: https://quay.io/repository/biocontainers/alv?tab=tags


.. raw:: html

    <script>
        var package = "alv";
        var versions = ["1.7.1","1.7.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alv/README.html