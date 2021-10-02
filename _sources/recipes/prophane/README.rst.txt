:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophane'
.. highlight: bash

prophane
========

.. conda:recipe:: prophane
   :replaces_section_title:
   :noindex:

   Annotate your metaproteomic search results

   :homepage: https://gitlab.com/s.fuchs/prophane/
   :license: MIT / MIT
   :recipe: /`prophane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane/meta.yaml>`_

   


.. conda:package:: prophane

   |downloads_prophane| |docker_prophane|

   :versions:
      
      

      ``6.2.4-0``,  ``6.2.1-0``,  ``6.1-0``,  ``6.0.5-0``,  ``6.0.1-0``,  ``4.0.5-1``,  ``4.0.5-0``,  ``4.0.3-0``,  ``4.0.2-0``

      

   
   :depends biopython: ``>=1.79``
   :depends click: ``>=8.0.1``
   :depends gitpython: ``>=3.1.18``
   :depends mamba: ``>=0.14.1``
   :depends openpyxl: ``>=3.0.7``
   :depends pandas: ``>=1.3.0``
   :depends pyteomics: ``>=4.4.2``
   :depends pytools: ``>=2021.2.7``
   :depends snakemake-minimal: ``>=6.5.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophane

   and update with::

      conda update prophane

   or use the docker container::

      docker pull quay.io/biocontainers/prophane:<tag>

   (see `prophane/tags`_ for valid values for ``<tag>``)


.. |downloads_prophane| image:: https://img.shields.io/conda/dn/bioconda/prophane.svg?style=flat
   :target: https://anaconda.org/bioconda/prophane
   :alt:   (downloads)
.. |docker_prophane| image:: https://quay.io/repository/biocontainers/prophane/status
   :target: https://quay.io/repository/biocontainers/prophane
.. _`prophane/tags`: https://quay.io/repository/biocontainers/prophane?tab=tags


.. raw:: html

    <script>
        var package = "prophane";
        var versions = ["6.2.4","6.2.1","6.1","6.0.5","6.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophane/README.html