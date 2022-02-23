:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mindthegap'
.. highlight: bash

mindthegap
==========

.. conda:recipe:: mindthegap
   :replaces_section_title:
   :noindex:

   MindTheGap performs detection and assembly of DNA insertion variants in NGS read datasets with respect to a reference genome. MindTheGap can also be used as a genome assembly finishing tool\, it can fill the gaps between a set of input contigs without any a priori on their relative order and orientation.

   :homepage: https://github.com/GATB/mindthegap
   :license: AGPL-3.0-or-later
   :recipe: /`mindthegap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindthegap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindthegap/meta.yaml>`_
   :links: biotools: :biotools:`mindthegap`, doi: :doi:`10.1093/bioinformatics/btu545`

   


.. conda:package:: mindthegap

   |downloads_mindthegap| |docker_mindthegap|

   :versions:
      
      

      ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mindthegap

   and update with::

      conda update mindthegap

   or use the docker container::

      docker pull quay.io/biocontainers/mindthegap:<tag>

   (see `mindthegap/tags`_ for valid values for ``<tag>``)


.. |downloads_mindthegap| image:: https://img.shields.io/conda/dn/bioconda/mindthegap.svg?style=flat
   :target: https://anaconda.org/bioconda/mindthegap
   :alt:   (downloads)
.. |docker_mindthegap| image:: https://quay.io/repository/biocontainers/mindthegap/status
   :target: https://quay.io/repository/biocontainers/mindthegap
.. _`mindthegap/tags`: https://quay.io/repository/biocontainers/mindthegap?tab=tags


.. raw:: html

    <script>
        var package = "mindthegap";
        var versions = ["2.2.3","2.2.3","2.2.2","2.2.2","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mindthegap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mindthegap/README.html