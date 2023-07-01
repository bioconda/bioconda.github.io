:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzmine'
.. highlight: bash

mzmine
======

.. conda:recipe:: mzmine
   :replaces_section_title:
   :noindex:

   Integrative analysis of multimodal mass spectrometry data

   :homepage: http://mzmine.github.io/
   :license: MIT
   :recipe: /`mzmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine/meta.yaml>`_

   MZmine 3 is an open\-source and platform\-independent software for mass
   spectrometry \(MS\) data processing and visualization. It enables large\-scale
   metabolomics and lipidomics research by spectral preprocessing\, feature
   detection\, and various options for compound identification\, including
   spectral library querying and creation.



.. conda:package:: mzmine

   |downloads_mzmine| |docker_mzmine|

   :versions:
      
      

      ``3.6.0-0``

      

   
   :depends openjdk: ``20.*``
   :depends pango: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mzmine

   and update with::

      conda update mzmine

   or use the docker container::

      docker pull quay.io/biocontainers/mzmine:<tag>

   (see `mzmine/tags`_ for valid values for ``<tag>``)


.. |downloads_mzmine| image:: https://img.shields.io/conda/dn/bioconda/mzmine.svg?style=flat
   :target: https://anaconda.org/bioconda/mzmine
   :alt:   (downloads)
.. |docker_mzmine| image:: https://quay.io/repository/biocontainers/mzmine/status
   :target: https://quay.io/repository/biocontainers/mzmine
.. _`mzmine/tags`: https://quay.io/repository/biocontainers/mzmine?tab=tags


.. raw:: html

    <script>
        var package = "mzmine";
        var versions = ["3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzmine/README.html