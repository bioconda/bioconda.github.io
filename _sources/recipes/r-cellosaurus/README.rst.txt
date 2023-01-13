:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cellosaurus'
.. highlight: bash

r-cellosaurus
=============

.. conda:recipe:: r-cellosaurus
   :replaces_section_title:
   :noindex:

   Cellosaurus identifier mapping toolkit.

   :homepage: https://r.acidgenomics.com/packages/cellosaurus/
   :developer docs: https://github.com/acidgenomics/r-cellosaurus
   :license: GPL / AGPL-3.0
   :recipe: /`r-cellosaurus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellosaurus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cellosaurus/meta.yaml>`_

   


.. conda:package:: r-cellosaurus

   |downloads_r-cellosaurus| |docker_r-cellosaurus|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.42.0``
   :depends bioconductor-iranges: ``>=2.30.1``
   :depends bioconductor-s4vectors: ``>=0.34.0``
   :depends r-acidbase: ``>=0.6.7``
   :depends r-acidcli: ``>=0.2.3``
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-acidplyr: ``>=0.3.2``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-goalie: ``>=0.6.4``
   :depends r-ontologyindex: ``>=2.10``
   :depends r-pipette: ``>=0.9.7``
   :depends r-stringi: ``>=1.7.8``
   :depends r-syntactic: ``>=0.6.3``
   :depends r-taxizedb: ``>=0.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cellosaurus

   and update with::

      conda update r-cellosaurus

   or use the docker container::

      docker pull quay.io/biocontainers/r-cellosaurus:<tag>

   (see `r-cellosaurus/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cellosaurus| image:: https://img.shields.io/conda/dn/bioconda/r-cellosaurus.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cellosaurus
   :alt:   (downloads)
.. |docker_r-cellosaurus| image:: https://quay.io/repository/biocontainers/r-cellosaurus/status
   :target: https://quay.io/repository/biocontainers/r-cellosaurus
.. _`r-cellosaurus/tags`: https://quay.io/repository/biocontainers/r-cellosaurus?tab=tags


.. raw:: html

    <script>
        var package = "r-cellosaurus";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cellosaurus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cellosaurus/README.html