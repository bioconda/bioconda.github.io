:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_haplotigs'
.. highlight: bash

purge_haplotigs
===============

.. conda:recipe:: purge_haplotigs
   :replaces_section_title:
   :noindex:

   Pipeline to help with curating heterozygous diploid genome assemblies.

   :homepage: https://bitbucket.org/mroachawri/purge_haplotigs/
   :license: MIT / MIT
   :recipe: /`purge_haplotigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs/meta.yaml>`_

   


.. conda:package:: purge_haplotigs

   |downloads_purge_haplotigs| |docker_purge_haplotigs|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.25.0``
   :depends make: ``>=4.2.1``
   :depends minimap2: ``>=2.12``
   :depends perl: ``>=5.22.0``
   :depends r-base: ``>=3.4.1``
   :depends r-ggplot2: ``>=2.2.1``
   :depends samtools: ``>=1.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install purge_haplotigs

   and update with::

      conda update purge_haplotigs

   or use the docker container::

      docker pull quay.io/biocontainers/purge_haplotigs:<tag>

   (see `purge_haplotigs/tags`_ for valid values for ``<tag>``)


.. |downloads_purge_haplotigs| image:: https://img.shields.io/conda/dn/bioconda/purge_haplotigs.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_haplotigs
   :alt:   (downloads)
.. |docker_purge_haplotigs| image:: https://quay.io/repository/biocontainers/purge_haplotigs/status
   :target: https://quay.io/repository/biocontainers/purge_haplotigs
.. _`purge_haplotigs/tags`: https://quay.io/repository/biocontainers/purge_haplotigs?tab=tags


.. raw:: html

    <script>
        var package = "purge_haplotigs";
        var versions = ["1.1.1","1.1.1","1.1.0","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_haplotigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_haplotigs/README.html