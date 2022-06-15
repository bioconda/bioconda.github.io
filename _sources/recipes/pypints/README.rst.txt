:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypints'
.. highlight: bash

pypints
=======

.. conda:recipe:: pypints
   :replaces_section_title:
   :noindex:

   Peak Identifier for Nascent Transcripts Starts \(PINTS\)

   :homepage: https://pints.yulab.org
   :developer docs: https://github.com/hyulab/PINTS
   :license: GPL / GPL-3.0-only
   :recipe: /`pypints <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypints/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01211-7`

   


.. conda:package:: pypints

   |downloads_pypints| |docker_pypints|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.0-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: 
   :depends requests: 
   :depends scipy: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypints

   and update with::

      conda update pypints

   or use the docker container::

      docker pull quay.io/biocontainers/pypints:<tag>

   (see `pypints/tags`_ for valid values for ``<tag>``)


.. |downloads_pypints| image:: https://img.shields.io/conda/dn/bioconda/pypints.svg?style=flat
   :target: https://anaconda.org/bioconda/pypints
   :alt:   (downloads)
.. |docker_pypints| image:: https://quay.io/repository/biocontainers/pypints/status
   :target: https://quay.io/repository/biocontainers/pypints
.. _`pypints/tags`: https://quay.io/repository/biocontainers/pypints?tab=tags


.. raw:: html

    <script>
        var package = "pypints";
        var versions = ["1.1.4","1.1.3","1.1.0"];
    </script>





Notes
-----
The tool provides a set of executable files\: 
\`pints\_caller\` \(for peak calling\, the main program\)\, 
\`pints\_visualizer\` \(for generating bigwig files from bam files\)\, 
\`pints\_normalizer\` \(for normalizing bigwig files by spikein counts\)\, 
and \`pints\_boundary\_extender\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypints/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypints/README.html