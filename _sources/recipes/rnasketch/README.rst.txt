:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasketch'
.. highlight: bash

rnasketch
=========

.. conda:recipe:: rnasketch
   :replaces_section_title:
   :noindex:

   RNAsketch Library for designing RNA molecules. Glue between RNAblueprint\/RNARedPrint and ViennaRNA\, Nupack\, Hotknots\, pKiss.

   :homepage: https://github.com/ViennaRNA/RNAsketch
   :license: GPL3
   :recipe: /`rnasketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch/meta.yaml>`_

   


.. conda:package:: rnasketch

   |downloads_rnasketch| |docker_rnasketch|

   :versions:
      
      

      ``1.5-2``,  ``1.5-1``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends numpy: ``>=1.15*``
   :depends python: ``<3``
   :depends python-igraph: 
   :depends rnablueprint: ``>=1.2``
   :depends scipy: ``>=1.1*``
   :depends viennarna: ``>=2.4*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnasketch

   and update with::

      conda update rnasketch

   or use the docker container::

      docker pull quay.io/biocontainers/rnasketch:<tag>

   (see `rnasketch/tags`_ for valid values for ``<tag>``)


.. |downloads_rnasketch| image:: https://img.shields.io/conda/dn/bioconda/rnasketch.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasketch
   :alt:   (downloads)
.. |docker_rnasketch| image:: https://quay.io/repository/biocontainers/rnasketch/status
   :target: https://quay.io/repository/biocontainers/rnasketch
.. _`rnasketch/tags`: https://quay.io/repository/biocontainers/rnasketch?tab=tags


.. raw:: html

    <script>
        var package = "rnasketch";
        var versions = ["1.5","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasketch/README.html