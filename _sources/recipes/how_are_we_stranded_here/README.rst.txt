:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'how_are_we_stranded_here'
.. highlight: bash

how_are_we_stranded_here
========================

.. conda:recipe:: how_are_we_stranded_here
   :replaces_section_title:
   :noindex:

   Python package for testing strandedness of RNA\-Seq fastq files

   :homepage: https://github.com/betsig/how_are_we_stranded_here
   :license: MIT / MIT
   :recipe: /`how_are_we_stranded_here <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/how_are_we_stranded_here>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/how_are_we_stranded_here/meta.yaml>`_

   


.. conda:package:: how_are_we_stranded_here

   |downloads_how_are_we_stranded_here| |docker_how_are_we_stranded_here|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends kallisto: ``0.44.0.*``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends rseqc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install how_are_we_stranded_here

   and update with::

      conda update how_are_we_stranded_here

   or use the docker container::

      docker pull quay.io/biocontainers/how_are_we_stranded_here:<tag>

   (see `how_are_we_stranded_here/tags`_ for valid values for ``<tag>``)


.. |downloads_how_are_we_stranded_here| image:: https://img.shields.io/conda/dn/bioconda/how_are_we_stranded_here.svg?style=flat
   :target: https://anaconda.org/bioconda/how_are_we_stranded_here
   :alt:   (downloads)
.. |docker_how_are_we_stranded_here| image:: https://quay.io/repository/biocontainers/how_are_we_stranded_here/status
   :target: https://quay.io/repository/biocontainers/how_are_we_stranded_here
.. _`how_are_we_stranded_here/tags`: https://quay.io/repository/biocontainers/how_are_we_stranded_here?tab=tags


.. raw:: html

    <script>
        var package = "how_are_we_stranded_here";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/how_are_we_stranded_here/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/how_are_we_stranded_here/README.html