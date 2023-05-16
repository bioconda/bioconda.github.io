:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gopeaks'
.. highlight: bash

gopeaks
=======

.. conda:recipe:: gopeaks
   :replaces_section_title:
   :noindex:

   Peak caller for CUT\&TAG data

   :homepage: https://github.com/maxsonBraunLab/gopeaks
   :license: MIT / MIT
   :recipe: /`gopeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gopeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gopeaks/meta.yaml>`_

   GoPeaks is a peak caller designed for CUT\&TAG\/CUT\&RUN sequencing data. GoPeaks by default works best with narrow peaks such as H3K4me3 and transcription factors. However\, broad epigenetic marks like H3K27Ac\/H3K4me1 require different the step\, slide\, and minwidth parameters. We encourage users to explore the parameters of GoPeaks to analyze their data.


.. conda:package:: gopeaks

   |downloads_gopeaks| |docker_gopeaks|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gopeaks

   and update with::

      conda update gopeaks

   or use the docker container::

      docker pull quay.io/biocontainers/gopeaks:<tag>

   (see `gopeaks/tags`_ for valid values for ``<tag>``)


.. |downloads_gopeaks| image:: https://img.shields.io/conda/dn/bioconda/gopeaks.svg?style=flat
   :target: https://anaconda.org/bioconda/gopeaks
   :alt:   (downloads)
.. |docker_gopeaks| image:: https://quay.io/repository/biocontainers/gopeaks/status
   :target: https://quay.io/repository/biocontainers/gopeaks
.. _`gopeaks/tags`: https://quay.io/repository/biocontainers/gopeaks?tab=tags


.. raw:: html

    <script>
        var package = "gopeaks";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gopeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gopeaks/README.html