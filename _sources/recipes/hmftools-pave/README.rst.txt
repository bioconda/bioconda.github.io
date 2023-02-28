:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-pave'
.. highlight: bash

hmftools-pave
=============

.. conda:recipe:: hmftools-pave
   :replaces_section_title:
   :noindex:

   Pave annotates a somatic variant VCF with gene and transcript coding and protein effects.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/pave
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-pave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-pave/meta.yaml>`_

   


.. conda:package:: hmftools-pave

   |downloads_hmftools-pave| |docker_hmftools-pave|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-pave

   and update with::

      conda update hmftools-pave

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-pave:<tag>

   (see `hmftools-pave/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-pave| image:: https://img.shields.io/conda/dn/bioconda/hmftools-pave.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-pave
   :alt:   (downloads)
.. |docker_hmftools-pave| image:: https://quay.io/repository/biocontainers/hmftools-pave/status
   :target: https://quay.io/repository/biocontainers/hmftools-pave
.. _`hmftools-pave/tags`: https://quay.io/repository/biocontainers/hmftools-pave?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-pave";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-pave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-pave/README.html