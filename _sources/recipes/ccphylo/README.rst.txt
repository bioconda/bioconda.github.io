:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccphylo'
.. highlight: bash

ccphylo
=======

.. conda:recipe:: ccphylo
   :replaces_section_title:
   :noindex:

   CCPhylo enables phylogenetic analysis of samples based on overlaps between nucleotide created by e.g. KMA. Input file\(s\) may be given as non\-option arguments succeding all options.

   :homepage: https://bitbucket.org/genomicepidemiology/ccphylo
   :license: Apache-2.0
   :recipe: /`ccphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac774`, doi: :doi:`10.1093/biomethods/bpab008`

   


.. conda:package:: ccphylo

   |downloads_ccphylo| |docker_ccphylo|

   :versions:
      
      

      ``0.8.2-0``,  ``0.8.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ccphylo

   and update with::

      conda update ccphylo

   or use the docker container::

      docker pull quay.io/biocontainers/ccphylo:<tag>

   (see `ccphylo/tags`_ for valid values for ``<tag>``)


.. |downloads_ccphylo| image:: https://img.shields.io/conda/dn/bioconda/ccphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/ccphylo
   :alt:   (downloads)
.. |docker_ccphylo| image:: https://quay.io/repository/biocontainers/ccphylo/status
   :target: https://quay.io/repository/biocontainers/ccphylo
.. _`ccphylo/tags`: https://quay.io/repository/biocontainers/ccphylo?tab=tags


.. raw:: html

    <script>
        var package = "ccphylo";
        var versions = ["0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccphylo/README.html