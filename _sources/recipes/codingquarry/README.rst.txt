:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codingquarry'
.. highlight: bash

codingquarry
============

.. conda:recipe:: codingquarry
   :replaces_section_title:
   :noindex:

   CodingQuarry\: highly accurate hidden Markov model gene prediction in fungal genomes using RNA\-seq transcripts.

   :homepage: https://sourceforge.net/p/codingquarry/
   :license: GPL / GPL-3
   :recipe: /`codingquarry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1344-4`

   


.. conda:package:: codingquarry

   |downloads_codingquarry| |docker_codingquarry|

   :versions:
      
      

      ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends biopython: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install codingquarry

   and update with::

      conda update codingquarry

   or use the docker container::

      docker pull quay.io/biocontainers/codingquarry:<tag>

   (see `codingquarry/tags`_ for valid values for ``<tag>``)


.. |downloads_codingquarry| image:: https://img.shields.io/conda/dn/bioconda/codingquarry.svg?style=flat
   :target: https://anaconda.org/bioconda/codingquarry
   :alt:   (downloads)
.. |docker_codingquarry| image:: https://quay.io/repository/biocontainers/codingquarry/status
   :target: https://quay.io/repository/biocontainers/codingquarry
.. _`codingquarry/tags`: https://quay.io/repository/biocontainers/codingquarry?tab=tags


.. raw:: html

    <script>
        var package = "codingquarry";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codingquarry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codingquarry/README.html