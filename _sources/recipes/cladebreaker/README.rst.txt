:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cladebreaker'
.. highlight: bash

cladebreaker
============

.. conda:recipe:: cladebreaker
   :replaces_section_title:
   :noindex:

   Nextflow pipeline for phylogenetic analysis.

   :homepage: https://github.com/andriesfeder/cladebreaker
   :license: MIT
   :recipe: /`cladebreaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladebreaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladebreaker/meta.yaml>`_

   


.. conda:package:: cladebreaker

   |downloads_cladebreaker| |docker_cladebreaker|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends conda: 
   :depends graphviz: 
   :depends nextflow: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cladebreaker

   and update with::

      conda update cladebreaker

   or use the docker container::

      docker pull quay.io/biocontainers/cladebreaker:<tag>

   (see `cladebreaker/tags`_ for valid values for ``<tag>``)


.. |downloads_cladebreaker| image:: https://img.shields.io/conda/dn/bioconda/cladebreaker.svg?style=flat
   :target: https://anaconda.org/bioconda/cladebreaker
   :alt:   (downloads)
.. |docker_cladebreaker| image:: https://quay.io/repository/biocontainers/cladebreaker/status
   :target: https://quay.io/repository/biocontainers/cladebreaker
.. _`cladebreaker/tags`: https://quay.io/repository/biocontainers/cladebreaker?tab=tags


.. raw:: html

    <script>
        var package = "cladebreaker";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cladebreaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cladebreaker/README.html