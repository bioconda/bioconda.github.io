:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lymphclon'
.. highlight: bash

r-lymphclon
===========

.. conda:recipe:: r-lymphclon
   :replaces_section_title:
   :noindex:

   We provide a clonality score estimator that takes full advantage of the multi\-biological\-replicate structure of modern sequencing experiments\; it specifically takes into account the reality that\, typically\, the clonal coverage is well below 0.1\%.

   :homepage: https://CRAN.R-project.org/package=lymphclon
   :license: LGPL / LGPL-2
   :recipe: /`r-lymphclon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lymphclon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lymphclon/meta.yaml>`_

   


.. conda:package:: r-lymphclon

   |downloads_r-lymphclon| |docker_r-lymphclon|

   :versions:
      
      

      ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-expm: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lymphclon

   and update with::

      conda update r-lymphclon

   or use the docker container::

      docker pull quay.io/biocontainers/r-lymphclon:<tag>

   (see `r-lymphclon/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lymphclon| image:: https://img.shields.io/conda/dn/bioconda/r-lymphclon.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lymphclon
   :alt:   (downloads)
.. |docker_r-lymphclon| image:: https://quay.io/repository/biocontainers/r-lymphclon/status
   :target: https://quay.io/repository/biocontainers/r-lymphclon
.. _`r-lymphclon/tags`: https://quay.io/repository/biocontainers/r-lymphclon?tab=tags


.. raw:: html

    <script>
        var package = "r-lymphclon";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lymphclon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lymphclon/README.html