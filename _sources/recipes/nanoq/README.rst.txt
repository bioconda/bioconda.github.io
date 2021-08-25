:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoq'
.. highlight: bash

nanoq
=====

.. conda:recipe:: nanoq
   :replaces_section_title:
   :noindex:

   Minimal but speedy quality control for nanopore reads.

   :homepage: https://github.com/esteinig/nanoq
   :license: MIT / MIT
   :recipe: /`nanoq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq/meta.yaml>`_

   


.. conda:package:: nanoq

   |downloads_nanoq| |docker_nanoq|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoq

   and update with::

      conda update nanoq

   or use the docker container::

      docker pull quay.io/biocontainers/nanoq:<tag>

   (see `nanoq/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoq| image:: https://img.shields.io/conda/dn/bioconda/nanoq.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoq
   :alt:   (downloads)
.. |docker_nanoq| image:: https://quay.io/repository/biocontainers/nanoq/status
   :target: https://quay.io/repository/biocontainers/nanoq
.. _`nanoq/tags`: https://quay.io/repository/biocontainers/nanoq?tab=tags


.. raw:: html

    <script>
        var package = "nanoq";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoq/README.html