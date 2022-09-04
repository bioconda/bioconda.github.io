:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqgrep'
.. highlight: bash

fqgrep
======

.. conda:recipe:: fqgrep
   :replaces_section_title:
   :noindex:

   Search a pair of fastq files for reads that match a given ref or alt sequence

   :homepage: https://github.com/fulcrumgenomics/fqgrep
   :license: MIT
   :recipe: /`fqgrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqgrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqgrep/meta.yaml>`_

   


.. conda:package:: fqgrep

   |downloads_fqgrep| |docker_fqgrep|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqgrep

   and update with::

      conda update fqgrep

   or use the docker container::

      docker pull quay.io/biocontainers/fqgrep:<tag>

   (see `fqgrep/tags`_ for valid values for ``<tag>``)


.. |downloads_fqgrep| image:: https://img.shields.io/conda/dn/bioconda/fqgrep.svg?style=flat
   :target: https://anaconda.org/bioconda/fqgrep
   :alt:   (downloads)
.. |docker_fqgrep| image:: https://quay.io/repository/biocontainers/fqgrep/status
   :target: https://quay.io/repository/biocontainers/fqgrep
.. _`fqgrep/tags`: https://quay.io/repository/biocontainers/fqgrep?tab=tags


.. raw:: html

    <script>
        var package = "fqgrep";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqgrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqgrep/README.html