:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agg'
.. highlight: bash

agg
===

.. conda:recipe:: agg
   :replaces_section_title:
   :noindex:

   gvcf aggregation tool

   :homepage: https://github.com/Illumina/agg
   :license: GPL3
   :recipe: /`agg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agg/meta.yaml>`_

   


.. conda:package:: agg

   |downloads_agg| |docker_agg|

   :versions:
      
      

      ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agg

   and update with::

      conda update agg

   or use the docker container::

      docker pull quay.io/biocontainers/agg:<tag>

   (see `agg/tags`_ for valid values for ``<tag>``)


.. |downloads_agg| image:: https://img.shields.io/conda/dn/bioconda/agg.svg?style=flat
   :target: https://anaconda.org/bioconda/agg
   :alt:   (downloads)
.. |docker_agg| image:: https://quay.io/repository/biocontainers/agg/status
   :target: https://quay.io/repository/biocontainers/agg
.. _`agg/tags`: https://quay.io/repository/biocontainers/agg?tab=tags


.. raw:: html

    <script>
        var package = "agg";
        var versions = ["0.3.6","0.3.6","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agg/README.html