:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peekseq'
.. highlight: bash

peekseq
=======

.. conda:recipe:: peekseq
   :replaces_section_title:
   :noindex:

   De novo protein\-coding potential calculator using a k\-mer approach

   :homepage: https://github.com/bcgsc/peekseq
   :license: GPL-3.0
   :recipe: /`peekseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peekseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peekseq/meta.yaml>`_

   


.. conda:package:: peekseq

   |downloads_peekseq| |docker_peekseq|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peekseq

   and update with::

      conda update peekseq

   or use the docker container::

      docker pull quay.io/biocontainers/peekseq:<tag>

   (see `peekseq/tags`_ for valid values for ``<tag>``)


.. |downloads_peekseq| image:: https://img.shields.io/conda/dn/bioconda/peekseq.svg?style=flat
   :target: https://anaconda.org/bioconda/peekseq
   :alt:   (downloads)
.. |docker_peekseq| image:: https://quay.io/repository/biocontainers/peekseq/status
   :target: https://quay.io/repository/biocontainers/peekseq
.. _`peekseq/tags`: https://quay.io/repository/biocontainers/peekseq?tab=tags


.. raw:: html

    <script>
        var package = "peekseq";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peekseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peekseq/README.html