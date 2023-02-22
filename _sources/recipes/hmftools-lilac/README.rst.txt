:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-lilac'
.. highlight: bash

hmftools-lilac
==============

.. conda:recipe:: hmftools-lilac
   :replaces_section_title:
   :noindex:

   LILAC is a WGS tool to determine HLA Class I types.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/lilac/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-lilac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-lilac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-lilac/meta.yaml>`_

   


.. conda:package:: hmftools-lilac

   |downloads_hmftools-lilac| |docker_hmftools-lilac|

   :versions:
      
      

      ``1.4.2-0``,  ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-lilac

   and update with::

      conda update hmftools-lilac

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-lilac:<tag>

   (see `hmftools-lilac/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-lilac| image:: https://img.shields.io/conda/dn/bioconda/hmftools-lilac.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-lilac
   :alt:   (downloads)
.. |docker_hmftools-lilac| image:: https://quay.io/repository/biocontainers/hmftools-lilac/status
   :target: https://quay.io/repository/biocontainers/hmftools-lilac
.. _`hmftools-lilac/tags`: https://quay.io/repository/biocontainers/hmftools-lilac?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-lilac";
        var versions = ["1.4.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-lilac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-lilac/README.html