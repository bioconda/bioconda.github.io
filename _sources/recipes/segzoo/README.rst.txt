:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segzoo'
.. highlight: bash

segzoo
======

.. conda:recipe:: segzoo
   :replaces_section_title:
   :noindex:

   System for turnkey analysis of semi\-automated genome annotations

   :homepage: https://github.com/hoffmangroup/segzoo
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`segzoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo/meta.yaml>`_

   


.. conda:package:: segzoo

   |downloads_segzoo| |docker_segzoo|

   :versions:
      
      

      ``1.0.7-0``

      

   
   :depends ggd: 
   :depends pybedtools: 
   :depends python: ``3.8.*``
   :depends seaborn: 
   :depends segtools: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segzoo

   and update with::

      conda update segzoo

   or use the docker container::

      docker pull quay.io/biocontainers/segzoo:<tag>

   (see `segzoo/tags`_ for valid values for ``<tag>``)


.. |downloads_segzoo| image:: https://img.shields.io/conda/dn/bioconda/segzoo.svg?style=flat
   :target: https://anaconda.org/bioconda/segzoo
   :alt:   (downloads)
.. |docker_segzoo| image:: https://quay.io/repository/biocontainers/segzoo/status
   :target: https://quay.io/repository/biocontainers/segzoo
.. _`segzoo/tags`: https://quay.io/repository/biocontainers/segzoo?tab=tags


.. raw:: html

    <script>
        var package = "segzoo";
        var versions = ["1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segzoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segzoo/README.html