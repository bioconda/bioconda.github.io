:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metalign'
.. highlight: bash

metalign
========

.. conda:recipe:: metalign
   :replaces_section_title:
   :noindex:

   Metalign\: efficient alignment\-based metagenomic profiling via containment min hash

   :homepage: https://github.com/nlapier2/Metalign
   :license: MIT / MIT
   :recipe: /`metalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metalign/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.01.17.910521`

   


.. conda:package:: metalign

   |downloads_metalign| |docker_metalign|

   :versions:
      
      

      ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.3-0``,  ``0.12.2-0``

      

   
   :depends cmash: ``>=0.4.0``
   :depends kmc: 
   :depends minimap2: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metalign

   and update with::

      conda update metalign

   or use the docker container::

      docker pull quay.io/biocontainers/metalign:<tag>

   (see `metalign/tags`_ for valid values for ``<tag>``)


.. |downloads_metalign| image:: https://img.shields.io/conda/dn/bioconda/metalign.svg?style=flat
   :target: https://anaconda.org/bioconda/metalign
   :alt:   (downloads)
.. |docker_metalign| image:: https://quay.io/repository/biocontainers/metalign/status
   :target: https://quay.io/repository/biocontainers/metalign
.. _`metalign/tags`: https://quay.io/repository/biocontainers/metalign?tab=tags


.. raw:: html

    <script>
        var package = "metalign";
        var versions = ["0.12.5","0.12.5","0.12.3","0.12.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metalign/README.html