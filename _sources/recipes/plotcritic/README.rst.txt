:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plotcritic'
.. highlight: bash

plotcritic
==========

.. conda:recipe:: plotcritic
   :replaces_section_title:
   :noindex:

   Python deployment tool for bespoke image curation projects\, oriented toward scientific projects\, especially genomic structural variation.

   :homepage: https://github.com/jbelyeu/PlotCritic
   :license: MIT
   :recipe: /`plotcritic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotcritic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plotcritic/meta.yaml>`_

   


.. conda:package:: plotcritic

   |downloads_plotcritic| |docker_plotcritic|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plotcritic

   and update with::

      conda update plotcritic

   or use the docker container::

      docker pull quay.io/biocontainers/plotcritic:<tag>

   (see `plotcritic/tags`_ for valid values for ``<tag>``)


.. |downloads_plotcritic| image:: https://img.shields.io/conda/dn/bioconda/plotcritic.svg?style=flat
   :target: https://anaconda.org/bioconda/plotcritic
   :alt:   (downloads)
.. |docker_plotcritic| image:: https://quay.io/repository/biocontainers/plotcritic/status
   :target: https://quay.io/repository/biocontainers/plotcritic
.. _`plotcritic/tags`: https://quay.io/repository/biocontainers/plotcritic?tab=tags


.. raw:: html

    <script>
        var package = "plotcritic";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plotcritic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plotcritic/README.html