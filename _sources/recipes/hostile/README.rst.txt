:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hostile'
.. highlight: bash

hostile
=======

.. conda:recipe:: hostile
   :replaces_section_title:
   :noindex:

   Hostile\: accurate host decontamination

   :homepage: https://github.com/bede/hostile
   :license: MIT / MIT
   :recipe: /`hostile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.07.04.547735`

   


.. conda:package:: hostile

   |downloads_hostile| |docker_hostile|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends bedtools: ``>=2.31.0``
   :depends bowtie2: ``>=2.5.1``
   :depends defopt: ``>=6.4.0``
   :depends gawk: ``>=5.1.0``
   :depends httpx: ``>=0.24.1``
   :depends minimap2: ``>=2.26``
   :depends platformdirs: ``>=3.5.1``
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.17``
   :depends tqdm: ``>=4.65.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hostile

   and update with::

      conda update hostile

   or use the docker container::

      docker pull quay.io/biocontainers/hostile:<tag>

   (see `hostile/tags`_ for valid values for ``<tag>``)


.. |downloads_hostile| image:: https://img.shields.io/conda/dn/bioconda/hostile.svg?style=flat
   :target: https://anaconda.org/bioconda/hostile
   :alt:   (downloads)
.. |docker_hostile| image:: https://quay.io/repository/biocontainers/hostile/status
   :target: https://quay.io/repository/biocontainers/hostile
.. _`hostile/tags`: https://quay.io/repository/biocontainers/hostile?tab=tags


.. raw:: html

    <script>
        var package = "hostile";
        var versions = ["0.1.0","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hostile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hostile/README.html