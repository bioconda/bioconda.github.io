:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'notramp'
.. highlight: bash

notramp
=======

.. conda:recipe:: notramp
   :replaces_section_title:
   :noindex:

   Normalization and Trimming of long\-read \(ONT\, PB\) amplicon sequencing data

   :homepage: https://github.com/simakro/NoTrAmp.git
   :documentation: https://github.com/simakro/NoTrAmp/blob/main/README.md
   
   :license: BSD / BSD-2
   :recipe: /`notramp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/notramp/meta.yaml>`_

   


.. conda:package:: notramp

   |downloads_notramp| |docker_notramp|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends minimap2: 
   :depends psutil: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install notramp

   and update with::

      conda update notramp

   or use the docker container::

      docker pull quay.io/biocontainers/notramp:<tag>

   (see `notramp/tags`_ for valid values for ``<tag>``)


.. |downloads_notramp| image:: https://img.shields.io/conda/dn/bioconda/notramp.svg?style=flat
   :target: https://anaconda.org/bioconda/notramp
   :alt:   (downloads)
.. |docker_notramp| image:: https://quay.io/repository/biocontainers/notramp/status
   :target: https://quay.io/repository/biocontainers/notramp
.. _`notramp/tags`: https://quay.io/repository/biocontainers/notramp?tab=tags


.. raw:: html

    <script>
        var package = "notramp";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/notramp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/notramp/README.html