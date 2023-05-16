:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psmc'
.. highlight: bash

psmc
====

.. conda:recipe:: psmc
   :replaces_section_title:
   :noindex:

   This software package infers population size history from a diploid sequence using the Pairwise Sequentially Markovian Coalescent \(PSMC\) model


   :homepage: https://github.com/lh3/psmc
   :license: MIT license
   :recipe: /`psmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc/meta.yaml>`_

   


.. conda:package:: psmc

   |downloads_psmc| |docker_psmc|

   :versions:
      
      

      ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psmc

   and update with::

      conda update psmc

   or use the docker container::

      docker pull quay.io/biocontainers/psmc:<tag>

   (see `psmc/tags`_ for valid values for ``<tag>``)


.. |downloads_psmc| image:: https://img.shields.io/conda/dn/bioconda/psmc.svg?style=flat
   :target: https://anaconda.org/bioconda/psmc
   :alt:   (downloads)
.. |docker_psmc| image:: https://quay.io/repository/biocontainers/psmc/status
   :target: https://quay.io/repository/biocontainers/psmc
.. _`psmc/tags`: https://quay.io/repository/biocontainers/psmc?tab=tags


.. raw:: html

    <script>
        var package = "psmc";
        var versions = ["0.6.5","0.6.5","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psmc/README.html