:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiphase'
.. highlight: bash

hiphase
=======

.. conda:recipe:: hiphase
   :replaces_section_title:
   :noindex:

   Small and structural variant phasing tool for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/HiPhase
   :license: BSD-3-Clause-Clear
   :recipe: /`hiphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiphase/meta.yaml>`_

   


.. conda:package:: hiphase

   |downloads_hiphase| |docker_hiphase|

   :versions:
      
      

      ``0.8.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hiphase

   and update with::

      conda update hiphase

   or use the docker container::

      docker pull quay.io/biocontainers/hiphase:<tag>

   (see `hiphase/tags`_ for valid values for ``<tag>``)


.. |downloads_hiphase| image:: https://img.shields.io/conda/dn/bioconda/hiphase.svg?style=flat
   :target: https://anaconda.org/bioconda/hiphase
   :alt:   (downloads)
.. |docker_hiphase| image:: https://quay.io/repository/biocontainers/hiphase/status
   :target: https://quay.io/repository/biocontainers/hiphase
.. _`hiphase/tags`: https://quay.io/repository/biocontainers/hiphase?tab=tags


.. raw:: html

    <script>
        var package = "hiphase";
        var versions = ["0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiphase/README.html