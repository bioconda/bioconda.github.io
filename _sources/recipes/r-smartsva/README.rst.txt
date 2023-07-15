:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-smartsva'
.. highlight: bash

r-smartsva
==========

.. conda:recipe:: r-smartsva
   :replaces_section_title:
   :noindex:

   Introduces a fast and efficient Surrogate Variable Analysis algorithm that captures variation of unknown sources \(batch effects\) for high\-dimensional data sets. The algorithm is built on the \'irwsva.build\' function of the \'sva\' package and proposes a revision on it that achieves an order of magnitude faster running time while trading no accuracy loss in return.

   :homepage: https://CRAN.R-project.org/package=SmartSVA
   :license: GPL3 / GPL-3
   :recipe: /`r-smartsva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-smartsva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-smartsva/meta.yaml>`_

   


.. conda:package:: r-smartsva

   |downloads_r-smartsva| |docker_r-smartsva|

   :versions:
      
      

      ``0.1.3-8``,  ``0.1.3-7``,  ``0.1.3-6``,  ``0.1.3-5``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends bioconductor-sva: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-isva: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-rspectra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-smartsva

   and update with::

      conda update r-smartsva

   or use the docker container::

      docker pull quay.io/biocontainers/r-smartsva:<tag>

   (see `r-smartsva/tags`_ for valid values for ``<tag>``)


.. |downloads_r-smartsva| image:: https://img.shields.io/conda/dn/bioconda/r-smartsva.svg?style=flat
   :target: https://anaconda.org/bioconda/r-smartsva
   :alt:   (downloads)
.. |docker_r-smartsva| image:: https://quay.io/repository/biocontainers/r-smartsva/status
   :target: https://quay.io/repository/biocontainers/r-smartsva
.. _`r-smartsva/tags`: https://quay.io/repository/biocontainers/r-smartsva?tab=tags


.. raw:: html

    <script>
        var package = "r-smartsva";
        var versions = ["0.1.3","0.1.3","0.1.3","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-smartsva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-smartsva/README.html