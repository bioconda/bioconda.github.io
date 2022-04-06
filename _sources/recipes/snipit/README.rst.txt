:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snipit'
.. highlight: bash

snipit
======

.. conda:recipe:: snipit
   :replaces_section_title:
   :noindex:

   Visualize snps relative to a reference sequence

   :homepage: https://github.com/aineniamh/snipit
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`snipit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipit/meta.yaml>`_

   


.. conda:package:: snipit

   |downloads_snipit| |docker_snipit|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.3-0``

      

   
   :depends biopython: ``>=1.70``
   :depends matplotlib-base: ``>=3.2.1``
   :depends python: ``>3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snipit

   and update with::

      conda update snipit

   or use the docker container::

      docker pull quay.io/biocontainers/snipit:<tag>

   (see `snipit/tags`_ for valid values for ``<tag>``)


.. |downloads_snipit| image:: https://img.shields.io/conda/dn/bioconda/snipit.svg?style=flat
   :target: https://anaconda.org/bioconda/snipit
   :alt:   (downloads)
.. |docker_snipit| image:: https://quay.io/repository/biocontainers/snipit/status
   :target: https://quay.io/repository/biocontainers/snipit
.. _`snipit/tags`: https://quay.io/repository/biocontainers/snipit?tab=tags


.. raw:: html

    <script>
        var package = "snipit";
        var versions = ["1.0.5","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snipit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snipit/README.html