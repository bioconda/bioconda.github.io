:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-waveica'
.. highlight: bash

r-recetox-waveica
=================

.. conda:recipe:: r-recetox-waveica
   :replaces_section_title:
   :noindex:

   Removal of batch effects for large\-scale untargeted metabolomics data based on wavelet transform.

   :homepage: https://github.com/recetox/waveica
   :license: MIT
   :recipe: /`r-recetox-waveica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.aca.2019.02.010`, doi: :doi:`10.1007/s11306-021-01839-7`

   Recetox\-waveica is a fork of WaveICA package customized by RECETOX. This package is used to remove batch effects from large\-scale untargeted metabolomics data and contains functionality of both original WaveICA and WaveICA 2.0 libraries.


.. conda:package:: r-recetox-waveica

   |downloads_r-recetox-waveica| |docker_r-recetox-waveica|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-jade: 
   :depends r-mgcv: 
   :depends r-waveslim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-recetox-waveica

   and update with::

      conda update r-recetox-waveica

   or use the docker container::

      docker pull quay.io/biocontainers/r-recetox-waveica:<tag>

   (see `r-recetox-waveica/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-waveica| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-waveica.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-waveica
   :alt:   (downloads)
.. |docker_r-recetox-waveica| image:: https://quay.io/repository/biocontainers/r-recetox-waveica/status
   :target: https://quay.io/repository/biocontainers/r-recetox-waveica
.. _`r-recetox-waveica/tags`: https://quay.io/repository/biocontainers/r-recetox-waveica?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-waveica";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-waveica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-waveica/README.html