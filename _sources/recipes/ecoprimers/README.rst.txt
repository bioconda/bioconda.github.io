:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ecoprimers'
.. highlight: bash

ecoprimers
==========

.. conda:recipe:: ecoprimers
   :replaces_section_title:
   :noindex:

   ecoPrimers is a software that finds primers from a set of sequence.

   :homepage: https://git.metabarcoding.org/obitools/ecoprimers/wikis/home
   :license: CeCill v2
   :recipe: /`ecoprimers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers/meta.yaml>`_

   


.. conda:package:: ecoprimers

   |downloads_ecoprimers| |docker_ecoprimers|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecoprimers

   and update with::

      conda update ecoprimers

   or use the docker container::

      docker pull quay.io/biocontainers/ecoprimers:<tag>

   (see `ecoprimers/tags`_ for valid values for ``<tag>``)


.. |downloads_ecoprimers| image:: https://img.shields.io/conda/dn/bioconda/ecoprimers.svg?style=flat
   :target: https://anaconda.org/bioconda/ecoprimers
   :alt:   (downloads)
.. |docker_ecoprimers| image:: https://quay.io/repository/biocontainers/ecoprimers/status
   :target: https://quay.io/repository/biocontainers/ecoprimers
.. _`ecoprimers/tags`: https://quay.io/repository/biocontainers/ecoprimers?tab=tags


.. raw:: html

    <script>
        var package = "ecoprimers";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecoprimers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecoprimers/README.html