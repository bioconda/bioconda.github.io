:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'happer'
.. highlight: bash

happer
======

.. conda:recipe:: happer
   :replaces_section_title:
   :noindex:

   Minimal Python library for generating haplotype sequences.

   :homepage: https://github.com/bioforensics/happer/
   :license: BSD / BSD License
   :recipe: /`happer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happer/meta.yaml>`_

   


.. conda:package:: happer

   |downloads_happer| |docker_happer|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install happer

   and update with::

      conda update happer

   or use the docker container::

      docker pull quay.io/biocontainers/happer:<tag>

   (see `happer/tags`_ for valid values for ``<tag>``)


.. |downloads_happer| image:: https://img.shields.io/conda/dn/bioconda/happer.svg?style=flat
   :target: https://anaconda.org/bioconda/happer
   :alt:   (downloads)
.. |docker_happer| image:: https://quay.io/repository/biocontainers/happer/status
   :target: https://quay.io/repository/biocontainers/happer
.. _`happer/tags`: https://quay.io/repository/biocontainers/happer?tab=tags


.. raw:: html

    <script>
        var package = "happer";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/happer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/happer/README.html