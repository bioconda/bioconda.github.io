:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hpsuissero'
.. highlight: bash

hpsuissero
==========

.. conda:recipe:: hpsuissero
   :replaces_section_title:
   :noindex:

   Rapid Haemophilus parasuis serotyping pipeline for Nanopore Data

   :homepage: https://github.com/jimmyliu1326/HpsuisSero
   :license: MIT
   :recipe: /`hpsuissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpsuissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpsuissero/meta.yaml>`_

   


.. conda:package:: hpsuissero

   |downloads_hpsuissero| |docker_hpsuissero|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast: ``>=2.6``
   :depends flye: ``>=2.7.1``
   :depends medaka: ``1.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hpsuissero

   and update with::

      conda update hpsuissero

   or use the docker container::

      docker pull quay.io/biocontainers/hpsuissero:<tag>

   (see `hpsuissero/tags`_ for valid values for ``<tag>``)


.. |downloads_hpsuissero| image:: https://img.shields.io/conda/dn/bioconda/hpsuissero.svg?style=flat
   :target: https://anaconda.org/bioconda/hpsuissero
   :alt:   (downloads)
.. |docker_hpsuissero| image:: https://quay.io/repository/biocontainers/hpsuissero/status
   :target: https://quay.io/repository/biocontainers/hpsuissero
.. _`hpsuissero/tags`: https://quay.io/repository/biocontainers/hpsuissero?tab=tags


.. raw:: html

    <script>
        var package = "hpsuissero";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hpsuissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hpsuissero/README.html