:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmbiolib'
.. highlight: bash

dmbiolib
========

.. conda:recipe:: dmbiolib
   :replaces_section_title:
   :noindex:

   Library of Python functions for bioinformatics

   :homepage: https://github.com/damienmarsic/dmbiolib
   :documentation: https://dmbiolib.readthedocs.io/
   
   :license: GPL-3.0
   :recipe: /`dmbiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib/meta.yaml>`_

   


.. conda:package:: dmbiolib

   |downloads_dmbiolib| |docker_dmbiolib|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dmbiolib

   and update with::

      conda update dmbiolib

   or use the docker container::

      docker pull quay.io/biocontainers/dmbiolib:<tag>

   (see `dmbiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_dmbiolib| image:: https://img.shields.io/conda/dn/bioconda/dmbiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/dmbiolib
   :alt:   (downloads)
.. |docker_dmbiolib| image:: https://quay.io/repository/biocontainers/dmbiolib/status
   :target: https://quay.io/repository/biocontainers/dmbiolib
.. _`dmbiolib/tags`: https://quay.io/repository/biocontainers/dmbiolib?tab=tags


.. raw:: html

    <script>
        var package = "dmbiolib";
        var versions = ["0.4.0","0.3.10","0.3.9","0.3.8","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmbiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmbiolib/README.html