:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lusstr'
.. highlight: bash

lusstr
======

.. conda:recipe:: lusstr
   :replaces_section_title:
   :noindex:

   Tool for converting NGS sequence data of forensic STR loci to various annotation styles

   :homepage: https://www.github.com/bioforensics/lusSTR
   :license: BSD / BSD-3-Clause
   :recipe: /`lusstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lusstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lusstr/meta.yaml>`_

   


.. conda:package:: lusstr

   |downloads_lusstr| |docker_lusstr|

   :versions:
      
      

      ``0.6.4-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2.1-0``,  ``0.1.1-0``

      

   
   :depends openpyxl: ``>=3.0.6``
   :depends pandas: ``>=1.0,<2.0``
   :depends python: ``>=3``
   :depends pyyaml: ``>=6.0``
   :depends snakemake: ``>=7.22.0``
   :depends xlrd: ``>=1.0,<2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lusstr

   and update with::

      conda update lusstr

   or use the docker container::

      docker pull quay.io/biocontainers/lusstr:<tag>

   (see `lusstr/tags`_ for valid values for ``<tag>``)


.. |downloads_lusstr| image:: https://img.shields.io/conda/dn/bioconda/lusstr.svg?style=flat
   :target: https://anaconda.org/bioconda/lusstr
   :alt:   (downloads)
.. |docker_lusstr| image:: https://quay.io/repository/biocontainers/lusstr/status
   :target: https://quay.io/repository/biocontainers/lusstr
.. _`lusstr/tags`: https://quay.io/repository/biocontainers/lusstr?tab=tags


.. raw:: html

    <script>
        var package = "lusstr";
        var versions = ["0.6.4","0.5","0.4","0.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lusstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lusstr/README.html