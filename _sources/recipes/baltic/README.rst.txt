:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baltic'
.. highlight: bash

baltic
======

.. conda:recipe:: baltic
   :replaces_section_title:
   :noindex:

   Lightweight package for analyzing\, manipulating and visualizing annotated phylogenetic trees

   :homepage: https://github.com/evogytis/baltic
   :license: GPL3 / GPL-3.0
   :recipe: /`baltic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baltic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baltic/meta.yaml>`_

   


.. conda:package:: baltic

   |downloads_baltic| |docker_baltic|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends matplotlib-base: ``>=2.0.0``
   :depends numpy: ``>=1.16``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install baltic

   and update with::

      conda update baltic

   or use the docker container::

      docker pull quay.io/biocontainers/baltic:<tag>

   (see `baltic/tags`_ for valid values for ``<tag>``)


.. |downloads_baltic| image:: https://img.shields.io/conda/dn/bioconda/baltic.svg?style=flat
   :target: https://anaconda.org/bioconda/baltic
   :alt:   (downloads)
.. |docker_baltic| image:: https://quay.io/repository/biocontainers/baltic/status
   :target: https://quay.io/repository/biocontainers/baltic
.. _`baltic/tags`: https://quay.io/repository/biocontainers/baltic?tab=tags


.. raw:: html

    <script>
        var package = "baltic";
        var versions = ["0.2.2","0.2.1","0.1.8","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baltic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baltic/README.html