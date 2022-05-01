:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bte'
.. highlight: bash

bte
===

.. conda:recipe:: bte
   :replaces_section_title:
   :noindex:

   Cython wrapper enabling use of the MAT library in Python.

   :homepage: https://github.com/jmcbroome/BTE
   :license: MIT / MIT
   :recipe: /`bte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bte/meta.yaml>`_

   


.. conda:package:: bte

   |downloads_bte| |docker_bte|

   :versions:
      
      

      ``0.8.0-0``

      

   
   :depends boost-cpp: ``1.73.0.*``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends protobuf: ``3.19.*``
   :depends python: ``>=3.8,<3.9.0a0 *_cpython``
   :depends python_abi: ``3.8.* *_cp38``
   :depends tbb-devel: ``2019.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bte

   and update with::

      conda update bte

   or use the docker container::

      docker pull quay.io/biocontainers/bte:<tag>

   (see `bte/tags`_ for valid values for ``<tag>``)


.. |downloads_bte| image:: https://img.shields.io/conda/dn/bioconda/bte.svg?style=flat
   :target: https://anaconda.org/bioconda/bte
   :alt:   (downloads)
.. |docker_bte| image:: https://quay.io/repository/biocontainers/bte/status
   :target: https://quay.io/repository/biocontainers/bte
.. _`bte/tags`: https://quay.io/repository/biocontainers/bte?tab=tags


.. raw:: html

    <script>
        var package = "bte";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bte/README.html