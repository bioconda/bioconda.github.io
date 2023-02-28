:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'c4counter'
.. highlight: bash

c4counter
=========

.. conda:recipe:: c4counter
   :replaces_section_title:
   :noindex:

   returns the number and types of human C4 regions in a fasta file

   :homepage: https://github.com/irunonayran/c4counter.git
   :license: MIT / MIT
   :recipe: /`c4counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c4counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c4counter/meta.yaml>`_

   


.. conda:package:: c4counter

   |downloads_c4counter| |docker_c4counter|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends biopython: 
   :depends docopt: 
   :depends minimap2: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install c4counter

   and update with::

      conda update c4counter

   or use the docker container::

      docker pull quay.io/biocontainers/c4counter:<tag>

   (see `c4counter/tags`_ for valid values for ``<tag>``)


.. |downloads_c4counter| image:: https://img.shields.io/conda/dn/bioconda/c4counter.svg?style=flat
   :target: https://anaconda.org/bioconda/c4counter
   :alt:   (downloads)
.. |docker_c4counter| image:: https://quay.io/repository/biocontainers/c4counter/status
   :target: https://quay.io/repository/biocontainers/c4counter
.. _`c4counter/tags`: https://quay.io/repository/biocontainers/c4counter?tab=tags


.. raw:: html

    <script>
        var package = "c4counter";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/c4counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/c4counter/README.html