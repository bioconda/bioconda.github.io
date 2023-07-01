:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbfusion'
.. highlight: bash

pbfusion
========

.. conda:recipe:: pbfusion
   :replaces_section_title:
   :noindex:

   Fusion gene detection tool for PacBio Iso\-Seq data

   :homepage: https://github.com/PacificBiosciences/pbfusion
   :license: BSD-3-Clause-Clear
   :recipe: /`pbfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbfusion/meta.yaml>`_

   


.. conda:package:: pbfusion

   |downloads_pbfusion| |docker_pbfusion|

   :versions:
      
      

      ``0.2.2-0``,  ``0.1.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbfusion

   and update with::

      conda update pbfusion

   or use the docker container::

      docker pull quay.io/biocontainers/pbfusion:<tag>

   (see `pbfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_pbfusion| image:: https://img.shields.io/conda/dn/bioconda/pbfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/pbfusion
   :alt:   (downloads)
.. |docker_pbfusion| image:: https://quay.io/repository/biocontainers/pbfusion/status
   :target: https://quay.io/repository/biocontainers/pbfusion
.. _`pbfusion/tags`: https://quay.io/repository/biocontainers/pbfusion?tab=tags


.. raw:: html

    <script>
        var package = "pbfusion";
        var versions = ["0.2.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbfusion/README.html