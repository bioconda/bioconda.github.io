:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcifpp'
.. highlight: bash

libcifpp
========

.. conda:recipe:: libcifpp
   :replaces_section_title:
   :noindex:

   Library containing code to manipulate mmCIF and PDB files

   :homepage: https://github.com/PDB-REDO/libcifpp
   :license: BSD / BSD-2
   :recipe: /`libcifpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp/meta.yaml>`_

   


.. conda:package:: libcifpp

   |downloads_libcifpp| |docker_libcifpp|

   :versions:
      
      

      ``3.0.3-0``,  ``3.0.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libcifpp

   and update with::

      conda update libcifpp

   or use the docker container::

      docker pull quay.io/biocontainers/libcifpp:<tag>

   (see `libcifpp/tags`_ for valid values for ``<tag>``)


.. |downloads_libcifpp| image:: https://img.shields.io/conda/dn/bioconda/libcifpp.svg?style=flat
   :target: https://anaconda.org/bioconda/libcifpp
   :alt:   (downloads)
.. |docker_libcifpp| image:: https://quay.io/repository/biocontainers/libcifpp/status
   :target: https://quay.io/repository/biocontainers/libcifpp
.. _`libcifpp/tags`: https://quay.io/repository/biocontainers/libcifpp?tab=tags


.. raw:: html

    <script>
        var package = "libcifpp";
        var versions = ["3.0.3","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcifpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcifpp/README.html