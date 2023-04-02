:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxpasta'
.. highlight: bash

taxpasta
========

.. conda:recipe:: taxpasta
   :replaces_section_title:
   :noindex:

   TAXonomic Profile Aggregation and STAndardisation

   :homepage: https://github.com/taxprofiler/taxpasta
   :license: Apache-2.0
   :recipe: /`taxpasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxpasta/meta.yaml>`_

   


.. conda:package:: taxpasta

   |downloads_taxpasta| |docker_taxpasta|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biom-format: 
   :depends depinfo: ``>=2.1``
   :depends numpy: 
   :depends pandas: 
   :depends pandera: 
   :depends pyarrow: 
   :depends python: ``>=3.8``
   :depends taxopy: 
   :depends typer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxpasta

   and update with::

      conda update taxpasta

   or use the docker container::

      docker pull quay.io/biocontainers/taxpasta:<tag>

   (see `taxpasta/tags`_ for valid values for ``<tag>``)


.. |downloads_taxpasta| image:: https://img.shields.io/conda/dn/bioconda/taxpasta.svg?style=flat
   :target: https://anaconda.org/bioconda/taxpasta
   :alt:   (downloads)
.. |docker_taxpasta| image:: https://quay.io/repository/biocontainers/taxpasta/status
   :target: https://quay.io/repository/biocontainers/taxpasta
.. _`taxpasta/tags`: https://quay.io/repository/biocontainers/taxpasta?tab=tags


.. raw:: html

    <script>
        var package = "taxpasta";
        var versions = ["0.3.0","0.2.3","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxpasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxpasta/README.html