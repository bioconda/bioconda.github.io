:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnfusion'
.. highlight: bash

hmnfusion
=========

.. conda:recipe:: hmnfusion
   :replaces_section_title:
   :noindex:

   Analysis fusion from DNA genomics

   :homepage: https://github.com/guillaume-gricourt/HmnFusion
   :license: MIT
   :recipe: /`hmnfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion/meta.yaml>`_

   


.. conda:package:: hmnfusion

   |downloads_hmnfusion| |docker_hmnfusion|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends beautifulsoup4: 
   :depends et-xmlfile: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: 
   :depends pytest: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmnfusion

   and update with::

      conda update hmnfusion

   or use the docker container::

      docker pull quay.io/biocontainers/hmnfusion:<tag>

   (see `hmnfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnfusion| image:: https://img.shields.io/conda/dn/bioconda/hmnfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnfusion
   :alt:   (downloads)
.. |docker_hmnfusion| image:: https://quay.io/repository/biocontainers/hmnfusion/status
   :target: https://quay.io/repository/biocontainers/hmnfusion
.. _`hmnfusion/tags`: https://quay.io/repository/biocontainers/hmnfusion?tab=tags


.. raw:: html

    <script>
        var package = "hmnfusion";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnfusion/README.html