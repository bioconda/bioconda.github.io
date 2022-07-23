:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grimer'
.. highlight: bash

grimer
======

.. conda:recipe:: grimer
   :replaces_section_title:
   :noindex:

   GRIMER perform analysis of microbiome data and generates a portable and interactive dashboard

   :homepage: https://github.com/pirovc/grimer
   :license: MIT / MIT License
   :recipe: /`grimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grimer/meta.yaml>`_

   GRIMER perform analysis of microbiome data and generates a portable and interactive dashboard
   integrating annotation\, taxonomy and metadata with focus on contamination detection.



.. conda:package:: grimer

   |downloads_grimer| |docker_grimer|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-decontam: ``1.10.0``
   :depends biom-format: ``>=2.1.10``
   :depends bokeh: ``2.2.3``
   :depends jinja2: ``3.0.3``
   :depends markdown: 
   :depends multitax: ``1.1.1``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends r-base: ``>=4.0.0``
   :depends r-optparse: ``1.6.6``
   :depends scikit-bio: ``>=0.5.6``
   :depends scipy: ``>=1.6.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grimer

   and update with::

      conda update grimer

   or use the docker container::

      docker pull quay.io/biocontainers/grimer:<tag>

   (see `grimer/tags`_ for valid values for ``<tag>``)


.. |downloads_grimer| image:: https://img.shields.io/conda/dn/bioconda/grimer.svg?style=flat
   :target: https://anaconda.org/bioconda/grimer
   :alt:   (downloads)
.. |docker_grimer| image:: https://quay.io/repository/biocontainers/grimer/status
   :target: https://quay.io/repository/biocontainers/grimer
.. _`grimer/tags`: https://quay.io/repository/biocontainers/grimer?tab=tags


.. raw:: html

    <script>
        var package = "grimer";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grimer/README.html