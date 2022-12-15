:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plmc'
.. highlight: bash

plmc
====

.. conda:recipe:: plmc
   :replaces_section_title:
   :noindex:

   Inference of couplings in proteins and RNAs from sequence variation.

   :homepage: https://github.com/debbiemarkslab/plmc
   :license: MIT
   :recipe: /`plmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plmc/meta.yaml>`_

   


.. conda:package:: plmc

   |downloads_plmc| |docker_plmc|

   :versions:
      
      

      ``20221105-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plmc

   and update with::

      conda update plmc

   or use the docker container::

      docker pull quay.io/biocontainers/plmc:<tag>

   (see `plmc/tags`_ for valid values for ``<tag>``)


.. |downloads_plmc| image:: https://img.shields.io/conda/dn/bioconda/plmc.svg?style=flat
   :target: https://anaconda.org/bioconda/plmc
   :alt:   (downloads)
.. |docker_plmc| image:: https://quay.io/repository/biocontainers/plmc/status
   :target: https://quay.io/repository/biocontainers/plmc
.. _`plmc/tags`: https://quay.io/repository/biocontainers/plmc?tab=tags


.. raw:: html

    <script>
        var package = "plmc";
        var versions = ["20221105"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plmc/README.html