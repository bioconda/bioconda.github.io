:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salty'
.. highlight: bash

salty
=====

.. conda:recipe:: salty
   :replaces_section_title:
   :noindex:

   SaLTy assigns a lineage to Staphylococcus aureus WGS data and is suitable for describing large\-scale S. aureus genomic epidemiology.

   :homepage: https://github.com/LanLab/salty
   :license: GPL3
   :recipe: /`salty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salty/meta.yaml>`_

   


.. conda:package:: salty

   |downloads_salty| |docker_salty|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends kma: ``>=1.4.9``
   :depends pandas: ``>=1.5.0``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install salty

   and update with::

      conda update salty

   or use the docker container::

      docker pull quay.io/biocontainers/salty:<tag>

   (see `salty/tags`_ for valid values for ``<tag>``)


.. |downloads_salty| image:: https://img.shields.io/conda/dn/bioconda/salty.svg?style=flat
   :target: https://anaconda.org/bioconda/salty
   :alt:   (downloads)
.. |docker_salty| image:: https://quay.io/repository/biocontainers/salty/status
   :target: https://quay.io/repository/biocontainers/salty
.. _`salty/tags`: https://quay.io/repository/biocontainers/salty?tab=tags


.. raw:: html

    <script>
        var package = "salty";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salty/README.html