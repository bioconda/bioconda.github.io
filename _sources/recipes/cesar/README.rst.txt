:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cesar'
.. highlight: bash

cesar
=====

.. conda:recipe:: cesar
   :replaces_section_title:
   :noindex:

   CESAR 2.0 is a method to realign coding exons or genes to DNA sequences using a Hidden Markov Model


   :homepage: https://github.com/hillerlab/CESAR2.0
   :license: MIT license
   :recipe: /`cesar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesar/meta.yaml>`_

   


.. conda:package:: cesar

   |downloads_cesar| |docker_cesar|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cesar

   and update with::

      conda update cesar

   or use the docker container::

      docker pull quay.io/biocontainers/cesar:<tag>

   (see `cesar/tags`_ for valid values for ``<tag>``)


.. |downloads_cesar| image:: https://img.shields.io/conda/dn/bioconda/cesar.svg?style=flat
   :target: https://anaconda.org/bioconda/cesar
   :alt:   (downloads)
.. |docker_cesar| image:: https://quay.io/repository/biocontainers/cesar/status
   :target: https://quay.io/repository/biocontainers/cesar
.. _`cesar/tags`: https://quay.io/repository/biocontainers/cesar?tab=tags


.. raw:: html

    <script>
        var package = "cesar";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cesar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cesar/README.html