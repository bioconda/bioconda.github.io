:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-morpholibj'
.. highlight: bash

fiji-morpholibj
===============

.. conda:recipe:: fiji-morpholibj
   :replaces_section_title:
   :noindex:

   MorphoLibJ is a collection of mathematical morphology methods and plugins for ImageJ\, created at INRA\-IJPB Modeling and Digital Imaging lab.

   :homepage: http://imagej.net/MorphoLibJ
   :license: LGPL3
   :recipe: /`fiji-morpholibj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-morpholibj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-morpholibj/meta.yaml>`_

   


.. conda:package:: fiji-morpholibj

   |downloads_fiji-morpholibj| |docker_fiji-morpholibj|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.3.1-0``

      

   
   :depends fiji: ``>=20170530``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fiji-morpholibj

   and update with::

      conda update fiji-morpholibj

   or use the docker container::

      docker pull quay.io/biocontainers/fiji-morpholibj:<tag>

   (see `fiji-morpholibj/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-morpholibj| image:: https://img.shields.io/conda/dn/bioconda/fiji-morpholibj.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-morpholibj
   :alt:   (downloads)
.. |docker_fiji-morpholibj| image:: https://quay.io/repository/biocontainers/fiji-morpholibj/status
   :target: https://quay.io/repository/biocontainers/fiji-morpholibj
.. _`fiji-morpholibj/tags`: https://quay.io/repository/biocontainers/fiji-morpholibj?tab=tags


.. raw:: html

    <script>
        var package = "fiji-morpholibj";
        var versions = ["1.5.0","1.4.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-morpholibj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-morpholibj/README.html