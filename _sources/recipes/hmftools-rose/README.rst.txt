:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-rose'
.. highlight: bash

hmftools-rose
=============

.. conda:recipe:: hmftools-rose
   :replaces_section_title:
   :noindex:

   ROSE makes an actionability summary of the clinical relevant \(for the Netherlands\) genomic events and signatures as determined by the Hartwig pipeline.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/rose/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-rose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-rose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-rose/meta.yaml>`_

   


.. conda:package:: hmftools-rose

   |downloads_hmftools-rose| |docker_hmftools-rose|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-rose

   and update with::

      conda update hmftools-rose

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-rose:<tag>

   (see `hmftools-rose/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-rose| image:: https://img.shields.io/conda/dn/bioconda/hmftools-rose.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-rose
   :alt:   (downloads)
.. |docker_hmftools-rose| image:: https://quay.io/repository/biocontainers/hmftools-rose/status
   :target: https://quay.io/repository/biocontainers/hmftools-rose
.. _`hmftools-rose/tags`: https://quay.io/repository/biocontainers/hmftools-rose?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-rose";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-rose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-rose/README.html