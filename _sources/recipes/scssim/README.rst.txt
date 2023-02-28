:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scssim'
.. highlight: bash

scssim
======

.. conda:recipe:: scssim
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for simulating single\-cell genome sequencing data

   :homepage: https://github.com/qasimyu/scssim
   :license: BSD 3-Clause
   :recipe: /`scssim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scssim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scssim/meta.yaml>`_

   


.. conda:package:: scssim

   |downloads_scssim| |docker_scssim|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scssim

   and update with::

      conda update scssim

   or use the docker container::

      docker pull quay.io/biocontainers/scssim:<tag>

   (see `scssim/tags`_ for valid values for ``<tag>``)


.. |downloads_scssim| image:: https://img.shields.io/conda/dn/bioconda/scssim.svg?style=flat
   :target: https://anaconda.org/bioconda/scssim
   :alt:   (downloads)
.. |docker_scssim| image:: https://quay.io/repository/biocontainers/scssim/status
   :target: https://quay.io/repository/biocontainers/scssim
.. _`scssim/tags`: https://quay.io/repository/biocontainers/scssim?tab=tags


.. raw:: html

    <script>
        var package = "scssim";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scssim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scssim/README.html