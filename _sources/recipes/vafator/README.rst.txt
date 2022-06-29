:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vafator'
.. highlight: bash

vafator
=======

.. conda:recipe:: vafator
   :replaces_section_title:
   :noindex:

   Annotate a VCF file with AF\, AD and DP from tumor and normal BAMs

   :homepage: https://github.com/tron-bioinformatics/vafator
   :license: MIT / MIT
   :recipe: /`vafator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vafator/meta.yaml>`_

   


.. conda:package:: vafator

   |downloads_vafator| |docker_vafator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.1.4-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends cyvcf2: ``0.30.11``
   :depends logzero: ``1.7.0``
   :depends pandas: ``1.3.3``
   :depends pybedtools: ``0.8.2``
   :depends pysam: ``0.17.0``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vafator

   and update with::

      conda update vafator

   or use the docker container::

      docker pull quay.io/biocontainers/vafator:<tag>

   (see `vafator/tags`_ for valid values for ``<tag>``)


.. |downloads_vafator| image:: https://img.shields.io/conda/dn/bioconda/vafator.svg?style=flat
   :target: https://anaconda.org/bioconda/vafator
   :alt:   (downloads)
.. |docker_vafator| image:: https://quay.io/repository/biocontainers/vafator/status
   :target: https://quay.io/repository/biocontainers/vafator
.. _`vafator/tags`: https://quay.io/repository/biocontainers/vafator?tab=tags


.. raw:: html

    <script>
        var package = "vafator";
        var versions = ["1.3.2","1.3.1","1.3.0","1.2.6","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vafator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vafator/README.html