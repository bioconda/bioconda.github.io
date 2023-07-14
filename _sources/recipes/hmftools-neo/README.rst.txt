:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-neo'
.. highlight: bash

hmftools-neo
============

.. conda:recipe:: hmftools-neo
   :replaces_section_title:
   :noindex:

   Identification of neoepitope and calculation of allele specific neoepitope binding and presentation likelihood.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/neo
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-neo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-neo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-neo/meta.yaml>`_

   


.. conda:package:: hmftools-neo

   |downloads_hmftools-neo| |docker_hmftools-neo|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-neo

   and update with::

      conda update hmftools-neo

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-neo:<tag>

   (see `hmftools-neo/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-neo| image:: https://img.shields.io/conda/dn/bioconda/hmftools-neo.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-neo
   :alt:   (downloads)
.. |docker_hmftools-neo| image:: https://quay.io/repository/biocontainers/hmftools-neo/status
   :target: https://quay.io/repository/biocontainers/hmftools-neo
.. _`hmftools-neo/tags`: https://quay.io/repository/biocontainers/hmftools-neo?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-neo";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-neo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-neo/README.html