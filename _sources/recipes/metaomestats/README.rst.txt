:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaomestats'
.. highlight: bash

metaomestats
============

.. conda:recipe:: metaomestats
   :replaces_section_title:
   :noindex:

   Scripts for calculating statistics from FASTA sequences

   :homepage: https://github.com/raw-lab/metaome_stats
   :license: MIT / MIT
   :recipe: /`metaomestats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaomestats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaomestats/meta.yaml>`_

   


.. conda:package:: metaomestats

   |downloads_metaomestats| |docker_metaomestats|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaomestats

   and update with::

      conda update metaomestats

   or use the docker container::

      docker pull quay.io/biocontainers/metaomestats:<tag>

   (see `metaomestats/tags`_ for valid values for ``<tag>``)


.. |downloads_metaomestats| image:: https://img.shields.io/conda/dn/bioconda/metaomestats.svg?style=flat
   :target: https://anaconda.org/bioconda/metaomestats
   :alt:   (downloads)
.. |docker_metaomestats| image:: https://quay.io/repository/biocontainers/metaomestats/status
   :target: https://quay.io/repository/biocontainers/metaomestats
.. _`metaomestats/tags`: https://quay.io/repository/biocontainers/metaomestats?tab=tags


.. raw:: html

    <script>
        var package = "metaomestats";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaomestats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaomestats/README.html