:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-abdiv'
.. highlight: bash

r-abdiv
=======

.. conda:recipe:: r-abdiv
   :replaces_section_title:
   :noindex:

   Alpha and Beta Diversity Measures

   :homepage: https://github.com/kylebittinger/abdiv
   :license: MIT
   :recipe: /`r-abdiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-abdiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-abdiv/meta.yaml>`_

   \'A collection of measures for measuring ecological diversity.
    Ecological diversity comes in two flavors\: alpha diversity measures the
    diversity within a single site or sample\, and beta diversity measures the
    diversity across two sites or samples. This package overlaps considerably
    with other R packages such as \'\'vegan\'\'\, \'\'gUniFrac\'\'\, \'\'betapart\'\'\, and \'\'fossil\'\'.
    We also include a wide range of functions that are implemented in software
    outside the R ecosystem\, such as \'\'scipy\'\'\, \'\'Mothur\'\'\, and \'\'scikit\-bio\'\'.  The
    implementations here are designed to be basic and clear to the reader.\'


.. conda:package:: r-abdiv

   |downloads_r-abdiv| |docker_r-abdiv|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-testthat: ``>=2.1.0``
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-abdiv

   and update with::

      conda update r-abdiv

   or use the docker container::

      docker pull quay.io/biocontainers/r-abdiv:<tag>

   (see `r-abdiv/tags`_ for valid values for ``<tag>``)


.. |downloads_r-abdiv| image:: https://img.shields.io/conda/dn/bioconda/r-abdiv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-abdiv
   :alt:   (downloads)
.. |docker_r-abdiv| image:: https://quay.io/repository/biocontainers/r-abdiv/status
   :target: https://quay.io/repository/biocontainers/r-abdiv
.. _`r-abdiv/tags`: https://quay.io/repository/biocontainers/r-abdiv?tab=tags


.. raw:: html

    <script>
        var package = "r-abdiv";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-abdiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-abdiv/README.html