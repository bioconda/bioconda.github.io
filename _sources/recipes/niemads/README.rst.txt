:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'niemads'
.. highlight: bash

niemads
=======

.. conda:recipe:: niemads
   :replaces_section_title:
   :noindex:

   NiemaDS\: Non\-standard data structures for Python 2 and 3

   :homepage: https://github.com/niemasd/NiemaDS
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`niemads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/niemads/meta.yaml>`_

   


.. conda:package:: niemads

   |downloads_niemads| |docker_niemads|

   :versions:
      
      

      ``1.0.14-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install niemads

   and update with::

      conda update niemads

   or use the docker container::

      docker pull quay.io/biocontainers/niemads:<tag>

   (see `niemads/tags`_ for valid values for ``<tag>``)


.. |downloads_niemads| image:: https://img.shields.io/conda/dn/bioconda/niemads.svg?style=flat
   :target: https://anaconda.org/bioconda/niemads
   :alt:   (downloads)
.. |docker_niemads| image:: https://quay.io/repository/biocontainers/niemads/status
   :target: https://quay.io/repository/biocontainers/niemads
.. _`niemads/tags`: https://quay.io/repository/biocontainers/niemads?tab=tags


.. raw:: html

    <script>
        var package = "niemads";
        var versions = ["1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/niemads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/niemads/README.html