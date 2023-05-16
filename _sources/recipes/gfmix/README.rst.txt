:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfmix'
.. highlight: bash

gfmix
=====

.. conda:recipe:: gfmix
   :replaces_section_title:
   :noindex:

   Accelerated Estimation of Frequency Classes in Site\-heterogeneous Profile Mixture Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/gfmix.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`gfmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfmix/meta.yaml>`_

   


.. conda:package:: gfmix

   |downloads_gfmix| |docker_gfmix|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libiconv: 
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: 
   :depends readline: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfmix

   and update with::

      conda update gfmix

   or use the docker container::

      docker pull quay.io/biocontainers/gfmix:<tag>

   (see `gfmix/tags`_ for valid values for ``<tag>``)


.. |downloads_gfmix| image:: https://img.shields.io/conda/dn/bioconda/gfmix.svg?style=flat
   :target: https://anaconda.org/bioconda/gfmix
   :alt:   (downloads)
.. |docker_gfmix| image:: https://quay.io/repository/biocontainers/gfmix/status
   :target: https://quay.io/repository/biocontainers/gfmix
.. _`gfmix/tags`: https://quay.io/repository/biocontainers/gfmix?tab=tags


.. raw:: html

    <script>
        var package = "gfmix";
        var versions = ["1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfmix/README.html