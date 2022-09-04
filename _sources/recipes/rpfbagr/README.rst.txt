:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpfbagr'
.. highlight: bash

rpfbagr
=======

.. conda:recipe:: rpfbagr
   :replaces_section_title:
   :noindex:

   Cli interface to predict gene knockout targets with an heterologous pathway

   :homepage: https://github.com/brsynth/rpfbagr
   :license: MIT
   :recipe: /`rpfbagr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpfbagr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpfbagr/meta.yaml>`_

   


.. conda:package:: rpfbagr

   |downloads_rpfbagr| |docker_rpfbagr|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``

      

   
   :depends biopython: 
   :depends cameo: 
   :depends cobra: ``<0.25.0``
   :depends markupsafe: ``2.0.1``
   :depends pandas: 
   :depends pytest: 
   :depends python: 
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rpfbagr

   and update with::

      conda update rpfbagr

   or use the docker container::

      docker pull quay.io/biocontainers/rpfbagr:<tag>

   (see `rpfbagr/tags`_ for valid values for ``<tag>``)


.. |downloads_rpfbagr| image:: https://img.shields.io/conda/dn/bioconda/rpfbagr.svg?style=flat
   :target: https://anaconda.org/bioconda/rpfbagr
   :alt:   (downloads)
.. |docker_rpfbagr| image:: https://quay.io/repository/biocontainers/rpfbagr/status
   :target: https://quay.io/repository/biocontainers/rpfbagr
.. _`rpfbagr/tags`: https://quay.io/repository/biocontainers/rpfbagr?tab=tags


.. raw:: html

    <script>
        var package = "rpfbagr";
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpfbagr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpfbagr/README.html