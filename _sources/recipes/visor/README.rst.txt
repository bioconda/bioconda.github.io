:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'visor'
.. highlight: bash

visor
=====

.. conda:recipe:: visor
   :replaces_section_title:
   :noindex:

   Haplotype\-aware structural variants simulator for short\, long and linked reads

   :homepage: https://github.com/davidebolo1993/VISOR.git
   :license: LGPL-3.0
   :recipe: /`visor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visor/meta.yaml>`_

   


.. conda:package:: visor

   |downloads_visor| |docker_visor|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends badread: ``>=0.2.0``
   :depends mappy: ``>=2.17``
   :depends minimap2: ``>=2.17``
   :depends numpy: ``>=1.15.3``
   :depends plotly: ``3.10.0``
   :depends pybedtools: ``>=0.8.0``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends pysam: ``>=0.15.0``
   :depends python: 
   :depends pywgsim: ``>=0.3.3``
   :depends samtools: ``>=1.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install visor

   and update with::

      conda update visor

   or use the docker container::

      docker pull quay.io/biocontainers/visor:<tag>

   (see `visor/tags`_ for valid values for ``<tag>``)


.. |downloads_visor| image:: https://img.shields.io/conda/dn/bioconda/visor.svg?style=flat
   :target: https://anaconda.org/bioconda/visor
   :alt:   (downloads)
.. |docker_visor| image:: https://quay.io/repository/biocontainers/visor/status
   :target: https://quay.io/repository/biocontainers/visor
.. _`visor/tags`: https://quay.io/repository/biocontainers/visor?tab=tags


.. raw:: html

    <script>
        var package = "visor";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/visor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/visor/README.html