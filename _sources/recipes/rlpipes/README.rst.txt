:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rlpipes'
.. highlight: bash

rlpipes
=======

.. conda:recipe:: rlpipes
   :replaces_section_title:
   :noindex:

   A standardized R\-loop\-mapping pipeline

   :homepage: https://github.com/Bishop-Laboratory/RLPipes
   :license: MIT / MIT
   :recipe: /`rlpipes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rlpipes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rlpipes/meta.yaml>`_

   


.. conda:package:: rlpipes

   |downloads_rlpipes| |docker_rlpipes|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends click: 
   :depends pandas: ``1.2.0``
   :depends pyfastx: 
   :depends pysam: 
   :depends pysradb: 
   :depends python: 
   :depends snakemake-minimal: ``6.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rlpipes

   and update with::

      conda update rlpipes

   or use the docker container::

      docker pull quay.io/biocontainers/rlpipes:<tag>

   (see `rlpipes/tags`_ for valid values for ``<tag>``)


.. |downloads_rlpipes| image:: https://img.shields.io/conda/dn/bioconda/rlpipes.svg?style=flat
   :target: https://anaconda.org/bioconda/rlpipes
   :alt:   (downloads)
.. |docker_rlpipes| image:: https://quay.io/repository/biocontainers/rlpipes/status
   :target: https://quay.io/repository/biocontainers/rlpipes
.. _`rlpipes/tags`: https://quay.io/repository/biocontainers/rlpipes?tab=tags


.. raw:: html

    <script>
        var package = "rlpipes";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rlpipes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rlpipes/README.html