:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secedo'
.. highlight: bash

secedo
======

.. conda:recipe:: secedo
   :replaces_section_title:
   :noindex:

   SNV\-based clustering for single\-cell sequencing data

   :homepage: https://github.com/ratschlab/secedo
   :license: MIT
   :recipe: /`secedo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo/meta.yaml>`_
   :links: biotools: :biotools:`secedo`

   


.. conda:package:: secedo

   |downloads_secedo| |docker_secedo|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openblas: 
   :depends openmp: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secedo

   and update with::

      conda update secedo

   or use the docker container::

      docker pull quay.io/biocontainers/secedo:<tag>

   (see `secedo/tags`_ for valid values for ``<tag>``)


.. |downloads_secedo| image:: https://img.shields.io/conda/dn/bioconda/secedo.svg?style=flat
   :target: https://anaconda.org/bioconda/secedo
   :alt:   (downloads)
.. |docker_secedo| image:: https://quay.io/repository/biocontainers/secedo/status
   :target: https://quay.io/repository/biocontainers/secedo
.. _`secedo/tags`: https://quay.io/repository/biocontainers/secedo?tab=tags


.. raw:: html

    <script>
        var package = "secedo";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secedo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secedo/README.html