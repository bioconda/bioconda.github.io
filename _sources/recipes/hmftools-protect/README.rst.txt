:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-protect'
.. highlight: bash

hmftools-protect
================

.. conda:recipe:: hmftools-protect
   :replaces_section_title:
   :noindex:

   PROTECT determines the clinical evidence applicable for a particular tumor sample based on all genomic events and signatures that are determined by the Hartwig pipeline.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/protect/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-protect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-protect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-protect/meta.yaml>`_

   


.. conda:package:: hmftools-protect

   |downloads_hmftools-protect| |docker_hmftools-protect|

   :versions:
      
      

      ``2.3-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-protect

   and update with::

      conda update hmftools-protect

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-protect:<tag>

   (see `hmftools-protect/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-protect| image:: https://img.shields.io/conda/dn/bioconda/hmftools-protect.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-protect
   :alt:   (downloads)
.. |docker_hmftools-protect| image:: https://quay.io/repository/biocontainers/hmftools-protect/status
   :target: https://quay.io/repository/biocontainers/hmftools-protect
.. _`hmftools-protect/tags`: https://quay.io/repository/biocontainers/hmftools-protect?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-protect";
        var versions = ["2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-protect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-protect/README.html