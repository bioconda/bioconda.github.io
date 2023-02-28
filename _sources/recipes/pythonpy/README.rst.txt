:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pythonpy'
.. highlight: bash

pythonpy
========

.. conda:recipe:: pythonpy
   :replaces_section_title:
   :noindex:

   the swiss army knife of the command line

   :homepage: https://github.com/Russell91/pythonpy
   :license: Unknown
   :recipe: /`pythonpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythonpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythonpy/meta.yaml>`_

   


.. conda:package:: pythonpy

   |downloads_pythonpy| |docker_pythonpy|

   :versions:
      
      

      ``0.4.11-0``,  ``0.4.2-1``,  ``0.4.2-0``

      

   
   :depends python: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pythonpy

   and update with::

      conda update pythonpy

   or use the docker container::

      docker pull quay.io/biocontainers/pythonpy:<tag>

   (see `pythonpy/tags`_ for valid values for ``<tag>``)


.. |downloads_pythonpy| image:: https://img.shields.io/conda/dn/bioconda/pythonpy.svg?style=flat
   :target: https://anaconda.org/bioconda/pythonpy
   :alt:   (downloads)
.. |docker_pythonpy| image:: https://quay.io/repository/biocontainers/pythonpy/status
   :target: https://quay.io/repository/biocontainers/pythonpy
.. _`pythonpy/tags`: https://quay.io/repository/biocontainers/pythonpy?tab=tags


.. raw:: html

    <script>
        var package = "pythonpy";
        var versions = ["0.4.11","0.4.2","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythonpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythonpy/README.html