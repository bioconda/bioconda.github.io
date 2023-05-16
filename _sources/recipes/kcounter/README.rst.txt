:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kcounter'
.. highlight: bash

kcounter
========

.. conda:recipe:: kcounter
   :replaces_section_title:
   :noindex:

   A simple package for counting DNA k\-mers in Python. Written in Rust.

   :homepage: http://apcamargo.github.io/kcounter/
   :license: GPL / GPL-3
   :recipe: /`kcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcounter/meta.yaml>`_

   


.. conda:package:: kcounter

   |downloads_kcounter| |docker_kcounter|

   :versions:
      
      

      ``0.1.1-4``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kcounter

   and update with::

      conda update kcounter

   or use the docker container::

      docker pull quay.io/biocontainers/kcounter:<tag>

   (see `kcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_kcounter| image:: https://img.shields.io/conda/dn/bioconda/kcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/kcounter
   :alt:   (downloads)
.. |docker_kcounter| image:: https://quay.io/repository/biocontainers/kcounter/status
   :target: https://quay.io/repository/biocontainers/kcounter
.. _`kcounter/tags`: https://quay.io/repository/biocontainers/kcounter?tab=tags


.. raw:: html

    <script>
        var package = "kcounter";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kcounter/README.html