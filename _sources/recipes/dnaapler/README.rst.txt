:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaapler'
.. highlight: bash

dnaapler
========

.. conda:recipe:: dnaapler
   :replaces_section_title:
   :noindex:

   Reorients assembled microbial sequences

   :homepage: https://github.com/gbouras13/dnaapler
   :license: MIT
   :recipe: /`dnaapler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler/meta.yaml>`_

   


.. conda:package:: dnaapler

   |downloads_dnaapler| |docker_dnaapler|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.10``
   :depends click: ``>=8.0.0``
   :depends loguru: ``>=0.5.3``
   :depends pandas: ``>=1.4.2``
   :depends pyrodigal: ``>=2.0.0``
   :depends python: ``>=3.8,<4.0``
   :depends pyyaml: ``>=6.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnaapler

   and update with::

      conda update dnaapler

   or use the docker container::

      docker pull quay.io/biocontainers/dnaapler:<tag>

   (see `dnaapler/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaapler| image:: https://img.shields.io/conda/dn/bioconda/dnaapler.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaapler
   :alt:   (downloads)
.. |docker_dnaapler| image:: https://quay.io/repository/biocontainers/dnaapler/status
   :target: https://quay.io/repository/biocontainers/dnaapler
.. _`dnaapler/tags`: https://quay.io/repository/biocontainers/dnaapler?tab=tags


.. raw:: html

    <script>
        var package = "dnaapler";
        var versions = ["0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaapler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaapler/README.html