:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'luciphor2'
.. highlight: bash

luciphor2
=========

.. conda:recipe:: luciphor2
   :replaces_section_title:
   :noindex:

   Luciphor2 performs PTM\-site localization on MS\/MS data

   :homepage: http://luciphor2.sourceforge.net/
   :license: Apache-2.0
   :recipe: /`luciphor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2/meta.yaml>`_

   


.. conda:package:: luciphor2

   |downloads_luciphor2| |docker_luciphor2|

   :versions:
      
      

      ``2020_04_03-1``,  ``2020_04_03-0``,  ``2018_06_28-1``,  ``2018_06_28-0``

      

   
   :depends openjdk: ``>=6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install luciphor2

   and update with::

      conda update luciphor2

   or use the docker container::

      docker pull quay.io/biocontainers/luciphor2:<tag>

   (see `luciphor2/tags`_ for valid values for ``<tag>``)


.. |downloads_luciphor2| image:: https://img.shields.io/conda/dn/bioconda/luciphor2.svg?style=flat
   :target: https://anaconda.org/bioconda/luciphor2
   :alt:   (downloads)
.. |docker_luciphor2| image:: https://quay.io/repository/biocontainers/luciphor2/status
   :target: https://quay.io/repository/biocontainers/luciphor2
.. _`luciphor2/tags`: https://quay.io/repository/biocontainers/luciphor2?tab=tags


.. raw:: html

    <script>
        var package = "luciphor2";
        var versions = ["2020_04_03","2020_04_03","2018_06_28","2018_06_28"];
    </script>





Notes
-----
Adds a wrapper shell script \"luciphor2\".
This shell wrapper is called \"luciphor2\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run with \"luciphor \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/luciphor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/luciphor2/README.html