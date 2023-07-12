:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-epic'
.. highlight: bash

r-epic
======

.. conda:recipe:: r-epic
   :replaces_section_title:
   :noindex:

   Estimate the Proportion of Immune and Cancer cells from bulk gene expression data.

   :homepage: https://github.com/GfellerLab/EPIC
   :license: other / other
   :recipe: /`r-epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epic/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.26476.001`

   


.. conda:package:: r-epic

   |downloads_r-epic| |docker_r-epic|

   :versions:
      
      

      ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-epic

   and update with::

      conda update r-epic

   or use the docker container::

      docker pull quay.io/biocontainers/r-epic:<tag>

   (see `r-epic/tags`_ for valid values for ``<tag>``)


.. |downloads_r-epic| image:: https://img.shields.io/conda/dn/bioconda/r-epic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-epic
   :alt:   (downloads)
.. |docker_r-epic| image:: https://quay.io/repository/biocontainers/r-epic/status
   :target: https://quay.io/repository/biocontainers/r-epic
.. _`r-epic/tags`: https://quay.io/repository/biocontainers/r-epic?tab=tags


.. raw:: html

    <script>
        var package = "r-epic";
        var versions = ["1.1.7","1.1.6","1.1.6","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-epic/README.html