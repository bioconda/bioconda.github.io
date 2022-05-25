:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccne'
.. highlight: bash

ccne
====

.. conda:recipe:: ccne
   :replaces_section_title:
   :noindex:

   Carbapenemase\-encoding gene copy number estimator

   :homepage: https://github.com/biojiang/ccne
   :license: GPL / GPL-3.0
   :recipe: /`ccne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccne/meta.yaml>`_

   


.. conda:package:: ccne

   |downloads_ccne| |docker_ccne|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bedtools: ``>=2.29``
   :depends blast: ``>=2.7``
   :depends bwa: ``>=0.7``
   :depends deeptools: ``>=3.3``
   :depends htstream: ``>=1.3``
   :depends perl: 
   :depends perl-math-cdf: 
   :depends samtools: ``>=1.9``
   :depends ucsc-fatotwobit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ccne

   and update with::

      conda update ccne

   or use the docker container::

      docker pull quay.io/biocontainers/ccne:<tag>

   (see `ccne/tags`_ for valid values for ``<tag>``)


.. |downloads_ccne| image:: https://img.shields.io/conda/dn/bioconda/ccne.svg?style=flat
   :target: https://anaconda.org/bioconda/ccne
   :alt:   (downloads)
.. |docker_ccne| image:: https://quay.io/repository/biocontainers/ccne/status
   :target: https://quay.io/repository/biocontainers/ccne
.. _`ccne/tags`: https://quay.io/repository/biocontainers/ccne?tab=tags


.. raw:: html

    <script>
        var package = "ccne";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccne/README.html