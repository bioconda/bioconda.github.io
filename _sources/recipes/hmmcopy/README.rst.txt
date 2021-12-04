:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmcopy'
.. highlight: bash

hmmcopy
=======

.. conda:recipe:: hmmcopy
   :replaces_section_title:
   :noindex:

   C\+\+ based programs for analyzing BAM files and preparing read counts \-\- used with bioconductor\-hmmcopy

   :homepage: http://compbio.bccrc.ca/software/hmmcopy/
   :license: GPL-3
   :recipe: /`hmmcopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmcopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmcopy/meta.yaml>`_

   


.. conda:package:: hmmcopy

   |downloads_hmmcopy| |docker_hmmcopy|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bowtie: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmmcopy

   and update with::

      conda update hmmcopy

   or use the docker container::

      docker pull quay.io/biocontainers/hmmcopy:<tag>

   (see `hmmcopy/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmcopy| image:: https://img.shields.io/conda/dn/bioconda/hmmcopy.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmcopy
   :alt:   (downloads)
.. |docker_hmmcopy| image:: https://quay.io/repository/biocontainers/hmmcopy/status
   :target: https://quay.io/repository/biocontainers/hmmcopy
.. _`hmmcopy/tags`: https://quay.io/repository/biocontainers/hmmcopy?tab=tags


.. raw:: html

    <script>
        var package = "hmmcopy";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmcopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmcopy/README.html