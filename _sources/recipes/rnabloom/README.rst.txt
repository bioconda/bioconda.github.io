:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnabloom'
.. highlight: bash

rnabloom
========

.. conda:recipe:: rnabloom
   :replaces_section_title:
   :noindex:

   Java tool for RNA\-seq assembly

   :homepage: https://github.com/bcgsc/RNA-Bloom
   :documentation: https://github.com/bcgsc/RNA-Bloom/blob/master/README.md
   
   :license: GPL-3.0
   :recipe: /`rnabloom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabloom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnabloom/meta.yaml>`_

   RNA\-Bloom is a lightweight reference\-free transcript sequence assembly tool for short reads and nanopore reads.


.. conda:package:: rnabloom

   |downloads_rnabloom| |docker_rnabloom|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends minimap2: 
   :depends ntcard: ``>=1.2.1``
   :depends openjdk: ``>=8``
   :depends racon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnabloom

   and update with::

      conda update rnabloom

   or use the docker container::

      docker pull quay.io/biocontainers/rnabloom:<tag>

   (see `rnabloom/tags`_ for valid values for ``<tag>``)


.. |downloads_rnabloom| image:: https://img.shields.io/conda/dn/bioconda/rnabloom.svg?style=flat
   :target: https://anaconda.org/bioconda/rnabloom
   :alt:   (downloads)
.. |docker_rnabloom| image:: https://quay.io/repository/biocontainers/rnabloom/status
   :target: https://quay.io/repository/biocontainers/rnabloom
.. _`rnabloom/tags`: https://quay.io/repository/biocontainers/rnabloom?tab=tags


.. raw:: html

    <script>
        var package = "rnabloom";
        var versions = ["1.3.1","1.3.1","1.3.0","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnabloom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnabloom/README.html