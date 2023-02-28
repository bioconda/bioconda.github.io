:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'traitar'
.. highlight: bash

traitar
=======

.. conda:recipe:: traitar
   :replaces_section_title:
   :noindex:

   traitar \- The microbial trait analyzer

   :homepage: https://github.com/nick-youngblut/traitar3
   :license: GPL3 / GNU General Public, version 3 (GPL-3.0)
   :recipe: /`traitar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/traitar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/traitar/meta.yaml>`_

   Traitar is a software for characterizing microbial samples from nucleotide or protein sequences


.. conda:package:: traitar

   |downloads_traitar| |docker_traitar|

   :versions:
      
      

      ``3.0.1-0``,  ``1.1.2-0``

      

   
   :depends hmmer: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``>1.2,<2``
   :depends python: ``>=3.7,<3.11``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install traitar

   and update with::

      conda update traitar

   or use the docker container::

      docker pull quay.io/biocontainers/traitar:<tag>

   (see `traitar/tags`_ for valid values for ``<tag>``)


.. |downloads_traitar| image:: https://img.shields.io/conda/dn/bioconda/traitar.svg?style=flat
   :target: https://anaconda.org/bioconda/traitar
   :alt:   (downloads)
.. |docker_traitar| image:: https://quay.io/repository/biocontainers/traitar/status
   :target: https://quay.io/repository/biocontainers/traitar
.. _`traitar/tags`: https://quay.io/repository/biocontainers/traitar?tab=tags


.. raw:: html

    <script>
        var package = "traitar";
        var versions = ["3.0.1","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/traitar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/traitar/README.html