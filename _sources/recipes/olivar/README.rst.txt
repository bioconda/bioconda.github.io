:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'olivar'
.. highlight: bash

olivar
======

.. conda:recipe:: olivar
   :replaces_section_title:
   :noindex:

   Olivar PCR tiling design

   :homepage: https://gitlab.com/treangenlab/olivar
   :license: MIT
   :recipe: /`olivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/olivar/meta.yaml>`_

   


.. conda:package:: olivar

   |downloads_olivar| |docker_olivar|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.10.0-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.12.0``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install olivar

   and update with::

      conda update olivar

   or use the docker container::

      docker pull quay.io/biocontainers/olivar:<tag>

   (see `olivar/tags`_ for valid values for ``<tag>``)


.. |downloads_olivar| image:: https://img.shields.io/conda/dn/bioconda/olivar.svg?style=flat
   :target: https://anaconda.org/bioconda/olivar
   :alt:   (downloads)
.. |docker_olivar| image:: https://quay.io/repository/biocontainers/olivar/status
   :target: https://quay.io/repository/biocontainers/olivar
.. _`olivar/tags`: https://quay.io/repository/biocontainers/olivar?tab=tags


.. raw:: html

    <script>
        var package = "olivar";
        var versions = ["1.0.1","1.0.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/olivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/olivar/README.html