:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clove'
.. highlight: bash

clove
=====

.. conda:recipe:: clove
   :replaces_section_title:
   :noindex:

   CLOVE\: Classification of genomic fusions into structural variation events.

   :homepage: https://github.com/PapenfussLab/clove
   :license: GPL-2.0
   :recipe: /`clove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove/meta.yaml>`_

   


.. conda:package:: clove

   |downloads_clove| |docker_clove|

   :versions:
      
      

      ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clove

   and update with::

      conda update clove

   or use the docker container::

      docker pull quay.io/biocontainers/clove:<tag>

   (see `clove/tags`_ for valid values for ``<tag>``)


.. |downloads_clove| image:: https://img.shields.io/conda/dn/bioconda/clove.svg?style=flat
   :target: https://anaconda.org/bioconda/clove
   :alt:   (downloads)
.. |docker_clove| image:: https://quay.io/repository/biocontainers/clove/status
   :target: https://quay.io/repository/biocontainers/clove
.. _`clove/tags`: https://quay.io/repository/biocontainers/clove?tab=tags


.. raw:: html

    <script>
        var package = "clove";
        var versions = ["0.17","0.17","0.17"];
    </script>





Notes
-----
Clove is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"clove\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"clove \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clove/README.html