:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spclust'
.. highlight: bash

spclust
=======

.. conda:recipe:: spclust
   :replaces_section_title:
   :noindex:

   Spectral clustering for biological sequences

   :homepage: https://github.com/johnymatar/SpCLUST/
   :license: gpl-3.0-or-later
   :recipe: /`spclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust/meta.yaml>`_

   


.. conda:package:: spclust

   |downloads_spclust| |docker_spclust|

   :versions:
      
      

      ``28.5.19-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openmpi: ``>=4.1.5,<5.0a0``
   :depends openmpi-mpicxx: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spclust

   and update with::

      conda update spclust

   or use the docker container::

      docker pull quay.io/biocontainers/spclust:<tag>

   (see `spclust/tags`_ for valid values for ``<tag>``)


.. |downloads_spclust| image:: https://img.shields.io/conda/dn/bioconda/spclust.svg?style=flat
   :target: https://anaconda.org/bioconda/spclust
   :alt:   (downloads)
.. |docker_spclust| image:: https://quay.io/repository/biocontainers/spclust/status
   :target: https://quay.io/repository/biocontainers/spclust
.. _`spclust/tags`: https://quay.io/repository/biocontainers/spclust?tab=tags


.. raw:: html

    <script>
        var package = "spclust";
        var versions = ["28.5.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spclust/README.html