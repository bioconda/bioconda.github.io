:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consan'
.. highlight: bash

consan
======

.. conda:recipe:: consan
   :replaces_section_title:
   :noindex:

   Pairwise RNA structural alignment\, both unconstrained and constrained on alignment pins.

   :homepage: http://eddylab.org/software/consan/
   :license: GPL-3.0
   :recipe: /`consan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consan/meta.yaml>`_

   


.. conda:package:: consan

   |downloads_consan| |docker_consan|

   :versions:
      
      

      ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install consan

   and update with::

      conda update consan

   or use the docker container::

      docker pull quay.io/biocontainers/consan:<tag>

   (see `consan/tags`_ for valid values for ``<tag>``)


.. |downloads_consan| image:: https://img.shields.io/conda/dn/bioconda/consan.svg?style=flat
   :target: https://anaconda.org/bioconda/consan
   :alt:   (downloads)
.. |docker_consan| image:: https://quay.io/repository/biocontainers/consan/status
   :target: https://quay.io/repository/biocontainers/consan
.. _`consan/tags`: https://quay.io/repository/biocontainers/consan?tab=tags


.. raw:: html

    <script>
        var package = "consan";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consan/README.html