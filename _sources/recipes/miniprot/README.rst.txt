:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniprot'
.. highlight: bash

miniprot
========

.. conda:recipe:: miniprot
   :replaces_section_title:
   :noindex:

   Miniprot aligns a protein sequence against a genome with affine gap penalty\, splicing and frameshift.
   It is primarily intended for annotating protein\-coding genes in a new species using known genes from other species. 

   :homepage: https://github.com/lh3/miniprot
   :license: MIT
   :recipe: /`miniprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot/meta.yaml>`_

   


.. conda:package:: miniprot

   |downloads_miniprot| |docker_miniprot|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miniprot

   and update with::

      conda update miniprot

   or use the docker container::

      docker pull quay.io/biocontainers/miniprot:<tag>

   (see `miniprot/tags`_ for valid values for ``<tag>``)


.. |downloads_miniprot| image:: https://img.shields.io/conda/dn/bioconda/miniprot.svg?style=flat
   :target: https://anaconda.org/bioconda/miniprot
   :alt:   (downloads)
.. |docker_miniprot| image:: https://quay.io/repository/biocontainers/miniprot/status
   :target: https://quay.io/repository/biocontainers/miniprot
.. _`miniprot/tags`: https://quay.io/repository/biocontainers/miniprot?tab=tags


.. raw:: html

    <script>
        var package = "miniprot";
        var versions = ["0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniprot/README.html