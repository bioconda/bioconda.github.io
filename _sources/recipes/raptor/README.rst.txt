:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raptor'
.. highlight: bash

raptor
======

.. conda:recipe:: raptor
   :replaces_section_title:
   :noindex:

   Raptor\: A fast and space\-efficient pre\-filter for querying very large collections of nucleotide sequences

   :homepage: https://github.com/seqan/raptor
   :license: BSD / BSD-3-Clause License
   :recipe: /`raptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raptor/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.isci.2021.102782`

   Raptor is a tool for approximately searching many queries in large collections of nucleotide sequences.


.. conda:package:: raptor

   |downloads_raptor| |docker_raptor|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install raptor

   and update with::

      conda update raptor

   or use the docker container::

      docker pull quay.io/biocontainers/raptor:<tag>

   (see `raptor/tags`_ for valid values for ``<tag>``)


.. |downloads_raptor| image:: https://img.shields.io/conda/dn/bioconda/raptor.svg?style=flat
   :target: https://anaconda.org/bioconda/raptor
   :alt:   (downloads)
.. |docker_raptor| image:: https://quay.io/repository/biocontainers/raptor/status
   :target: https://quay.io/repository/biocontainers/raptor
.. _`raptor/tags`: https://quay.io/repository/biocontainers/raptor?tab=tags


.. raw:: html

    <script>
        var package = "raptor";
        var versions = ["2.0.0","2.0.0","1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raptor/README.html