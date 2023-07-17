:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-autospill'
.. highlight: bash

r-autospill
===========

.. conda:recipe:: r-autospill
   :replaces_section_title:
   :noindex:

   AutoSpill algorithm for calculating spillover coefficients to compensate or unmix high\-parameter flow cytometry data.

   :homepage: https://github.com/carlosproca/autospill
   :license: MIT / MIT
   :recipe: /`r-autospill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-autospill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-autospill/meta.yaml>`_

   


.. conda:package:: r-autospill

   |downloads_r-autospill| |docker_r-autospill|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bioconductor-flowcore: 
   :depends bioconductor-flowworkspace: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-deldir: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-moments: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-sp: 
   :depends r-tripack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-autospill

   and update with::

      conda update r-autospill

   or use the docker container::

      docker pull quay.io/biocontainers/r-autospill:<tag>

   (see `r-autospill/tags`_ for valid values for ``<tag>``)


.. |downloads_r-autospill| image:: https://img.shields.io/conda/dn/bioconda/r-autospill.svg?style=flat
   :target: https://anaconda.org/bioconda/r-autospill
   :alt:   (downloads)
.. |docker_r-autospill| image:: https://quay.io/repository/biocontainers/r-autospill/status
   :target: https://quay.io/repository/biocontainers/r-autospill
.. _`r-autospill/tags`: https://quay.io/repository/biocontainers/r-autospill?tab=tags


.. raw:: html

    <script>
        var package = "r-autospill";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-autospill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-autospill/README.html