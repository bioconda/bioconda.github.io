:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'satrap'
.. highlight: bash

satrap
======

.. conda:recipe:: satrap
   :replaces_section_title:
   :noindex:

   A SOLiD assembly translation program.

   :homepage: http://satrap.cribi.unipd.it/cgi-bin/satrap.pl
   :license: file
   :recipe: /`satrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satrap/meta.yaml>`_
   :links: biotools: :biotools:`satrap`, doi: :doi:`10.1371/journal.pone.0137436`

   


.. conda:package:: satrap

   |downloads_satrap| |docker_satrap|

   :versions:
      
      

      ``0.2-6``,  ``0.2-5``,  ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install satrap

   and update with::

      conda update satrap

   or use the docker container::

      docker pull quay.io/biocontainers/satrap:<tag>

   (see `satrap/tags`_ for valid values for ``<tag>``)


.. |downloads_satrap| image:: https://img.shields.io/conda/dn/bioconda/satrap.svg?style=flat
   :target: https://anaconda.org/bioconda/satrap
   :alt:   (downloads)
.. |docker_satrap| image:: https://quay.io/repository/biocontainers/satrap/status
   :target: https://quay.io/repository/biocontainers/satrap
.. _`satrap/tags`: https://quay.io/repository/biocontainers/satrap?tab=tags


.. raw:: html

    <script>
        var package = "satrap";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/satrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/satrap/README.html