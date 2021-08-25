:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pacbio_falcon'
.. highlight: bash

pacbio_falcon
=============

.. conda:recipe:: pacbio_falcon
   :replaces_section_title:
   :noindex:

   A set of tools for fast aligning long reads for consensus and assembly

   :homepage: https://github.com/PacificBiosciences/FALCON
   :license: Standard PacBio Open Source License
   :recipe: /`pacbio_falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacbio_falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacbio_falcon/meta.yaml>`_

   


.. conda:package:: pacbio_falcon

   |downloads_pacbio_falcon| |docker_pacbio_falcon|

   :versions:
      
      

      ``052016-2``,  ``052016-1``,  ``052016-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends networkx: 
   :depends pypeflow: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends rdfextras: 
   :depends rdflib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pacbio_falcon

   and update with::

      conda update pacbio_falcon

   or use the docker container::

      docker pull quay.io/biocontainers/pacbio_falcon:<tag>

   (see `pacbio_falcon/tags`_ for valid values for ``<tag>``)


.. |downloads_pacbio_falcon| image:: https://img.shields.io/conda/dn/bioconda/pacbio_falcon.svg?style=flat
   :target: https://anaconda.org/bioconda/pacbio_falcon
   :alt:   (downloads)
.. |docker_pacbio_falcon| image:: https://quay.io/repository/biocontainers/pacbio_falcon/status
   :target: https://quay.io/repository/biocontainers/pacbio_falcon
.. _`pacbio_falcon/tags`: https://quay.io/repository/biocontainers/pacbio_falcon?tab=tags


.. raw:: html

    <script>
        var package = "pacbio_falcon";
        var versions = ["052016","052016","052016"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pacbio_falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pacbio_falcon/README.html