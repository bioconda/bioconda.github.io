:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genion'
.. highlight: bash

genion
======

.. conda:recipe:: genion
   :replaces_section_title:
   :noindex:

   Characterizing gene fusions using long transcriptomics reads

   :homepage: https://github.com/vpc-ccg/genion
   :license: MIT
   :recipe: /`genion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genion/meta.yaml>`_

   


.. conda:package:: genion

   |downloads_genion| |docker_genion|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genion

   and update with::

      conda update genion

   or use the docker container::

      docker pull quay.io/biocontainers/genion:<tag>

   (see `genion/tags`_ for valid values for ``<tag>``)


.. |downloads_genion| image:: https://img.shields.io/conda/dn/bioconda/genion.svg?style=flat
   :target: https://anaconda.org/bioconda/genion
   :alt:   (downloads)
.. |docker_genion| image:: https://quay.io/repository/biocontainers/genion/status
   :target: https://quay.io/repository/biocontainers/genion
.. _`genion/tags`: https://quay.io/repository/biocontainers/genion?tab=tags


.. raw:: html

    <script>
        var package = "genion";
        var versions = ["1.1.0","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genion/README.html