:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmdtools'
.. highlight: bash

pmdtools
========

.. conda:recipe:: pmdtools
   :replaces_section_title:
   :noindex:

   Compute postmortem damage patterns and decontaminate ancient genomes

   :homepage: https://github.com/pontussk/PMDtools
   :license: GPL-3.0
   :recipe: /`pmdtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmdtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmdtools/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1318934111`

   


.. conda:package:: pmdtools

   |downloads_pmdtools| |docker_pmdtools|

   :versions:
      
      

      ``0.60-3``,  ``0.60-2``,  ``0.60-1``

      

   
   :depends python: 
   :depends r-base: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pmdtools

   and update with::

      conda update pmdtools

   or use the docker container::

      docker pull quay.io/biocontainers/pmdtools:<tag>

   (see `pmdtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pmdtools| image:: https://img.shields.io/conda/dn/bioconda/pmdtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pmdtools
   :alt:   (downloads)
.. |docker_pmdtools| image:: https://quay.io/repository/biocontainers/pmdtools/status
   :target: https://quay.io/repository/biocontainers/pmdtools
.. _`pmdtools/tags`: https://quay.io/repository/biocontainers/pmdtools?tab=tags


.. raw:: html

    <script>
        var package = "pmdtools";
        var versions = ["0.60","0.60","0.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmdtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmdtools/README.html