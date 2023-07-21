:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastools'
.. highlight: bash

fastools
========

.. conda:recipe:: fastools
   :replaces_section_title:
   :noindex:

   FASTA\/FASTQ analysis and manipulation toolkit.

   :homepage: https://git.lumc.nl/j.f.j.laros/fastools
   :license: MIT
   :recipe: /`fastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastools/meta.yaml>`_

   


.. conda:package:: fastools

   |downloads_fastools| |docker_fastools|

   :versions:
      
      

      ``1.1.5-0``

      

   
   :depends biopython: ``>=1.72``
   :depends python: 
   :depends python-levenshtein: ``>=0.12.0``
   :depends regex: ``>=2020.10.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastools

   and update with::

      conda update fastools

   or use the docker container::

      docker pull quay.io/biocontainers/fastools:<tag>

   (see `fastools/tags`_ for valid values for ``<tag>``)


.. |downloads_fastools| image:: https://img.shields.io/conda/dn/bioconda/fastools.svg?style=flat
   :target: https://anaconda.org/bioconda/fastools
   :alt:   (downloads)
.. |docker_fastools| image:: https://quay.io/repository/biocontainers/fastools/status
   :target: https://quay.io/repository/biocontainers/fastools
.. _`fastools/tags`: https://quay.io/repository/biocontainers/fastools?tab=tags


.. raw:: html

    <script>
        var package = "fastools";
        var versions = ["1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastools/README.html