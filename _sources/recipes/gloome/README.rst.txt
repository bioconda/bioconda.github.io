:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gloome'
.. highlight: bash

gloome
======

.. conda:recipe:: gloome
   :replaces_section_title:
   :noindex:

   GLOOME is a program that analyzes the evolution of phyletic patterns within the likelihood framework.

   :homepage: https://gloome.tau.ac.il/
   :license: GNU GENERAL PUBLIC LICENSE v3 (see https://gloome.tau.ac.il/source.php)
   :recipe: /`gloome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome/meta.yaml>`_
   :links: biotools: :biotools:`gloome`

   


.. conda:package:: gloome

   |downloads_gloome| |docker_gloome|

   :versions:
      
      

      ``VR01.266-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gloome

   and update with::

      conda update gloome

   or use the docker container::

      docker pull quay.io/biocontainers/gloome:<tag>

   (see `gloome/tags`_ for valid values for ``<tag>``)


.. |downloads_gloome| image:: https://img.shields.io/conda/dn/bioconda/gloome.svg?style=flat
   :target: https://anaconda.org/bioconda/gloome
   :alt:   (downloads)
.. |docker_gloome| image:: https://quay.io/repository/biocontainers/gloome/status
   :target: https://quay.io/repository/biocontainers/gloome
.. _`gloome/tags`: https://quay.io/repository/biocontainers/gloome?tab=tags


.. raw:: html

    <script>
        var package = "gloome";
        var versions = ["VR01.266"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gloome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gloome/README.html