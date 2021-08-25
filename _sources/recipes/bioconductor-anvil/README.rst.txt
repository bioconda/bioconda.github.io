:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvil'
.. highlight: bash

bioconductor-anvil
==================

.. conda:recipe:: bioconductor-anvil
   :replaces_section_title:
   :noindex:

   Bioconductor on the AnVIL compute environment

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/AnVIL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvil/meta.yaml>`_

   The AnVIL is a cloud computing resource developed in part by the National Human Genome Research Institute. The AnVIL package provides end\-user and developer functionality. For the end\-user\, AnVIL provides fast binary package installation\, utitlities for working with Terra \/ AnVIL table and data resources\, and convenient functions for file movement to and from Google cloud storage. For developers\, AnVIL provides programatic access to the Terra\, Leonardo\, Rawls\, Dockstore\, and Gen3 RESTful programming interface\, including helper functions to transform JSON responses to formats more amenable to manipulation in R.


.. conda:package:: bioconductor-anvil

   |downloads_bioconductor-anvil| |docker_bioconductor-anvil|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-rapiclient: ``>=0.1.3``
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anvil

   and update with::

      conda update bioconductor-anvil

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvil:<tag>

   (see `bioconductor-anvil/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvil| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvil.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvil
   :alt:   (downloads)
.. |docker_bioconductor-anvil| image:: https://quay.io/repository/biocontainers/bioconductor-anvil/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvil
.. _`bioconductor-anvil/tags`: https://quay.io/repository/biocontainers/bioconductor-anvil?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvil";
        var versions = ["1.4.0","1.2.0","1.2.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvil/README.html