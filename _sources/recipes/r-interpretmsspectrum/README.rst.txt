:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-interpretmsspectrum'
.. highlight: bash

r-interpretmsspectrum
=====================

.. conda:recipe:: r-interpretmsspectrum
   :replaces_section_title:
   :noindex:

   Annotate and interpret deconvoluted mass spectra \(mass\*intensity pairs\) from high resolution mass spectrometry devices.

   :homepage: http://dx.doi.org/10.1021/acs.analchem.6b02743
   :license: GPL3 / GPL-3
   :recipe: /`r-interpretmsspectrum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-interpretmsspectrum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-interpretmsspectrum/meta.yaml>`_

   


.. conda:package:: r-interpretmsspectrum

   |downloads_r-interpretmsspectrum| |docker_r-interpretmsspectrum|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-rdisop: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-doparallel: 
   :depends r-envipat: 
   :depends r-foreach: 
   :depends r-plyr: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-interpretmsspectrum

   and update with::

      conda update r-interpretmsspectrum

   or use the docker container::

      docker pull quay.io/biocontainers/r-interpretmsspectrum:<tag>

   (see `r-interpretmsspectrum/tags`_ for valid values for ``<tag>``)


.. |downloads_r-interpretmsspectrum| image:: https://img.shields.io/conda/dn/bioconda/r-interpretmsspectrum.svg?style=flat
   :target: https://anaconda.org/bioconda/r-interpretmsspectrum
   :alt:   (downloads)
.. |docker_r-interpretmsspectrum| image:: https://quay.io/repository/biocontainers/r-interpretmsspectrum/status
   :target: https://quay.io/repository/biocontainers/r-interpretmsspectrum
.. _`r-interpretmsspectrum/tags`: https://quay.io/repository/biocontainers/r-interpretmsspectrum?tab=tags


.. raw:: html

    <script>
        var package = "r-interpretmsspectrum";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-interpretmsspectrum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-interpretmsspectrum/README.html