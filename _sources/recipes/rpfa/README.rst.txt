:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpfa'
.. highlight: bash

rpfa
====

.. conda:recipe:: rpfa
   :replaces_section_title:
   :noindex:

   Cli interface to run OptGene\/OptKnock with an heterologous pathway

   :homepage: https://github.com/brsynth/rpFbaAnalysis
   :license: Apache-2.0
   :recipe: /`rpfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpfa/meta.yaml>`_

   


.. conda:package:: rpfa

   |downloads_rpfa| |docker_rpfa|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends cameo: 
   :depends pytest: 
   :depends python: 
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rpfa

   and update with::

      conda update rpfa

   or use the docker container::

      docker pull quay.io/biocontainers/rpfa:<tag>

   (see `rpfa/tags`_ for valid values for ``<tag>``)


.. |downloads_rpfa| image:: https://img.shields.io/conda/dn/bioconda/rpfa.svg?style=flat
   :target: https://anaconda.org/bioconda/rpfa
   :alt:   (downloads)
.. |docker_rpfa| image:: https://quay.io/repository/biocontainers/rpfa/status
   :target: https://quay.io/repository/biocontainers/rpfa
.. _`rpfa/tags`: https://quay.io/repository/biocontainers/rpfa?tab=tags


.. raw:: html

    <script>
        var package = "rpfa";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpfa/README.html