:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samrefiner'
.. highlight: bash

samrefiner
==========

.. conda:recipe:: samrefiner
   :replaces_section_title:
   :noindex:

   A program for gathering variant information from a SAM formated files

   :homepage: https://github.com/degregory/SAM_Refiner
   :license: GPL / GPLv3
   :recipe: /`samrefiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samrefiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samrefiner/meta.yaml>`_

   


.. conda:package:: samrefiner

   |downloads_samrefiner| |docker_samrefiner|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samrefiner

   and update with::

      conda update samrefiner

   or use the docker container::

      docker pull quay.io/biocontainers/samrefiner:<tag>

   (see `samrefiner/tags`_ for valid values for ``<tag>``)


.. |downloads_samrefiner| image:: https://img.shields.io/conda/dn/bioconda/samrefiner.svg?style=flat
   :target: https://anaconda.org/bioconda/samrefiner
   :alt:   (downloads)
.. |docker_samrefiner| image:: https://quay.io/repository/biocontainers/samrefiner/status
   :target: https://quay.io/repository/biocontainers/samrefiner
.. _`samrefiner/tags`: https://quay.io/repository/biocontainers/samrefiner?tab=tags


.. raw:: html

    <script>
        var package = "samrefiner";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samrefiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samrefiner/README.html