:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npstructures'
.. highlight: bash

npstructures
============

.. conda:recipe:: npstructures
   :replaces_section_title:
   :noindex:

   Simple data structures that augments the numpy library

   :homepage: https://github.com/bionumpy/npstructures
   :license: MIT
   :recipe: /`npstructures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures/meta.yaml>`_

   


.. conda:package:: npstructures

   |downloads_npstructures| |docker_npstructures|

   :versions:
      
      

      ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``

      

   
   :depends numpy: ``>=1.20,<1.24``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install npstructures

   and update with::

      conda update npstructures

   or use the docker container::

      docker pull quay.io/biocontainers/npstructures:<tag>

   (see `npstructures/tags`_ for valid values for ``<tag>``)


.. |downloads_npstructures| image:: https://img.shields.io/conda/dn/bioconda/npstructures.svg?style=flat
   :target: https://anaconda.org/bioconda/npstructures
   :alt:   (downloads)
.. |docker_npstructures| image:: https://quay.io/repository/biocontainers/npstructures/status
   :target: https://quay.io/repository/biocontainers/npstructures
.. _`npstructures/tags`: https://quay.io/repository/biocontainers/npstructures?tab=tags


.. raw:: html

    <script>
        var package = "npstructures";
        var versions = ["0.2.12","0.2.11","0.2.10","0.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npstructures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npstructures/README.html