:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npyscreen'
.. highlight: bash

npyscreen
=========

.. conda:recipe:: npyscreen
   :replaces_section_title:
   :noindex:

   Writing user interfaces without all that ugly mucking about in hyperspace

   :homepage: http://www.npcole.com/npyscreen/
   :license: BSD / BSD License
   :recipe: /`npyscreen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npyscreen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npyscreen/meta.yaml>`_

   


.. conda:package:: npyscreen

   |downloads_npyscreen| |docker_npyscreen|

   :versions:
      
      

      ``4.10.5-3``,  ``4.10.5-2``,  ``4.10.5-1``,  ``4.10.5-0``

      

   
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install npyscreen

   and update with::

      conda update npyscreen

   or use the docker container::

      docker pull quay.io/biocontainers/npyscreen:<tag>

   (see `npyscreen/tags`_ for valid values for ``<tag>``)


.. |downloads_npyscreen| image:: https://img.shields.io/conda/dn/bioconda/npyscreen.svg?style=flat
   :target: https://anaconda.org/bioconda/npyscreen
   :alt:   (downloads)
.. |docker_npyscreen| image:: https://quay.io/repository/biocontainers/npyscreen/status
   :target: https://quay.io/repository/biocontainers/npyscreen
.. _`npyscreen/tags`: https://quay.io/repository/biocontainers/npyscreen?tab=tags


.. raw:: html

    <script>
        var package = "npyscreen";
        var versions = ["4.10.5","4.10.5","4.10.5","4.10.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npyscreen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npyscreen/README.html