:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ginpipepy'
.. highlight: bash

ginpipepy
=========

.. conda:recipe:: ginpipepy
   :replaces_section_title:
   :noindex:

   Package for temporal binning of dated sequences in BAM format and fast population size estimate computation

   :homepage: https://github.com/KleistLab/ginpipepy
   :license: GPL / GPLv3
   :recipe: /`ginpipepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ginpipepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ginpipepy/meta.yaml>`_
   :links: biotools: :biotools:`ginpipe`, doi: :doi:`10.1101/2021.05.14.21257234`

   


.. conda:package:: ginpipepy

   |downloads_ginpipepy| |docker_ginpipepy|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>3``
   :depends pyvcf: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ginpipepy

   and update with::

      conda update ginpipepy

   or use the docker container::

      docker pull quay.io/biocontainers/ginpipepy:<tag>

   (see `ginpipepy/tags`_ for valid values for ``<tag>``)


.. |downloads_ginpipepy| image:: https://img.shields.io/conda/dn/bioconda/ginpipepy.svg?style=flat
   :target: https://anaconda.org/bioconda/ginpipepy
   :alt:   (downloads)
.. |docker_ginpipepy| image:: https://quay.io/repository/biocontainers/ginpipepy/status
   :target: https://quay.io/repository/biocontainers/ginpipepy
.. _`ginpipepy/tags`: https://quay.io/repository/biocontainers/ginpipepy?tab=tags


.. raw:: html

    <script>
        var package = "ginpipepy";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ginpipepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ginpipepy/README.html