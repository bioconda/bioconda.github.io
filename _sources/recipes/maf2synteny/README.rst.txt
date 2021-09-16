:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maf2synteny'
.. highlight: bash

maf2synteny
===========

.. conda:recipe:: maf2synteny
   :replaces_section_title:
   :noindex:

   A tool that postprocesses whole genome alignment \(for two or more genomes\) and produces coarse\-grained synteny blocks.

   :homepage: https://github.com/fenderglass/maf2synteny
   :license: BSD
   :recipe: /`maf2synteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny/meta.yaml>`_

   


.. conda:package:: maf2synteny

   |downloads_maf2synteny| |docker_maf2synteny|

   :versions:
      
      

      ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maf2synteny

   and update with::

      conda update maf2synteny

   or use the docker container::

      docker pull quay.io/biocontainers/maf2synteny:<tag>

   (see `maf2synteny/tags`_ for valid values for ``<tag>``)


.. |downloads_maf2synteny| image:: https://img.shields.io/conda/dn/bioconda/maf2synteny.svg?style=flat
   :target: https://anaconda.org/bioconda/maf2synteny
   :alt:   (downloads)
.. |docker_maf2synteny| image:: https://quay.io/repository/biocontainers/maf2synteny/status
   :target: https://quay.io/repository/biocontainers/maf2synteny
.. _`maf2synteny/tags`: https://quay.io/repository/biocontainers/maf2synteny?tab=tags


.. raw:: html

    <script>
        var package = "maf2synteny";
        var versions = ["1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maf2synteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maf2synteny/README.html