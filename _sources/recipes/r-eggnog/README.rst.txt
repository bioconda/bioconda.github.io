:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eggnog'
.. highlight: bash

r-eggnog
========

.. conda:recipe:: r-eggnog
   :replaces_section_title:
   :noindex:

   EggNOG database annotations.

   :homepage: https://r.acidgenomics.com/packages/eggnog/
   :developer docs: https://github.com/acidgenomics/r-eggnog
   :license: GPL / AGPL-3.0
   :recipe: /`r-eggnog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eggnog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eggnog/meta.yaml>`_

   


.. conda:package:: r-eggnog

   |downloads_r-eggnog| |docker_r-eggnog|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.6.18``
   :depends r-acidplyr: ``>=0.3.11``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.14``
   :depends r-pipette: ``>=0.11.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-eggnog

   and update with::

      conda update r-eggnog

   or use the docker container::

      docker pull quay.io/biocontainers/r-eggnog:<tag>

   (see `r-eggnog/tags`_ for valid values for ``<tag>``)


.. |downloads_r-eggnog| image:: https://img.shields.io/conda/dn/bioconda/r-eggnog.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eggnog
   :alt:   (downloads)
.. |docker_r-eggnog| image:: https://quay.io/repository/biocontainers/r-eggnog/status
   :target: https://quay.io/repository/biocontainers/r-eggnog
.. _`r-eggnog/tags`: https://quay.io/repository/biocontainers/r-eggnog?tab=tags


.. raw:: html

    <script>
        var package = "r-eggnog";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eggnog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eggnog/README.html