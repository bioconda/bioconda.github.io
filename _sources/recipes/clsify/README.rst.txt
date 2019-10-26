:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clsify'
.. highlight: bash

clsify
======

.. conda:recipe:: clsify
   :replaces_section_title:

   Haplotyping of C. Liberibacter solanacearum from Sanger data.

   :homepage: https://github.com/holtgrewe/clsify
   :license: MIT / MIT
   :recipe: /`clsify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clsify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clsify/meta.yaml>`_

   


.. conda:package:: clsify

   |downloads_clsify| |docker_clsify|

   :versions: 0.1.1-0
   
   :depends attrs: 
   :depends bcftools: 
   :depends bioconvert: 
   :depends blast: 
   :depends cattrs: 
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends dash-core-components: 
   :depends dash-html-components: 
   :depends dash-renderer: 
   :depends dash-table: 
   :depends flask: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pysam: 
   :depends python: >=3.6
   :depends requests: 
   :depends vcfpy: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clsify

   and update with::

      conda update clsify

   or use the docker container::

      docker pull quay.io/biocontainers/clsify:<tag>

   (see `clsify/tags`_ for valid values for ``<tag>``)


.. |downloads_clsify| image:: https://img.shields.io/conda/dn/bioconda/clsify.svg?style=flat
   :target: https://anaconda.org/bioconda/clsify
   :alt:   (downloads)
.. |docker_clsify| image:: https://quay.io/repository/biocontainers/clsify/status
   :target: https://quay.io/repository/biocontainers/clsify
.. _`clsify/tags`: https://quay.io/repository/biocontainers/clsify?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clsify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clsify/README.html