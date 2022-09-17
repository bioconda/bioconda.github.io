:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastphylo'
.. highlight: bash

fastphylo
=========

.. conda:recipe:: fastphylo
   :replaces_section_title:
   :noindex:

   Fastphylo is software project containing the implementations of the algorithms \"Fast Computation of Distance Estimators\" and \"Fast Neighbor Joining\".

   :homepage: https://github.com/arvestad/FastPhylo
   :license: MIT
   :recipe: /`fastphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-14-334`

   


.. conda:package:: fastphylo

   |downloads_fastphylo| |docker_fastphylo|

   :versions:
      
      

      ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libxml2: ``>=2.9.14,<2.10.0a0``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends openmpi: ``<4.0.2``
   :depends openmpi: ``>=4.0.1,<4.1.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastphylo

   and update with::

      conda update fastphylo

   or use the docker container::

      docker pull quay.io/biocontainers/fastphylo:<tag>

   (see `fastphylo/tags`_ for valid values for ``<tag>``)


.. |downloads_fastphylo| image:: https://img.shields.io/conda/dn/bioconda/fastphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/fastphylo
   :alt:   (downloads)
.. |docker_fastphylo| image:: https://quay.io/repository/biocontainers/fastphylo/status
   :target: https://quay.io/repository/biocontainers/fastphylo
.. _`fastphylo/tags`: https://quay.io/repository/biocontainers/fastphylo?tab=tags


.. raw:: html

    <script>
        var package = "fastphylo";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastphylo/README.html