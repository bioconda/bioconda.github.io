:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgbio-minimal'
.. highlight: bash

fgbio-minimal
=============

.. conda:recipe:: fgbio-minimal
   :replaces_section_title:
   :noindex:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT
   :recipe: /`fgbio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal/meta.yaml>`_

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs. The \'fgbio\-minimal\' package offers an installation of fgbio without the \'r\-base\' dependency.


.. conda:package:: fgbio-minimal

   |downloads_fgbio-minimal| |docker_fgbio-minimal|

   :versions:
      
      

      ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgbio-minimal

   and update with::

      conda update fgbio-minimal

   or use the docker container::

      docker pull quay.io/biocontainers/fgbio-minimal:<tag>

   (see `fgbio-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_fgbio-minimal| image:: https://img.shields.io/conda/dn/bioconda/fgbio-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/fgbio-minimal
   :alt:   (downloads)
.. |docker_fgbio-minimal| image:: https://quay.io/repository/biocontainers/fgbio-minimal/status
   :target: https://quay.io/repository/biocontainers/fgbio-minimal
.. _`fgbio-minimal/tags`: https://quay.io/repository/biocontainers/fgbio-minimal?tab=tags


.. raw:: html

    <script>
        var package = "fgbio-minimal";
        var versions = ["2.0.0","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio-minimal/README.html