:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pardre'
.. highlight: bash

pardre
======

.. conda:recipe:: pardre
   :replaces_section_title:
   :noindex:

   ParDRe is a parallel tool to remove duplicate reads.

   :homepage: https://sourceforge.net/projects/pardre/
   :license: GPL-3.0-only
   :recipe: /`pardre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pardre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pardre/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bioinformatics/btw038`

   


.. conda:package:: pardre

   |downloads_pardre| |docker_pardre|

   :versions:
      
      

      ``2.2.5-1``,  ``2.2.5-0``

      

   
   :depends libcxx: ``>=14.0.4``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends mpich: ``>=4.0.2,<5.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pardre

   and update with::

      conda update pardre

   or use the docker container::

      docker pull quay.io/biocontainers/pardre:<tag>

   (see `pardre/tags`_ for valid values for ``<tag>``)


.. |downloads_pardre| image:: https://img.shields.io/conda/dn/bioconda/pardre.svg?style=flat
   :target: https://anaconda.org/bioconda/pardre
   :alt:   (downloads)
.. |docker_pardre| image:: https://quay.io/repository/biocontainers/pardre/status
   :target: https://quay.io/repository/biocontainers/pardre
.. _`pardre/tags`: https://quay.io/repository/biocontainers/pardre?tab=tags


.. raw:: html

    <script>
        var package = "pardre";
        var versions = ["2.2.5","2.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pardre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pardre/README.html