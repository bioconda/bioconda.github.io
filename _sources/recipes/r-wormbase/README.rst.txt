:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wormbase'
.. highlight: bash

r-wormbase
==========

.. conda:recipe:: r-wormbase
   :replaces_section_title:
   :noindex:

   Fetch Caenorhabditis elegans genome annotations from WormBase.

   :homepage: https://r.acidgenomics.com/packages/wormbase/
   :developer docs: https://github.com/acidgenomics/r-wormbase
   :license: GPL / AGPL-3.0
   :recipe: /`r-wormbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase/meta.yaml>`_

   


.. conda:package:: r-wormbase

   |downloads_r-wormbase| |docker_r-wormbase|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.6.18``
   :depends r-acidcli: ``>=0.2.8``
   :depends r-acidgenerics: ``>=0.6.7``
   :depends r-acidplyr: ``>=0.3.11``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.14``
   :depends r-pipette: ``>=0.11.1``
   :depends r-stringi: ``>=1.7.12``
   :depends r-syntactic: ``>=0.6.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-wormbase

   and update with::

      conda update r-wormbase

   or use the docker container::

      docker pull quay.io/biocontainers/r-wormbase:<tag>

   (see `r-wormbase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-wormbase| image:: https://img.shields.io/conda/dn/bioconda/r-wormbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wormbase
   :alt:   (downloads)
.. |docker_r-wormbase| image:: https://quay.io/repository/biocontainers/r-wormbase/status
   :target: https://quay.io/repository/biocontainers/r-wormbase
.. _`r-wormbase/tags`: https://quay.io/repository/biocontainers/r-wormbase?tab=tags


.. raw:: html

    <script>
        var package = "r-wormbase";
        var versions = ["0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wormbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wormbase/README.html