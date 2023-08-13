:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cycle_finder'
.. highlight: bash

cycle_finder
============

.. conda:recipe:: cycle_finder
   :replaces_section_title:
   :noindex:

   A de novo analysis tool for tandem and interspersed repeats based on cycle\-finding

   :homepage: https://github.com/rkajitani/cycle_finder
   :license: GPL / GPL-3.0
   :recipe: /`cycle_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder/meta.yaml>`_

   


.. conda:package:: cycle_finder

   |downloads_cycle_finder| |docker_cycle_finder|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends blast: 
   :depends bzip2: 
   :depends cd-hit: 
   :depends gzip: 
   :depends jellyfish: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmp: 
   :depends trf: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cycle_finder

   and update with::

      conda update cycle_finder

   or use the docker container::

      docker pull quay.io/biocontainers/cycle_finder:<tag>

   (see `cycle_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_cycle_finder| image:: https://img.shields.io/conda/dn/bioconda/cycle_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/cycle_finder
   :alt:   (downloads)
.. |docker_cycle_finder| image:: https://quay.io/repository/biocontainers/cycle_finder/status
   :target: https://quay.io/repository/biocontainers/cycle_finder
.. _`cycle_finder/tags`: https://quay.io/repository/biocontainers/cycle_finder?tab=tags


.. raw:: html

    <script>
        var package = "cycle_finder";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cycle_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cycle_finder/README.html