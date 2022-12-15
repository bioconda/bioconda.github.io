:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidescan'
.. highlight: bash

guidescan
=========

.. conda:recipe:: guidescan
   :replaces_section_title:
   :noindex:

   GuideScan is a tool for genome\-wide CRISPR guide RNA \(gRNA\) design and analysis in custom genomes.

   :homepage: https://github.com/pritykinlab/guidescan-cli
   :license: Unknown
   :recipe: /`guidescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan/meta.yaml>`_

   


.. conda:package:: guidescan

   |downloads_guidescan| |docker_guidescan|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guidescan

   and update with::

      conda update guidescan

   or use the docker container::

      docker pull quay.io/biocontainers/guidescan:<tag>

   (see `guidescan/tags`_ for valid values for ``<tag>``)


.. |downloads_guidescan| image:: https://img.shields.io/conda/dn/bioconda/guidescan.svg?style=flat
   :target: https://anaconda.org/bioconda/guidescan
   :alt:   (downloads)
.. |docker_guidescan| image:: https://quay.io/repository/biocontainers/guidescan/status
   :target: https://quay.io/repository/biocontainers/guidescan
.. _`guidescan/tags`: https://quay.io/repository/biocontainers/guidescan?tab=tags


.. raw:: html

    <script>
        var package = "guidescan";
        var versions = ["2.0.0","1.2","1.2","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidescan/README.html