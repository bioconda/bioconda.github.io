:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cafe'
.. highlight: bash

cafe
====

.. conda:recipe:: cafe
   :replaces_section_title:
   :noindex:

   Computational Analysis of gene Family Evolution \(CAFE\)

   :homepage: https://hahnlab.github.io/CAFE/
   :license: IU OPEN SOURCE LICENSE (see https://github.com/hahnlab/CAFE/blob/master/LICENSE)
   :recipe: /`cafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cafe/meta.yaml>`_
   :links: biotools: :biotools:`cafe`

   


.. conda:package:: cafe

   |downloads_cafe| |docker_cafe|

   :versions:
      
      

      ``4.2.1-1``,  ``4.2.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cafe

   and update with::

      conda update cafe

   or use the docker container::

      docker pull quay.io/biocontainers/cafe:<tag>

   (see `cafe/tags`_ for valid values for ``<tag>``)


.. |downloads_cafe| image:: https://img.shields.io/conda/dn/bioconda/cafe.svg?style=flat
   :target: https://anaconda.org/bioconda/cafe
   :alt:   (downloads)
.. |docker_cafe| image:: https://quay.io/repository/biocontainers/cafe/status
   :target: https://quay.io/repository/biocontainers/cafe
.. _`cafe/tags`: https://quay.io/repository/biocontainers/cafe?tab=tags


.. raw:: html

    <script>
        var package = "cafe";
        var versions = ["4.2.1","4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cafe/README.html