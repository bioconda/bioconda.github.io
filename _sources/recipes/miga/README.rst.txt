:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miga'
.. highlight: bash

miga
====

.. conda:recipe:: miga
   :replaces_section_title:
   :noindex:

   Python package to optimize mutual information between two multiple sequence alignment.

   :homepage: https://github.com/caioss/miga
   :developer docs: https://github.com/caioss/miga/
   :license: LGPL-3.0
   :recipe: /`miga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miga/meta.yaml>`_

   


.. conda:package:: miga

   |downloads_miga| |docker_miga|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miga

   and update with::

      conda update miga

   or use the docker container::

      docker pull quay.io/biocontainers/miga:<tag>

   (see `miga/tags`_ for valid values for ``<tag>``)


.. |downloads_miga| image:: https://img.shields.io/conda/dn/bioconda/miga.svg?style=flat
   :target: https://anaconda.org/bioconda/miga
   :alt:   (downloads)
.. |docker_miga| image:: https://quay.io/repository/biocontainers/miga/status
   :target: https://quay.io/repository/biocontainers/miga
.. _`miga/tags`: https://quay.io/repository/biocontainers/miga?tab=tags


.. raw:: html

    <script>
        var package = "miga";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miga/README.html