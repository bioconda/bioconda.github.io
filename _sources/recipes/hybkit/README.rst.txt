:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybkit'
.. highlight: bash

hybkit
======

.. conda:recipe:: hybkit
   :replaces_section_title:
   :noindex:

   Hybkit toolkit and Python3 API chimeric genomic data analysis from proximity ligation methods.

   :homepage: https://github.com/RenneLab/hybkit
   :license: GPL-3.0
   :recipe: /`hybkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybkit/meta.yaml>`_

   


.. conda:package:: hybkit

   |downloads_hybkit| |docker_hybkit|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hybkit

   and update with::

      conda update hybkit

   or use the docker container::

      docker pull quay.io/biocontainers/hybkit:<tag>

   (see `hybkit/tags`_ for valid values for ``<tag>``)


.. |downloads_hybkit| image:: https://img.shields.io/conda/dn/bioconda/hybkit.svg?style=flat
   :target: https://anaconda.org/bioconda/hybkit
   :alt:   (downloads)
.. |docker_hybkit| image:: https://quay.io/repository/biocontainers/hybkit/status
   :target: https://quay.io/repository/biocontainers/hybkit
.. _`hybkit/tags`: https://quay.io/repository/biocontainers/hybkit?tab=tags


.. raw:: html

    <script>
        var package = "hybkit";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybkit/README.html