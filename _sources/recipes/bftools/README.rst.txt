:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bftools'
.. highlight: bash

bftools
=======

.. conda:recipe:: bftools
   :replaces_section_title:
   :noindex:

   Bio\-Formats Command line tools

   :homepage: https://docs.openmicroscopy.org/bio-formats/5.7.1/users/comlinetools/index.html
   :license: GNU copyleft License
   :recipe: /`bftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools/meta.yaml>`_

   


.. conda:package:: bftools

   |downloads_bftools| |docker_bftools|

   :versions:
      
      

      ``5.7.1-1``,  ``5.7.1-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bftools

   and update with::

      conda update bftools

   or use the docker container::

      docker pull quay.io/biocontainers/bftools:<tag>

   (see `bftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bftools| image:: https://img.shields.io/conda/dn/bioconda/bftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bftools
   :alt:   (downloads)
.. |docker_bftools| image:: https://quay.io/repository/biocontainers/bftools/status
   :target: https://quay.io/repository/biocontainers/bftools
.. _`bftools/tags`: https://quay.io/repository/biocontainers/bftools?tab=tags


.. raw:: html

    <script>
        var package = "bftools";
        var versions = ["5.7.1","5.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bftools/README.html