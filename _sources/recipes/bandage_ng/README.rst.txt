:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage_ng'
.. highlight: bash

bandage_ng
==========

.. conda:recipe:: bandage_ng
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily

   :homepage: https://github.com/asl/BandageNG
   :license: GPL3 / GNU General Public License, version 3
   :recipe: /`bandage_ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage_ng

   |downloads_bandage_ng| |docker_bandage_ng|

   :versions:
      
      

      ``2022.09-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends qt6-main: 
   :depends xorg-libxrender: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bandage_ng

   and update with::

      conda update bandage_ng

   or use the docker container::

      docker pull quay.io/biocontainers/bandage_ng:<tag>

   (see `bandage_ng/tags`_ for valid values for ``<tag>``)


.. |downloads_bandage_ng| image:: https://img.shields.io/conda/dn/bioconda/bandage_ng.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage_ng
   :alt:   (downloads)
.. |docker_bandage_ng| image:: https://quay.io/repository/biocontainers/bandage_ng/status
   :target: https://quay.io/repository/biocontainers/bandage_ng
.. _`bandage_ng/tags`: https://quay.io/repository/biocontainers/bandage_ng?tab=tags


.. raw:: html

    <script>
        var package = "bandage_ng";
        var versions = ["2022.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage_ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage_ng/README.html