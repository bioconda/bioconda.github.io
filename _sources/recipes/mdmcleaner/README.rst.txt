:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mdmcleaner'
.. highlight: bash

mdmcleaner
==========

.. conda:recipe:: mdmcleaner
   :replaces_section_title:
   :noindex:

   A pipeline for the assessment\, classification and refinement of microbial dark matter SAGs and MAGs

   :homepage: https://github.com/KIT-IBG-5/mdmcleaner
   :license: GPL-3.0
   :recipe: /`mdmcleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdmcleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdmcleaner/meta.yaml>`_

   


.. conda:package:: mdmcleaner

   |downloads_mdmcleaner| |docker_mdmcleaner|

   :versions:
      
      

      ``0.8.2-0``

      

   
   :depends aragorn: ``>=1.2.38``
   :depends barrnap: ``>=0.9``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10``
   :depends diamond: ``>=2.0.6``
   :depends hmmer: ``>=3.3.1``
   :depends numpy: ``>=1.19.2``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3.7``
   :depends wget: ``>=1.19``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mdmcleaner

   and update with::

      conda update mdmcleaner

   or use the docker container::

      docker pull quay.io/biocontainers/mdmcleaner:<tag>

   (see `mdmcleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_mdmcleaner| image:: https://img.shields.io/conda/dn/bioconda/mdmcleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/mdmcleaner
   :alt:   (downloads)
.. |docker_mdmcleaner| image:: https://quay.io/repository/biocontainers/mdmcleaner/status
   :target: https://quay.io/repository/biocontainers/mdmcleaner
.. _`mdmcleaner/tags`: https://quay.io/repository/biocontainers/mdmcleaner?tab=tags


.. raw:: html

    <script>
        var package = "mdmcleaner";
        var versions = ["0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mdmcleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mdmcleaner/README.html