:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hurry.filesize'
.. highlight: bash

hurry.filesize
==============

.. conda:recipe:: hurry.filesize
   :replaces_section_title:
   :noindex:

   A simple Python library for human readable file sizes \(or anything sized in bytes\).

   :homepage: None
   :license: ZPL 2.1
   :recipe: /`hurry.filesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hurry.filesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hurry.filesize/meta.yaml>`_

   


.. conda:package:: hurry.filesize

   |downloads_hurry.filesize| |docker_hurry.filesize|

   :versions:
      
      

      ``0.9-0``

      

   
   :depends python: ``2.7*``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hurry.filesize

   and update with::

      conda update hurry.filesize

   or use the docker container::

      docker pull quay.io/biocontainers/hurry.filesize:<tag>

   (see `hurry.filesize/tags`_ for valid values for ``<tag>``)


.. |downloads_hurry.filesize| image:: https://img.shields.io/conda/dn/bioconda/hurry.filesize.svg?style=flat
   :target: https://anaconda.org/bioconda/hurry.filesize
   :alt:   (downloads)
.. |docker_hurry.filesize| image:: https://quay.io/repository/biocontainers/hurry.filesize/status
   :target: https://quay.io/repository/biocontainers/hurry.filesize
.. _`hurry.filesize/tags`: https://quay.io/repository/biocontainers/hurry.filesize?tab=tags


.. raw:: html

    <script>
        var package = "hurry.filesize";
        var versions = ["0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hurry.filesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hurry.filesize/README.html