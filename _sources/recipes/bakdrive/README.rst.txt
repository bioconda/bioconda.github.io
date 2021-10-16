:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakdrive'
.. highlight: bash

bakdrive
========

.. conda:recipe:: bakdrive
   :replaces_section_title:
   :noindex:

   Bakdrive finds a minimum set of driver species from real metagenomic samples and simulates fecal microbial transplantation \(FMT\) process

   :homepage: https://gitlab.com/treangenlab/bakdrive
   :license: MIT
   :recipe: /`bakdrive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakdrive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakdrive/meta.yaml>`_

   


.. conda:package:: bakdrive

   |downloads_bakdrive| |docker_bakdrive|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: 
   :depends micom: 
   :depends pulp: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bakdrive

   and update with::

      conda update bakdrive

   or use the docker container::

      docker pull quay.io/biocontainers/bakdrive:<tag>

   (see `bakdrive/tags`_ for valid values for ``<tag>``)


.. |downloads_bakdrive| image:: https://img.shields.io/conda/dn/bioconda/bakdrive.svg?style=flat
   :target: https://anaconda.org/bioconda/bakdrive
   :alt:   (downloads)
.. |docker_bakdrive| image:: https://quay.io/repository/biocontainers/bakdrive/status
   :target: https://quay.io/repository/biocontainers/bakdrive
.. _`bakdrive/tags`: https://quay.io/repository/biocontainers/bakdrive?tab=tags


.. raw:: html

    <script>
        var package = "bakdrive";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakdrive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakdrive/README.html