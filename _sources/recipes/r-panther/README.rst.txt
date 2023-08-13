:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-panther'
.. highlight: bash

r-panther
=========

.. conda:recipe:: r-panther
   :replaces_section_title:
   :noindex:

   PANTHER database annotations.

   :homepage: https://r.acidgenomics.com/packages/panther/
   :developer docs: https://github.com/acidgenomics/r-panther
   :license: GPL / AGPL-3.0
   :recipe: /`r-panther <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-panther>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-panther/meta.yaml>`_

   


.. conda:package:: r-panther

   |downloads_r-panther| |docker_r-panther|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.6.18``
   :depends r-acidcli: ``>=0.2.8``
   :depends r-acidgenerics: ``>=0.6.7``
   :depends r-acidgenomes: ``>=0.5.1``
   :depends r-acidplyr: ``>=0.3.11``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.14``
   :depends r-pipette: ``>=0.11.1``
   :depends r-stringi: ``>=1.7.12``
   :depends r-syntactic: ``>=0.6.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-panther

   and update with::

      conda update r-panther

   or use the docker container::

      docker pull quay.io/biocontainers/r-panther:<tag>

   (see `r-panther/tags`_ for valid values for ``<tag>``)


.. |downloads_r-panther| image:: https://img.shields.io/conda/dn/bioconda/r-panther.svg?style=flat
   :target: https://anaconda.org/bioconda/r-panther
   :alt:   (downloads)
.. |docker_r-panther| image:: https://quay.io/repository/biocontainers/r-panther/status
   :target: https://quay.io/repository/biocontainers/r-panther
.. _`r-panther/tags`: https://quay.io/repository/biocontainers/r-panther?tab=tags


.. raw:: html

    <script>
        var package = "r-panther";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-panther/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-panther/README.html