:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mnnpy'
.. highlight: bash

mnnpy
=====

.. conda:recipe:: mnnpy
   :replaces_section_title:
   :noindex:

   Mutual nearest neighbors correction in python.

   :homepage: http://github.com/chriscainx/mnnpy
   :license: BSD / BSD-3-Clause
   :recipe: /`mnnpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mnnpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mnnpy/meta.yaml>`_

   


.. conda:package:: mnnpy

   |downloads_mnnpy| |docker_mnnpy|

   :versions:
      
      

      ``0.1.9.5-4``,  ``0.1.9.5-3``,  ``0.1.9.5-2``,  ``0.1.9.5-1``,  ``0.1.9.5-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends anndata: 
   :depends libgcc-ng: ``>=12``
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mnnpy

   and update with::

      conda update mnnpy

   or use the docker container::

      docker pull quay.io/biocontainers/mnnpy:<tag>

   (see `mnnpy/tags`_ for valid values for ``<tag>``)


.. |downloads_mnnpy| image:: https://img.shields.io/conda/dn/bioconda/mnnpy.svg?style=flat
   :target: https://anaconda.org/bioconda/mnnpy
   :alt:   (downloads)
.. |docker_mnnpy| image:: https://quay.io/repository/biocontainers/mnnpy/status
   :target: https://quay.io/repository/biocontainers/mnnpy
.. _`mnnpy/tags`: https://quay.io/repository/biocontainers/mnnpy?tab=tags


.. raw:: html

    <script>
        var package = "mnnpy";
        var versions = ["0.1.9.5","0.1.9.5","0.1.9.5","0.1.9.5","0.1.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mnnpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mnnpy/README.html