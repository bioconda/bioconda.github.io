:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cas-offinder'
.. highlight: bash

cas-offinder
============

.. conda:recipe:: cas-offinder
   :replaces_section_title:
   :noindex:

   Cas\-OFFinder is OpenCL based\, ultrafast and versatile program that searches for potential off\-target sites of CRISPR\/Cas\-derived RNA\-guided endonucleases \(RGEN\).

   :homepage: https://github.com/snugel/cas-offinder
   :license: BSD-3-Clause AND MIT
   :recipe: /`cas-offinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder/meta.yaml>`_

   


.. conda:package:: cas-offinder

   |downloads_cas-offinder| |docker_cas-offinder|

   :versions:
      
      

      ``2.4-1``,  ``2.4-0``

      

   
   :depends cmake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cas-offinder

   and update with::

      conda update cas-offinder

   or use the docker container::

      docker pull quay.io/biocontainers/cas-offinder:<tag>

   (see `cas-offinder/tags`_ for valid values for ``<tag>``)


.. |downloads_cas-offinder| image:: https://img.shields.io/conda/dn/bioconda/cas-offinder.svg?style=flat
   :target: https://anaconda.org/bioconda/cas-offinder
   :alt:   (downloads)
.. |docker_cas-offinder| image:: https://quay.io/repository/biocontainers/cas-offinder/status
   :target: https://quay.io/repository/biocontainers/cas-offinder
.. _`cas-offinder/tags`: https://quay.io/repository/biocontainers/cas-offinder?tab=tags


.. raw:: html

    <script>
        var package = "cas-offinder";
        var versions = ["2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cas-offinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cas-offinder/README.html