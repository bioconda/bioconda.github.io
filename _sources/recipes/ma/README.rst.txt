:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ma'
.. highlight: bash

ma
==

.. conda:recipe:: ma
   :replaces_section_title:
   :noindex:

   MA \- The Modular Aligner

   :homepage: https://github.com/ITBE-Lab/MA
   :license: MIT
   :recipe: /`ma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ma/meta.yaml>`_

   


.. conda:package:: ma

   |downloads_ma| |docker_ma|

   :versions:
      
      

      ``2.0.1-0``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ma

   and update with::

      conda update ma

   or use the docker container::

      docker pull quay.io/biocontainers/ma:<tag>

   (see `ma/tags`_ for valid values for ``<tag>``)


.. |downloads_ma| image:: https://img.shields.io/conda/dn/bioconda/ma.svg?style=flat
   :target: https://anaconda.org/bioconda/ma
   :alt:   (downloads)
.. |docker_ma| image:: https://quay.io/repository/biocontainers/ma/status
   :target: https://quay.io/repository/biocontainers/ma
.. _`ma/tags`: https://quay.io/repository/biocontainers/ma?tab=tags


.. raw:: html

    <script>
        var package = "ma";
        var versions = ["2.0.1","1.1.4","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ma/README.html