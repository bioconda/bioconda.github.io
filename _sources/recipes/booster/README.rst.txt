:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'booster'
.. highlight: bash

booster
=======

.. conda:recipe:: booster
   :replaces_section_title:
   :noindex:

   BOOSTER is a new way of computing bootstrap supports in large phylogenies.

   :homepage: https://github.com/evolbioinfo/booster
   :license: GPL-2.0
   :recipe: /`booster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/booster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/booster/meta.yaml>`_

   


.. conda:package:: booster

   |downloads_booster| |docker_booster|

   :versions:
      
      

      ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install booster

   and update with::

      conda update booster

   or use the docker container::

      docker pull quay.io/biocontainers/booster:<tag>

   (see `booster/tags`_ for valid values for ``<tag>``)


.. |downloads_booster| image:: https://img.shields.io/conda/dn/bioconda/booster.svg?style=flat
   :target: https://anaconda.org/bioconda/booster
   :alt:   (downloads)
.. |docker_booster| image:: https://quay.io/repository/biocontainers/booster/status
   :target: https://quay.io/repository/biocontainers/booster
.. _`booster/tags`: https://quay.io/repository/biocontainers/booster?tab=tags


.. raw:: html

    <script>
        var package = "booster";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/booster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/booster/README.html