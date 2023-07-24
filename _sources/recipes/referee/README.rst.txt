:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'referee'
.. highlight: bash

referee
=======

.. conda:recipe:: referee
   :replaces_section_title:
   :noindex:

   Quality scoring for reference genomes

   :homepage: https://github.com/gwct/referee
   :license: GPL-3.0-only
   :recipe: /`referee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referee/meta.yaml>`_
   :links: biotools: :biotools:`Referee`, doi: :doi:`10.1093/gbe/evz088`

   


.. conda:package:: referee

   |downloads_referee| |docker_referee|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends python: ``>=3``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install referee

   and update with::

      conda update referee

   or use the docker container::

      docker pull quay.io/biocontainers/referee:<tag>

   (see `referee/tags`_ for valid values for ``<tag>``)


.. |downloads_referee| image:: https://img.shields.io/conda/dn/bioconda/referee.svg?style=flat
   :target: https://anaconda.org/bioconda/referee
   :alt:   (downloads)
.. |docker_referee| image:: https://quay.io/repository/biocontainers/referee/status
   :target: https://quay.io/repository/biocontainers/referee
.. _`referee/tags`: https://quay.io/repository/biocontainers/referee?tab=tags


.. raw:: html

    <script>
        var package = "referee";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/referee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/referee/README.html