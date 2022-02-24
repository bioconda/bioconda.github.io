:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slamem'
.. highlight: bash

slamem
======

.. conda:recipe:: slamem
   :replaces_section_title:
   :noindex:

   slamem bioconda package from https\:\/\/github.com\/fjdf\/slaMEM

   :homepage: https://github.com/sguizard/slaMEM
   :license: GPL-3.0 License
   :recipe: /`slamem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamem/meta.yaml>`_

   


.. conda:package:: slamem

   |downloads_slamem| |docker_slamem|

   :versions:
      
      

      ``0.8.5-1``,  ``0.8.5-0``,  ``v0.8.5-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slamem

   and update with::

      conda update slamem

   or use the docker container::

      docker pull quay.io/biocontainers/slamem:<tag>

   (see `slamem/tags`_ for valid values for ``<tag>``)


.. |downloads_slamem| image:: https://img.shields.io/conda/dn/bioconda/slamem.svg?style=flat
   :target: https://anaconda.org/bioconda/slamem
   :alt:   (downloads)
.. |docker_slamem| image:: https://quay.io/repository/biocontainers/slamem/status
   :target: https://quay.io/repository/biocontainers/slamem
.. _`slamem/tags`: https://quay.io/repository/biocontainers/slamem?tab=tags


.. raw:: html

    <script>
        var package = "slamem";
        var versions = ["0.8.5","0.8.5","v0.8.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slamem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slamem/README.html