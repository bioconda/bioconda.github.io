:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plotsr'
.. highlight: bash

plotsr
======

.. conda:recipe:: plotsr
   :replaces_section_title:
   :noindex:

   Visualiser for structural annotations between multiple genomes

   :homepage: https://github.com/schneebergerlab/plotsr
   :license: MIT License
   :recipe: /`plotsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotsr/meta.yaml>`_

   


.. conda:package:: plotsr

   |downloads_plotsr| |docker_plotsr|

   :versions:
      
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``

      

   
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.2.4``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plotsr

   and update with::

      conda update plotsr

   or use the docker container::

      docker pull quay.io/biocontainers/plotsr:<tag>

   (see `plotsr/tags`_ for valid values for ``<tag>``)


.. |downloads_plotsr| image:: https://img.shields.io/conda/dn/bioconda/plotsr.svg?style=flat
   :target: https://anaconda.org/bioconda/plotsr
   :alt:   (downloads)
.. |docker_plotsr| image:: https://quay.io/repository/biocontainers/plotsr/status
   :target: https://quay.io/repository/biocontainers/plotsr
.. _`plotsr/tags`: https://quay.io/repository/biocontainers/plotsr?tab=tags


.. raw:: html

    <script>
        var package = "plotsr";
        var versions = ["0.5.4","0.5.3","0.5.2","0.5.1","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plotsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plotsr/README.html