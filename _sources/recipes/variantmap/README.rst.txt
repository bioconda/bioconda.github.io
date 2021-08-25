:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantmap'
.. highlight: bash

variantmap
==========

.. conda:recipe:: variantmap
   :replaces_section_title:
   :noindex:

   Interactive heatmap for multi\-sample structural variant analysis

   :homepage: https://github.com/cytham/variantmap
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap/meta.yaml>`_

   


.. conda:package:: variantmap

   |downloads_variantmap| |docker_variantmap|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends dash: ``>=1.17.0``
   :depends pandas: ``>=1.1.4``
   :depends pytables: ``>=3.6.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install variantmap

   and update with::

      conda update variantmap

   or use the docker container::

      docker pull quay.io/biocontainers/variantmap:<tag>

   (see `variantmap/tags`_ for valid values for ``<tag>``)


.. |downloads_variantmap| image:: https://img.shields.io/conda/dn/bioconda/variantmap.svg?style=flat
   :target: https://anaconda.org/bioconda/variantmap
   :alt:   (downloads)
.. |docker_variantmap| image:: https://quay.io/repository/biocontainers/variantmap/status
   :target: https://quay.io/repository/biocontainers/variantmap
.. _`variantmap/tags`: https://quay.io/repository/biocontainers/variantmap?tab=tags


.. raw:: html

    <script>
        var package = "variantmap";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantmap/README.html