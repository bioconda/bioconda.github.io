:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-fcs-gx'
.. highlight: bash

ncbi-fcs-gx
===========

.. conda:recipe:: ncbi-fcs-gx
   :replaces_section_title:
   :noindex:

   The NCBI Foreign Contamination Screen. Genomic cross\-species aligner\, for contamination detection.

   :homepage: https://github.com/ncbi/fcs
   :license: `NCBI-PD <https://github.com/ncbi/fcs/blob/main/LICENSE.txt>`_
   :recipe: /`ncbi-fcs-gx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx/meta.yaml>`_

   


.. conda:package:: ncbi-fcs-gx

   |downloads_ncbi-fcs-gx| |docker_ncbi-fcs-gx|

   :versions:
      
      

      ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-fcs-gx

   and update with::

      conda update ncbi-fcs-gx

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-fcs-gx:<tag>

   (see `ncbi-fcs-gx/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-fcs-gx| image:: https://img.shields.io/conda/dn/bioconda/ncbi-fcs-gx.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-fcs-gx
   :alt:   (downloads)
.. |docker_ncbi-fcs-gx| image:: https://quay.io/repository/biocontainers/ncbi-fcs-gx/status
   :target: https://quay.io/repository/biocontainers/ncbi-fcs-gx
.. _`ncbi-fcs-gx/tags`: https://quay.io/repository/biocontainers/ncbi-fcs-gx?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-fcs-gx";
        var versions = ["0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html