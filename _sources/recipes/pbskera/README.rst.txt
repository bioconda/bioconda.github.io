:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbskera'
.. highlight: bash

pbskera
=======

.. conda:recipe:: pbskera
   :replaces_section_title:
   :noindex:

   PacBio tool to split concatenated read designs

   :homepage: https://github.com/PacificBiosciences/skera
   :license: BSD-3-Clause-Clear
   :recipe: /`pbskera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbskera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbskera/meta.yaml>`_

   


.. conda:package:: pbskera

   |downloads_pbskera| |docker_pbskera|

   :versions:
      
      

      ``1.1.0-0``,  ``0.1.0-0``,  ``0.0.102-0``,  ``0.0.101-0``,  ``0.0.100-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbskera

   and update with::

      conda update pbskera

   or use the docker container::

      docker pull quay.io/biocontainers/pbskera:<tag>

   (see `pbskera/tags`_ for valid values for ``<tag>``)


.. |downloads_pbskera| image:: https://img.shields.io/conda/dn/bioconda/pbskera.svg?style=flat
   :target: https://anaconda.org/bioconda/pbskera
   :alt:   (downloads)
.. |docker_pbskera| image:: https://quay.io/repository/biocontainers/pbskera/status
   :target: https://quay.io/repository/biocontainers/pbskera
.. _`pbskera/tags`: https://quay.io/repository/biocontainers/pbskera?tab=tags


.. raw:: html

    <script>
        var package = "pbskera";
        var versions = ["1.1.0","0.1.0","0.0.102","0.0.101","0.0.100"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbskera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbskera/README.html