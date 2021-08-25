:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interleafq'
.. highlight: bash

interleafq
==========

.. conda:recipe:: interleafq
   :replaces_section_title:
   :noindex:

   Interleave and deinterleave FASTQ files

   :homepage: https://github.com/quadram-institute-bioscience/interleafq/
   :license: MIT
   :recipe: /`interleafq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interleafq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interleafq/meta.yaml>`_

   A tool to interleave and deinterleave FASTQ files\, with consistency controls and support for gzipped input


.. conda:package:: interleafq

   |downloads_interleafq| |docker_interleafq|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``0.99-0``,  ``0.92-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-fastx-reader: 
   :depends perl-getopt-long: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install interleafq

   and update with::

      conda update interleafq

   or use the docker container::

      docker pull quay.io/biocontainers/interleafq:<tag>

   (see `interleafq/tags`_ for valid values for ``<tag>``)


.. |downloads_interleafq| image:: https://img.shields.io/conda/dn/bioconda/interleafq.svg?style=flat
   :target: https://anaconda.org/bioconda/interleafq
   :alt:   (downloads)
.. |docker_interleafq| image:: https://quay.io/repository/biocontainers/interleafq/status
   :target: https://quay.io/repository/biocontainers/interleafq
.. _`interleafq/tags`: https://quay.io/repository/biocontainers/interleafq?tab=tags


.. raw:: html

    <script>
        var package = "interleafq";
        var versions = ["1.1.0","1.1.0","0.99","0.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interleafq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interleafq/README.html